import * as systemComponentService from '../services/systemComponents';

export const getSystemComponents = async (req, res) => {
  try {
    const components = await systemComponentService.getSystemComponents(
      req.query
    );
    res.send(components);
  } catch (err) {
    res.status(err?.code || 500).send(err.message);
  }
};

export const createSystemComponent = async (req, res) => {
  try {
    const component = await systemComponentService.createSystemComponent(
      req.body
    );
    res.send(component);
  } catch (err) {
    res.status(err?.code || 500).send(err.message);
  }
};

export const updateSystemComponent = async (req, res) => {
  try {
    const component = await systemComponentService.updateSystemComponent(
      req.params.id,
      req.body
    );
    res.send(component);
  } catch (err) {
    res.status(err?.code || 500).send(err.message);
  }
};

export const deleteSystemComponent = async (req, res) => {
  try {
    const component = await systemComponentService.deleteSystemComponent(
      req.params.id
    );
    res.send(component);
  } catch (err) {
    res.status(err?.code || 500).send(err.message);
  }
};
