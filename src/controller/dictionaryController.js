import * as dictionaryService from '../services/dictionary';

export const getDictionary = async (req, res) => {
  try {
    const dictionary = await dictionaryService.getIndicators(req.query);
    res.send(dictionary);
  } catch (err) {
    res.status(err?.code || 500).send(err.message);
  }
};

export const createDictionary = async (req, res) => {
  try {
    const dictionary = await dictionaryService.createDictionary(req.body);
    res.send(dictionary);
  } catch (err) {
    res.status(err?.code || 500).send(err.message);
  }
};

export const getDictionaryDetails = async (req, res) => {
  try {
    const dictionary = await dictionaryService.getDictionary(req.params);
    res.send(dictionary);
  } catch (err) {
    res.status(err?.code || 500).send(err.message);
  }
};

export const editDictionary = async (req, res) => {
  try {
    const dictionary = await dictionaryService.editDictionary(req.body);
    res.send(dictionary);
  } catch (err) {
    res.status(err?.code || 500).send(err.message);
  }
};
