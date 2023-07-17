import express from 'express';
import * as subscribersController from '../controller/subscribersController';

const router = express.Router();

router.get('/', subscribersController.getSubscribers);
router.get('/:id', subscribersController.getSubscriber);
router.post('/', subscribersController.createSubscriber);
router.put('/:id', subscribersController.updateSubscriber);
router.delete('/:id', subscribersController.deleteSubscriber);
router.post('/send', subscribersController.sendMail);

export default router;
