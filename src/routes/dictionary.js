import * as dictionaryController from '../controller/dictionaryController';
import express from 'express';

const router = express.Router();

router.get('/', dictionaryController.getDictionary);
router.post('/', dictionaryController.createDictionary);
router.get('/:name', dictionaryController.getDictionaryDetails);
router.put('/:name', dictionaryController.editDictionary);

export default router;
