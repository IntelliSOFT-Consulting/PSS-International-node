import Category from '../models/indicators';
import Api from '../config/api';
import {
  getAllDataElements,
  getBenchmarkDataElements,
  getInternationalBenchmarkValues,
  matchIndicatorDataElements,
} from '../utils/dataElements';
import { sortAlphabetically } from '../utils/methods';

export const createCategory = async data => {
  try {
    const category = new Category(data);
    await category.save();
    return category;
  } catch (error) {
    throw new Error(`Error creating category: ${error.message}`);
  }
};

export const getCategories = async query => {
  try {
    const { paginate, page, limit, isActive } = query;
    const pageNumber = parseInt(page) || 1;
    const limitNumber = parseInt(limit) || 50;
    const skip = (pageNumber - 1) * limitNumber;
    const filter = {};
    if (isActive) {
      filter.isActive = isActive;
    }

    const dataElements = await getAllDataElements();

    const benchmarks = await getInternationalBenchmarkValues();

    if (paginate === 'false') {
      const categories = await Category.find(filter)
        .populate('systemComponent', 'name _id')
        .sort({
          name: 1,
        });
      return categories;
    } else {
      const categories = await Category.find(filter)
        .populate('systemComponent', 'name _id')
        .skip(skip)
        .limit(limitNumber)
        .sort({
          name: 1,
        });
      return categories.map(category => {
        return {
          id: category._id,
          systemComponent: category.systemComponent,
          description: category.description,
          isActive: category.isActive,
          indicators: category.indicators.map(indicator => {
            const de = matchIndicatorDataElements(indicator, dataElements);

            const benchmark = benchmarks.find(
              benchMark => benchMark.dataElementName === de?.code
            );
            return {
              ...de,
              internationalBenchmark: benchmark?.value || 0,
            };
          }),
        };
      });
    }
  } catch (error) {
    throw new Error(`Error getting categories: ${error.message}`);
  }
};

export const getCategory = async id => {
  try {
    const category = await Category.findById(id, '-__v,-isActive').populate(
      'systemComponent',
      'name, _id'
    );

    const indicators = sortAlphabetically(category.indicators, 'name');

    const dataElements = await getAllDataElements();

    const benchmarks = await getInternationalBenchmarkValues();

    const fullCategory = indicators.map(indicator => {
      const de = matchIndicatorDataElements(indicator, dataElements);
      const benchmark = benchmarks.find(
        benchmark => benchmark.code === indicator.name
      );

      return {
        ...de,
        internationalBenchmark: benchmark?.value || 0,
      };
    });

    return {
      id: category._id,
      name: category.name,
      description: category.description,
      isActive: category.isActive,
      indicators: fullCategory,
    };
  } catch (error) {
    throw new Error(`Error getting category: ${error.message}`);
  }
};

export const deleteCategory = async id => {
  try {
    const category = await Category.findById(id);
    if (category) {
      category.isActive = false;
      await category.save();
      return category;
    }
    throw new Error(`Category not found`);
  } catch (error) {
    throw new Error(`Error deleting category: ${error.message}`);
  }
};

export const updateCategory = async (id, data) => {
  try {
    const category = await Category.findById(id);
    if (category) {
      category.name = data.name || category.name;
      category.description = data.description || category.description;
      category.isActive = data.isActive || category.isActive;
      await category.save();
      return category;
    }
    throw new Error(`Category not found`);
  } catch (error) {
    throw new Error(`Error updating category: ${error.message}`);
  }
};

export const updateBenchmark = async data => {
  try {
    const benchMarkElements = await getBenchmarkDataElements();

    const { ou, pe, de, value } = data;

    const getBenchmarkId = benchMarkElements.find(
      benchMark =>
        benchMark.name?.replace(/Benchmark_|_Benchmark| /g, '') === de
    );

    const { data: response } = await Api.post(
      `dataValues?ou=${ou}&pe=${pe}&de=${getBenchmarkId.id}&value=${value}`
    );

    return response;
  } catch (error) {
    throw new Error(`Error updating benchmark: ${error.message}`);
  }
};
