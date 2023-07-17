import api from '../config/api';
import Indicator from '../models/indicators';

class Dictionary {
  constructor(dictionary) {
    this.dictionary = dictionary;
    this.createdDataElements = [];
    this.dataElementGroup = null;
    this.programIndicator = null;
    this.indicator = null;
    this.program = null;
  }

  formatDataElements() {
    // create data element for benchmark
    const benchmarkDataElement = {
      name: this.dictionary.indicatorCode + '_Benchmark',
      shortName: this.dictionary.indicatorCode + '_Benchmark',
      code: this.dictionary.indicatorCode + '_Benchmark',
      domainType: 'AGGREGATE',
      valueType: 'NUMBER',
      aggregationType: 'NONE',
      zeroIsSignificant: true,
    };

    // create data element for indicator
    const indicatorDataElement = {
      name: this.dictionary.indicatorName,
      shortName: this.dictionary.indicatorName,
      code: this.dictionary.indicatorCode,
      domainType: 'TRACKER',
      valueType: this.dictionary.dataType,
      aggregationType: this.dictionary.methodOfEstimation,
      zeroIsSignificant: true,
    };

    // create data element for assessment questions
    const assessmentQuestions = this.dictionary.assessmentQuestions;
    const assessmentQuestionsDataElements = assessmentQuestions.map(
      (question, index) => {
        const dataElement = {
          name: question.name,
          shortName: question.name,
          code: this.dictionary.indicatorCode + String.fromCharCode(97 + index),
          domainType: 'TRACKER',
          valueType: question.valueType,
          aggregationType: this.dictionary.methodOfEstimation,
          zeroIsSignificant: true,
        };
        if (question.optionSet) {
          dataElement.optionSet = question.optionSet;
        }
        return dataElement;
      }
    );

    const combinedDataElements = [
      ...assessmentQuestionsDataElements,
      indicatorDataElement,
    ];

    // create data element for comments and uploads
    const commentsAndUploadsDataElements = combinedDataElements.map(
      dataElement => {
        const commentAndUploadDataElements =
          this.createCommentAndUploadDataElements(dataElement.code);
        return commentAndUploadDataElements;
      }
    );

    const flattenedCommentsAndUploadsDataElements =
      commentsAndUploadsDataElements.flat();

    const combinedDataElementsWithCommentsAndUploads = [
      ...combinedDataElements,
      ...flattenedCommentsAndUploadsDataElements,
      benchmarkDataElement,
    ];

    return combinedDataElementsWithCommentsAndUploads;
  }

  createCommentAndUploadDataElements(code) {
    const commentDataElement = {
      name: `${code}_Comments`,
      shortName: `${code}_Comments`,
      code: code + '_Comments',
      domainType: 'TRACKER',
      valueType: 'TEXT',
      aggregationType: 'NONE',
      zeroIsSignificant: true,
    };

    const uploadDataElement = {
      name: `${code}_Uploads`,
      shortName: `${code}_Uploads`,
      code: code + '_Uploads',
      domainType: 'TRACKER',
      valueType: 'FILE_RESOURCE',
      aggregationType: 'NONE',
      zeroIsSignificant: true,
    };

    return [commentDataElement, uploadDataElement];
  }

  createDataElements = async () => {
    try {
      const dataElements = this.formatDataElements();
      const { data } = await api.post('/metadata', { dataElements });

      //   fetch all the data elements created
      const {
        data: { dataElements: createdDataElements },
      } = await api.get(
        `/dataElements.json?paging=false&fields=id,name,code,domainType&filter=code:in:[${dataElements
          .map(dataElement => dataElement.code)
          .join(',')}]`
      );
      this.createdDataElements = createdDataElements;
      return data;
    } catch (error) {
      throw new Error(`Error creating data elements: ${error.message}`);
    }
  };

