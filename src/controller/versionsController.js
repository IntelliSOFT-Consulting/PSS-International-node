import { parseError } from '../config/error';
import * as versionsService from '../services/versions';

export const getVersions = async (req, res) => {
  try {
    const versions = await versionsService.getVersions(req.query);
    res.send(versions);
  } catch (err) {
    res.status(err?.code || 500).send(err.message);
  }
};

export const getVersion = async (req, res) => {
  try {
    const version = await versionsService.getVersion(req.params.id);
    res.send(version);
  } catch (err) {
    res.status(err?.code || 500).send(err.message);
  }
};

export const createVersion = async (req, res) => {
  try {
    const version = await versionsService.createVersion(req.body);
    res.send(version);
  } catch (err) {
    res.status(err?.code || 500).send(err.message);
  }
};

export const updateVersion = async (req, res) => {
  try {
    const version = await versionsService.updateVersion(req.body);
    res.send(version);
  } catch (err) {
    res.status(err?.code || 500).send(err.message);
  }
};

export const deleteVersion = async (req, res) => {
  try {
    const version = await versionsService.deleteVersion(req.params.id);
    res.send(version);
  } catch (err) {
    res.status(err?.code || 500).send(err.message);
  }
};

export const getInternationalPublishedVersions = async (req, res) => {
  try {
    const versions =
      await versionsService.getPublishedInternationalIndicators();
    res.send(versions);
  } catch (err) {
    res.status(err?.code || 500).send(err.message);
  }
};
