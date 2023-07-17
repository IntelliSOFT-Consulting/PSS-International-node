import * as logsService from '../services/logs';

export const getLogs = async (req, res) => {
  try {
    const logs = await logsService.getLogs(req.query);
    res.send(logs);
  } catch (err) {
     res.status(err?.code || 500).send(err.message);
  }
};

export const getLog = async (req, res) => {
  try {
    const log = await logsService.getLog(req.params.id);
    res.send(log);
  } catch (err) {
     res.status(err?.code || 500).send(err.message);
  }
};

export const createLog = async (req, res) => {
  try {
    const log = await logsService.createLog(req.body);
    res.send(log);
  } catch (err) {
     res.status(err?.code || 500).send(err.message);
  }
};

