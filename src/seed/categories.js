import Category from '../models/indicators';
import SystemComponent from '../models/systemComponents';
import data from './data/categories.js';

export default async function seedCategories() {
  try {
    const components = await SystemComponent.find({});
    const count = await Category.estimatedDocumentCount();

    if (count > 0) {
      return;
    }

    // console.log(data);
    const categories = data.map(category => {
      const component = components.find(item => {
        return item.name === category.name;
      });

      return {
        ...category,
        systemComponent: component._id,
      };
    });

    await Category.create(categories);
  } catch (error) {
    console.error(error);
  }
}
