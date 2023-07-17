import api from '../config/api';
import Indicator from '../models/indicators';

class EditDictionary {
  constructor(dictionary) {
    this.dictionary = dictionary;
    this.previousCode = null;
    this.previousDataElements = null;
  }

  editIndicator = async () => {
    try {
      const { data } = await api.get(`/indicators/${this.dictionary.id}`);

      this.previousCode = data.code;

      data.name = this.dictionary.IndicatorCode;
      data.shortName = this.dictionary.IndicatorCode;
      data.code = this.dictionary.IndicatorCode;

      data.numerator = this.dictionary.formula.numerator;
      data.denominator = this.dictionary.formula.denominator;
      data.indicatorType = { id: this.dictionary.formula.format };

      await api.put(`/indicators/${this.dictionary.id}`, data);

      return data;
    } catch (error) {
      throw new Error(`Error while editing Indicator: ${error}`);
    }
  };

  editDataElements = async () => {
    try {
      const {
        data: { dataElements },
      } = await api.get(
        `/dataElements?filter=code:like:${this.previousCode}&fields=*`
      );

      const dataElementsUpdated = dataElements.map(dataElement => {
        dataElement.code = dataElement.code.replace(
          this.previousCode,
          this.dictionary.IndicatorCode
        );
        if (dataElement.code === this.previousCode) {
          dataElement.name = this.dictionary.IndicatorName;
        }
        return dataElement;
      });
      await api.post('/metadata', { dataElements: dataElementsUpdated });
      return dataElementsUpdated;
    } catch (error) {
      throw new Error(`Error while editing Data Elements: ${error}`);
    }
  };

  editDataElementGroup = async () => {
    try {
      const {
        data: { dataElementGroups },
      } = await api.get(
        `/dataElementGroups?filter=name:like:${this.previousCode}&fields=*&paging=false`
      );
      const dataElementGroup = dataElementGroups[0];
      dataElementGroup.name = this.dictionary.IndicatorCode;
      dataElementGroup.code = this.dictionary.IndicatorCode;
      dataElementGroup.shortName = this.dictionary.IndicatorCode;

      await api.put(
        `/dataElementGroups/${dataElementGroup.id}`,
        dataElementGroup
      );

      return dataElementGroup;
    } catch (error) {
      throw new Error(`Error while editing Data Element Group: ${error}`);
    }
  };

  saveIndicator = async () => {
    try {
      const existingIndicator = await Indicator.findOne({
        _id: this.dictionary._id,
      });
      if (existingIndicator) {
        existingIndicator.indicators.forEach(indicator => {
          if (indicator.code === this.previousCode) {
            indicator.name = this.dictionary.indicatorName;
            indicator.description = this.dictionary.definition;
            indicator.code = this.dictionary.indicatorCode;
            indicator.dimension = this.dictionary.dimension;
            indicator.createdBy = this.dictionary.createdBy;
            indicator.expectedFrequencyDataDissemination =
              this.dictionary.expectedFrequencyDataDissemination;
            indicator.indicatorReference = this.dictionary.indicatorReference;
          }
        });

        await existingIndicator.save();
        return existingIndicator;
      }
      throw new Error('Indicator not found');
    } catch (error) {
      throw new Error(`Error while saving Indicator: ${error}`);
    }
  };

  edit = async () => {
    try {
      const indicator = await this.editIndicator();
      const dataElements = await this.editDataElements();
      const dataElementGroup = await this.editDataElementGroup();
      const savedIndicator = await this.saveIndicator();
      return {
        indicator,
        dataElements,
        dataElementGroup,
        savedIndicator,
      };
    } catch (error) {
      throw new Error(`Error while editing dictionary: ${error}`);
    }
  };
}

export default EditDictionary;
