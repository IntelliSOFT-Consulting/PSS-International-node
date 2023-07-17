import Indicator from '../models/indicators';
import SystemComponent from '../models/systemComponents';
import Dictionary from '../utils/dictionary';
import api from '../config/api';
import EditDictionary from '../utils/dictionaryEdit';
import { getIndicatorElements } from '../utils/dataElements';

export const getIndicators = async query => {
  try {
    const { paginate, page, limit, name, code } = query;
    const pageNumber = parseInt(page) || 1;
    const limitNumber = parseInt(limit) || 50;
    const skip = (pageNumber - 1) * limitNumber;
    const filter = {};
    if (name) {
      filter['indicators.name'] = { $regex: name, $options: 'i' };
    }
    if (code) {
      filter['indicators.code'] = { $regex: code, $options: 'i' };
    }

    if (paginate === 'false') {
      const indicators = await Indicator.find(filter).sort({
        name: 1,
      });
      return indicators.map(indicator => indicator.indicators).flat();
    } else {
      const indicators = await Indicator.find(filter)
        .skip(skip)
        .limit(limitNumber)
        .sort({
          name: 1,
        });
      return indicators.map(indicator => indicator.indicators).flat();
    }
  } catch (error) {
    throw new Error(`Error getting indicators: ${error.message}`);
  }
};

export const getOptions = async () => {
  try {
    const systemComponents = await SystemComponent.find({}).sort({
      name: 1,
    });
    const { data } = await api.get(
      'indicatorTypes?fields=id,displayName&paging=false'
    );
    const sections = await Indicator.find({}).distinct('name');
    return {
      systemComponents,
      indicatorTypes: data.indicatorTypes,
      sections,
    };
  } catch (error) {
    throw new Error(`Error getting indicators: ${error.message}`);
  }
};

export const createDictionary = async data => {
  try {
    const dictionary = new Dictionary(data);
    await dictionary.createDictionary();
    return dictionary;
  } catch (error) {
    throw new Error(`Error creating dictionary: ${error.message}`);
  }
};

/*
I want the dictionary to be formatted like this:
{
    "indicatorName": "Thiong'o",
    "systemComponent": "64ae742714bdb09dc14a3370",
    "indicatorCode": "THIO",
    "dimension": "Procurement",
    "definition": "fxdgcvhbjn",
    "dataType": "NUMBER",
    "purposeAndIssues": "gdvhawbfjkvndksbfd",
    "preferredDataSources": "vneenur4",
    "benchmark": "hfuehgf7",
    "expectedFrequencyDataDissemination": "Yearly",
    "indicatorReference": "gd63g",
    "indicatorSource": "dhy3ghdy3",
    "methodOfEstimation": "COUNT",
    "assessmentQuestions": [
        {
            "name": "hdnwbjwdbe111",
            "valueType": "NUMBER"
        },
        {
            "name": "bongo222",
            "valueType": "BOOLEAN"
        }
    ],
    "createdBy": {
        "id": "M5zQapPyTZI",
        "code": "",
        "name": "admin admin",
        "username": "admin",
        "displayName": "admin admin"
    },
    "formula": {
        "format": "dLrUr8Depbr",
        "numerator": "{hg745g431}",
        "denominator": "{nvbdhvb32}"
    }
}
*/
export const getDictionary = async query => {
  try {
    const { name } = query;
    // in the indicators collection, find the indicator with any of its indicators matching the name.  indicators is an array of objects
    const indicator = await Indicator.findOne({
      'indicators.code': { $regex: name, $options: 'i' },
    });
    if (!indicator) {
      throw new Error(`No indicator with name ${name}`);
    }

    // get the indicator
    const indicatorData = indicator.indicators.find(
      indicator => indicator.code === name
    );

    // get the related data elements
    const dataElements = await getIndicatorElements(indicatorData.code);
    // {
    //   data: { dataElements },
    // } = await api.get(
    //   `dataElements?filter=code:like:${indicatorData.code}&fields=id,name,code,valueType,optionSet&paging=false`
    // );

    // get the indicator from dhis2
    const {
      data: { indicators },
    } = await api.get(
      `/indicators?filter=code:like:${indicatorData.code}&fields=id,name,code,description,numerator,denominator,indicatorType[id,name]&paging=false`
    );

    // get the program indicators from dhis2
    const {
      data: { programIndicators },
    } = await api.get(
      `/programIndicators?filter=code:like:${indicatorData.code}&fields=id,name,code,description,numerator,denominator,expression,indicatorType[id,name]&paging=false`
    );

    const indicatorDataElement = dataElements.find(
      item => item.code === indicatorData.code
    );
    // format the dictionary
    const dictionary = {
      _id: indicator._id,
      id: indicators[0]?.id,
      indicatorName: indicatorData.name,
      systemComponent: indicator.systemComponent,
      indicatorCode: indicatorData.code,
      dimension: indicatorData.dimension,
      definition: indicatorData.description,
      dataType: indicatorDataElement?.valueType,
      purposeAndIssues: indicatorData.purposeAndIssues,
      preferredDataSources: indicatorData.preferredDataSources,
      benchmark: indicatorData.benchmark,
      expectedFrequencyDataDissemination:
        indicatorData.expectedFrequencyDataDissemination,
      indicatorReference: indicatorData.indicatorReference,
      indicatorSource: indicatorData.indicatorSource,
      methodOfEstimation: indicatorData.methodOfEstimation,
      assessmentQuestions: dataElements,
      createdBy: indicatorData.createdBy,

      format: indicators[0]?.indicatorType?.id,
      numerator: indicators[0].numerator,
      denominator: indicators[0].denominator,

      dataElements: dataElements.dataElements,
      indicators: indicators.indicators,
      programIndicators: programIndicators.programIndicators,
    };

    return dictionary;
  } catch (err) {
    console.log(err);
    throw new Error(`Error getting indicator: ${err.message}`);
  }
};

export const editDictionary = async data => {
  try {
    const dictionary = EditDictionary(data);
    await dictionary.edit();
    return dictionary;
  } catch (error) {
    throw new Error(`Error editing dictionary: ${error.message}`);
  }
};