  createDataElementGroup = async () => {
    if (this.createdDataElements.length > 0) {
      const dataElementGroup = {
        name: this.dictionary.indicatorCode,
        shortName: this.dictionary.indicatorCode,
        code: this.dictionary.indicatorCode,
        dataElements: this.createdDataElements.map(dataElement => ({
          id: dataElement.id,
        })),
      };
      try {
        const { data } = await api.post('/dataElementGroups', dataElementGroup);
        // get the group id and set it to the this.dataElementGroup
        this.dataElementGroup = data?.response;
        return data;
      } catch (error) {
        await this.deleteCreatedDataElements();
        throw new Error(`Error creating data element group: ${error.message}`);
      }
    }
  };

  addBenchmarkDataElementToDataSet = async () => {
    try {
      const {
        data: { dataSets },
      } = await api.get(
        `/dataSets.json?paging=false&fields=*&filter=name:eq:PSS Benchmarks`
      );
      const dataSet = dataSets[0];
      const { data } = await api.post('/metadata', {
        dataSets: [
          {
            ...dataSet,
            dataSetElements: [
              ...dataSet.dataSetElements,
              {
                dataSet: {
                  id: dataSet.id,
                },
                dataElement: {
                  id: this.createdDataElements.find(
                    dataElement =>
                      dataElement.code ===
                      `${this.dictionary.indicatorCode}_Benchmark`
                  )?.id,
                },
              },
            ],
          },
        ],
      });
      return data;
    } catch (error) {
      console.log('Error response: ', error);
      if (error.response.data) {
        await this.deleteCreatedDataElements();
        throw new Error(`Error adding benchmark data element to data set`);
      }
    }
  };

  addDataElementsToProgram = async () => {
    try {
      const {
        data: { programs },
      } = await api.get(
        `/programs.json?paging=false&fields=id,programStages[*]&filter=name:eq:PSS Assessments`
      );
      const program = programs[0];
      this.program = program;
      const { data } = await api.post('/metadata', {
        programStages: [
          {
            ...program.programStages[0],
            programStageDataElements: [
              ...program.programStages[0].programStageDataElements,
              ...this.createdDataElements
                .filter(item => item.domainType === 'TRACKER')
                .map(dataElement => ({
                  dataElement,
                })),
            ],
          },
        ],
      });
      return data;
    } catch (error) {
      await this.deleteDataElementGroup();
      throw new Error(`Error adding data elements to program`);
    }
  };

  createProgramIndicator = async () => {
    const programIndicator = {
      name: this.dictionary.indicatorName,
      shortName: this.dictionary.indicatorCode,
      code: this.dictionary.indicatorCode,
      description: this.dictionary.definition,
      displayInForm: true,
      expression: 'V{event_count}',
      analyticsType: 'EVENT',
      aggregationType: this.dictionary.methodOfEstimation,
      filter: this.dictionary.expression,
      program: {
        id: this.program.id,
      },
      analyticsPeriodBoundaries: [
        {
          boundaryTarget: 'EVENT_DATE',
          analyticsPeriodBoundaryType: 'AFTER_START_OF_REPORTING_PERIOD',
        },
        {
          boundaryTarget: 'EVENT_DATE',
          analyticsPeriodBoundaryType: 'BEFORE_END_OF_REPORTING_PERIOD',
        },
      ],
    };
    try {
      const { data } = await api.post('/programIndicators', programIndicator);
      this.programIndicator = data?.response;
      return data;
    } catch (error) {
      this.removeDataElementsFromProgram();
      throw new Error(`Error creating program indicator`);
    }
  };

  createIndicator = async () => {
    const indicator = {
      name: this.dictionary.indicatorCode,
      shortName: this.dictionary.indicatorCode,
      code: this.dictionary.indicatorCode,
      description: this.dictionary.definition,
      numerator: this.dictionary.formula.numerator,
      denominator: this.dictionary.formula.denominator,
      indicatorType: { id: this.dictionary.formula.format },
    };
    try {
      const { data } = await api.post('/indicators', indicator);
      this.indicator = data?.response;
      return data;
    } catch (error) {
      await this.deleteProgramIndicator();
      throw new Error(`Error creating indicator`);
    }
  };

