import express from 'express';
import * as systemComponentsController from '../controller/systemComponentsController';

const router = express.Router();

router.get('/', systemComponentsController.getSystemComponents);
router.post('/', systemComponentsController.createSystemComponent);
router.put('/:id', systemComponentsController.updateSystemComponent);
router.delete('/:id', systemComponentsController.deleteSystemComponent);

export default router;
