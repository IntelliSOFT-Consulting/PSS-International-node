import SystemComponent from '../models/systemComponents';

export const getSystemComponents = async query => {
  try {
    const { paginate, page, limit, name, code } = query;
    const pageNumber = parseInt(page) || 1;
    const limitNumber = parseInt(limit) || 50;
    const skip = (pageNumber - 1) * limitNumber;
    const filter = {};
    if (name) {
      filter.name = { $regex: name, $options: 'i' };
    }
    if (code) {
      filter.code = { $regex: code, $options: 'i' };
    }

    if (paginate === 'false') {
      const systemComponents = await SystemComponent.find(filter).sort({
        name: 1,
      });
      return systemComponents;
    } else {
      const systemComponents = await SystemComponent.find(filter)
        .skip(skip)
        .limit(limitNumber)
        .sort({
          name: 1,
        });
      return systemComponents;
    }
  } catch (error) {
    throw new Error(`Error getting system components: ${error.message}`);
  }
};

export const createSystemComponent = async data => {
  try {
    const systemComponent = new SystemComponent(data);
    await systemComponent.save();
    return systemComponent;
  } catch (error) {
    throw new Error(`Error creating system component: ${error.message}`);
  }
};

export const updateSystemComponent = async (id, data) => {
  try {
    const systemComponent = await SystemComponent.findByIdAndUpdate(id, data, {
      new: true,
    });
    return systemComponent;
  } catch (error) {
    throw new Error(`Error updating system component: ${error.message}`);
  }
};

export const deleteSystemComponent = async id => {
  try {
    const systemComponent = await SystemComponent.findByIdAndDelete(id);
    return systemComponent;
  } catch (error) {
    throw new Error(`Error deleting system component: ${error.message}`);
  }
};