  saveIndicator = async () => {
    try {
      // if  indicators already exists with the same system component, update the indicators
      const existingIndicator = await Indicator.findOne({
        systemComponent: this.dictionary.systemComponent,
      });
      if (existingIndicator) {
        existingIndicator.indicators.push({
          name: this.dictionary.indicatorName,
          description: this.dictionary.definition,
          code: this.dictionary.indicatorCode,
          dimension: this.dictionary.dimension,
          createdBy: this.dictionary.createdBy,
          expectedFrequencyDataDissemination:
            this.dictionary.expectedFrequencyDataDissemination,
          indicatorReference: this.dictionary.indicatorReference,
        });
        await existingIndicator.save();
        return existingIndicator;
      } else {
        const indicator = new Indicator({
          systemComponent: this.dictionary.systemComponent,
          description: this.dictionary.description,
          indicators: [
            {
              name: this.dictionary.indicatorName,
              description: this.dictionary.definition,
              code: this.dictionary.indicatorCode,
              dimension: this.dictionary.dimension,
              createdBy: this.dictionary.createdBy,
              expectedFrequencyDataDissemination:
                this.dictionary.expectedFrequencyDataDissemination,
              indicatorReference: this.dictionary.indicatorReference,
            },
          ],
        });
        await indicator.save();
        return indicator;
      }
    } catch (error) {
      console.log('Error response: ', error);
      await this.deleteIndicator();

      throw new Error(`Error saving indicator`);
    }
  };

  createDictionary = async () => {
    try {
      const dataElements = await this.createDataElements();
      const dataElementGroup = await this.createDataElementGroup();
      const benchmarkDataElement =
        await this.addBenchmarkDataElementToDataSet();
      const program = await this.addDataElementsToProgram();
      const programIndicator = await this.createProgramIndicator();
      const indicator = await this.createIndicator();
      const indicatorModel = await this.saveIndicator();
      return {
        dataElements,
        dataElementGroup,
        benchmarkDataElement,
        program,
        programIndicator,
        indicator,
        indicatorModel,
      };
    } catch (error) {
      throw new Error(`Error creating dictionary: ${error.message}`);
    }
  };

  deleteCreatedDataElements = async () => {
    try {
      console.log('Deleting all data elements');
      if (this.createdDataElements?.length > 0) {
        const deleteRequests = await Promise.all(
          this.createdDataElements.map(async dataElement => {
            const { data } = await api.delete(
              `/dataElements/${dataElement.id}`
            );
            return data;
          })
        );
        console.log(`Deleted all data elements`);
        return deleteRequests;
      }
    } catch (error) {
      console.log(error);
    }
  };

  deleteDataElementGroup = async () => {
    try {
      console.log('Deleting data element group');
      await this.deleteCreatedDataElements();
      if (this.dataElementGroup) {
        await api.delete(`/dataElementGroups/${this.dataElementGroup?.uid}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  removeDataElementsFromProgram = async () => {
    try {
      console.log('Removing data elements from program');
      const { data } = await api.post('/metadata', {
        programStages: [
          {
            ...this.program.programStages[0],
            programStageDataElements: [
              ...this.program.programStages[0].programStageDataElements,
            ],
          },
        ],
      });
      await this.deleteDataElementGroup();
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  deleteProgramIndicator = async () => {
    try {
      console.log('Deleting program indicator');
      await this.removeDataElementsFromProgram();
      if (this.programIndicator) {
        await api.delete(`/programIndicators/${this.programIndicator?.uid}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  deleteIndicator = async () => {
    try {
      console.log('Deleting indicator');
      await this.deleteProgramIndicator();
      if (this.indicator) {
        await api.delete(`/indicators/${this.indicator?.uid}`);
      }
    } catch (error) {
      console.log(error);
    }
  };
}

export default Dictionary;
