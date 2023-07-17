import express from 'express';
import * as logsController from '../controller/logsController';

const router = express.Router();

router.get('/', logsController.getLogs);
router.get('/:id', logsController.getLog);
router.post('/', logsController.createLog);

export default router;
