import * as categoriesController from '../controller/indicatorsController';
import express from 'express';

const router = express.Router();

router.get('/', categoriesController.getCategories);
router.get('/:id', categoriesController.getCategory);
router.post('/', categoriesController.createCategory);
router.put('/:id', categoriesController.updateCategory);
router.delete('/:id', categoriesController.deleteCategory);
router.put('/benchmark/update', categoriesController.updateBenchmark);

export default router;
