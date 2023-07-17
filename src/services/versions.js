import Version from '../models/versions';
import Subscriber from '../models/subscribers';
import { sendEmail } from './mail';

export const createVersion = async data => {
  try {
    const { description, indicators, status, createdBy, publishedBy } = data;
    const currentVersion = await Version.findOne({}).sort({
      number: -1,
    });
    const newVersionNumber = currentVersion ? currentVersion.number + 1 : 1;
    await Version.updateMany({ isActive: true }, { isActive: false });
    const newVersion = await Version.create({
      description,
      number: newVersionNumber,
      status: status || 'draft',
      isActive: status === 'published',
      indicators,
      createdBy,
      publishedBy,
    });

    if (status === 'published') {
      const subcribers = await Subscriber.find({ isActive: true });

      const mailHeader = `International Template Version ${newVersionNumber} Published`;
      const mailBody = `<p>We are delighted to announce that our latest version of the International Template, Version ${newVersionNumber}, has been successfully published and is now available for use.</p>
      <p><strong>Version:</strong> ${newVersionNumber}</p>
      <p><strong>Description:</strong> ${description}</p>
      <p><strong>Indicators:</strong> ${indicators.length}</p>
      `;

      const subscriberEmails = subcribers.map(subscriber => subscriber.email);
      if (subscriberEmails.length > 0) {
        await sendEmail(subscriberEmails, mailHeader, mailBody);
      }
    }
    return `Version ${newVersionNumber} created`;
  } catch (error) {
    throw new Error(`Error creating version: ${error.message}`);
  }
};

export const getVersions = async query => {
  const { paginate, page, limit, description, status } = query;
  const pageNumber = parseInt(page) || 1;
  const limitNumber = parseInt(limit) || 50;
  const skip = (pageNumber - 1) * limitNumber;
  const filter = {};
  if (description) {
    filter.description = description;
  }
  if (status) {
    filter.status = status;
  }
  try {
    if (paginate === 'false') {
      const versions = await Version.find(filter, '-indicators').sort({
        createdAt: -1,
      });

      return versions;
    } else {
      const versions = await Version.find(filter, '-indicators')
        .skip(skip)
        .limit(limitNumber)
        .sort({
          createdAt: -1,
        });
      return versions;
    }
  } catch (error) {
    throw new Error(`Error getting versions: ${error.message}`);
  }
};

export const getVersion = async id => {
  try {
    const version = await Version.findOne({ number: id });
    if (!version) {
      throw new Error(`Version ${id} not found`);
    }

    return version;
  } catch (error) {
    throw new Error(`Error getting version: ${error.message}`);
  }
};

export const updateVersion = async data => {
  try {
    const { description, indicators, status, number, publishedBy, createdBy } =
      data;
    const version = await Version.findOne({ number });

    if (!version) {
      throw new Error(`Version ${number} not found`);
    }

    if (version.status === 'published') {
      throw new Error(`Cannot update published version`);
    }

    version.description = description || version.description;
    version.status = status || version.status;
    version.indicators = indicators || version.indicators;
    version.isActive = status === 'published';
    version.publishedBy = publishedBy || version.publishedBy;
    version.createdBy = createdBy || version.createdBy;

    if (status === 'published') {
      await Version.updateMany({ isActive: true }, { isActive: false });
      const subcribers = await Subscriber.find({ isActive: true });

      const mailHeader = `International Template Version ${number} Published`;
      const mailBody = `<p>We are delighted to announce that our latest version of the International Template, Version ${number}, has been successfully published and is now available for use.</p>
      <p><strong>Version:</strong> ${number}</p>
      <p><strong>Description:</strong> ${description}</p>
      <p><strong>Indicators:</strong> ${indicators.length}</p>
      `;

      const subscriberEmails = subcribers.map(subscriber => subscriber.email);
      if (subscriberEmails.length > 0) {
        await sendEmail(subscriberEmails, mailHeader, mailBody);
      }
    }

    await version.save();
    return `Version ${version.number} updated`;
  } catch (error) {
    throw new Error(`Error updating version: ${error.message}`);
  }
};

export const deleteVersion = async id => {
  try {
    const version = await Version.findOne({ number: id });
    if (!version) {
      throw new Error(`Version ${req.params.id} not found`);
    }
    if (version.status === 'published') {
      throw new Error(`Cannot delete published version`);
    }
    await version.deleteOne({ number: id });
    return `Version ${version.number} deleted`;
  } catch (error) {
    throw new Error(`Error deleting version: ${error.message}`);
  }
};
