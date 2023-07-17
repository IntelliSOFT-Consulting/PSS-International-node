import Api from '../config/api';
import { sortAlphabetically } from './methods';
import { getUserProfile } from './user';

export const getInternationalBenchmarkValues = async () => {
  try {
    const user = await getUserProfile();
    const lastYear = new Date().getFullYear() - 1;
    const { data } = await Api.get(
      `dataSets?filter=name:like:Benchmark&fields=id,name&paging=false`
    );

    const { data: dataElements } = await Api.get(
      `dataElements?filter=code:like:Benchmark&fields=id,name,code&paging=false`
    );

    const { data: dataValues } = await Api.get(
      `dataValueSets?orgUnit=${user.organisationUnits[0].id}&dataSet=${data?.dataSets[0]?.id}&period=${lastYear}&paging=false`
    );

    return dataValues.dataValues?.map(dataValue => {
      const dataElement = dataElements.dataElements.find(
        dataElement => dataElement.id === dataValue.dataElement
      );
      return {
        id: dataValue.id,
        value: dataValue.value,
        dataElementName: dataElement.name?.replace(
          /Benchmark_|_Benchmark| /g,
          ''
        ),
        dataElementCode: dataElement.code?.replace(
          /Benchmark_|_Benchmark| /g,
          ''
        ),
      };
    });
  } catch (error) {
    throw new Error(
      `Error getting international benchmark values: ${error.message}`
    );
  }
};

export const getAllDataElements = async () => {
  try {
    const { data } = await Api.get(
      `dataElements?fields=id,name,code&paging=false`
    );
    return data.dataElements;
  } catch (error) {
    throw new Error(`Error getting all data elements: ${error.message}`);
  }
};

export const getBenchmarkDataElements = async () => {
  try {
    const { data } = await Api.get(
      `dataElements?filter=code:like:Benchmark&fields=id,name,code&paging=false`
    );
    return data.dataElements;
  } catch (error) {
    throw new Error(`Error getting benchmark data elements: ${error.message}`);
  }
};

export const getIndicatorElements = async indicatorCode => {
  try {
    const { data } = await Api.get(
      `dataElements?filter=code:like:${indicatorCode}&fields=id,name,code,valueType&paging=false`
    );

    const dataElements = data.dataElements.filter(dataElement => {
      const dataElementName = dataElement.name.toLowerCase();
      return (
        !dataElementName?.includes('upload') &&
        !dataElementName?.includes('comment') &&
        !dataElementName?.includes('benchmark')
      );
    });
    return dataElements;
  } catch (error) {
    throw new Error(`Error getting indicator elements: ${error.message}`);
  }
};

export const matchIndicatorDataElements = (
  indicator,
  dataElements,
  clean = true
) => {
  dataElements = sortAlphabetically(dataElements, 'code');

  const indicatorDataElements = dataElements.filter(dataElement => {
    if (!clean) return dataElement.code?.includes(indicator.code);
    const dataElementName = dataElement.name.toLowerCase();
    return (
      dataElement.code?.includes(indicator.code) &&
      !dataElementName?.includes('upload') &&
      !dataElementName?.includes('comment') &&
      !dataElementName?.includes('benchmark')
    );
  });
  return {
    id: indicator.id,
    name: indicator.name,
    code: indicator.code,
    dataElements: indicatorDataElements,
  };
};
