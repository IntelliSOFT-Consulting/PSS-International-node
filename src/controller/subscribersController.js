import * as subscribersService from '../services/subscribers';

export const getSubscribers = async (req, res) => {
  try {
    const subcribers = await subscribersService.getSubscribers(req.query);
    res.send(subcribers);
  } catch (err) {
    res.status(err?.code || 500).send(err.message);
  }
};

export const getSubscriber = async (req, res) => {
  try {
    const subscriber = await subscribersService.getSubscriber(req.params.id);
    res.send(subscriber);
  } catch (err) {
    res.status(err?.code || 500).send(err.message);
  }
};

export const createSubscriber = async (req, res) => {
  try {
    const subscriber = await subscribersService.createSubscriber(req.body);
    res.send(subscriber);
  } catch (err) {
    res.status(err?.code || 500).send(err.message);
  }
};

export const updateSubscriber = async (req, res) => {
  try {
    const subscriber = await subscribersService.updateSubscriber(
      req.params.id,
      req.body
    );
    res.send(subscriber);
  } catch (err) {
    res.status(err?.code || 500).send(err.message);
  }
};

export const deleteSubscriber = async (req, res) => {
  try {
    const subscriber = await subscribersService.deleteSubscriber(req.params.id);
    res.send(subscriber);
  } catch (err) {
    res.status(err?.code || 500).send(err.message);
  }
};

export const sendMail = async (req, res) => {
  try {
    const { emailList, message, sendAll, sender, title } = req.body;

    const subscriber = await subscribersService.sendMail(
      emailList,
      title,
      message,
      sendAll
    );
    res.send(subscriber);
  } catch (err) {
    res.status(err?.code || 500).send(err.message);
  }
};
