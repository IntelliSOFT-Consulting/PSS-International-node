import express from 'express';
import * as versionsController from '../controller/versionsController';

const router = express.Router();

router.get('/', versionsController.getVersions);
router.get('/:id', versionsController.getVersion);
router.post('/', versionsController.createVersion);
router.put('/:id', versionsController.updateVersion);
router.delete('/:id', versionsController.deleteVersion);

export default router;
