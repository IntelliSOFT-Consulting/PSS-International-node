import * as categoriesService from '../services/Indicators';

export const getCategories = async (req, res) => {
  try {
    const categories = await categoriesService.getCategories(req.query);
    res.send(categories);
  } catch (err) {
    res.status(err?.code || 500).send(err.message);
  }
};

export const getCategory = async (req, res) => {
  try {
    const category = await categoriesService.getCategory(req.params.id);
    res.send(category);
  } catch (err) {
    res.status(err?.code || 500).send(err.message);
  }
};

export const createCategory = async (req, res) => {
  try {
    const category = await categoriesService.createCategory(req.body);
    res.send(category);
  } catch (err) {
    res.status(err?.code || 500).send(err.message);
  }
};

export const updateCategory = async (req, res) => {
  try {
    const category = await categoriesService.updateCategory(
      req.params.id,
      req.body
    );
    res.send(category);
  } catch (err) {
    res.status(err?.code || 500).send(err.message);
  }
};

export const deleteCategory = async (req, res) => {
  try {
    const category = await categoriesService.deleteCategory(req.params.id);
    res.send(category);
  } catch (err) {
    res.status(err?.code || 500).send(err.message);
  }
};

export const updateBenchmark = async (req, res) => {
  try {
    const benchmark = await categoriesService.updateBenchmark(req.body);
    res.send(benchmark);
  } catch (err) {
    res.status(err?.code || 500).send(err.message);
  }
};
