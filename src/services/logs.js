import Log from '../models/logs';

export const createLog = async data => {
  try {
    const log = new Log(data);
    await log.save();
    return log;
  } catch (error) {
    throw new Error(`Error creating log: ${error.message}`);
  }
};

export const getLogs = async query => {
  try {
    const { paginate, page, limit, country, activity } = query;
    const pageNumber = parseInt(page) || 1;
    const limitNumber = parseInt(limit) || 50;
    const skip = (pageNumber - 1) * limitNumber;
    const filter = {};
    if (country) {
      filter.country = country;
    }
    if (activity) {
      filter.activity = activity;
    }
    if (paginate === 'false') {
      const logs = await Log.find(filter);
      return logs;
    } else {
      const logs = await Log.find(filter).skip(skip).limit(limitNumber);
      return logs;
    }
  } catch (error) {
    throw new Error(`Error getting logs: ${error.message}`);
  }
};

export const getLog = async id => {
  try {
    const log = await Log.findById(id);
    return log;
  } catch (error) {
    throw new Error(`Error getting log: ${error.message}`);
  }
};
