import Subscriber from '../models/subscribers';
import { sendEmail } from './mail';
export const createSubscriber = async data => {
  try {
    const subscriber = await Subscriber.findOne({ email: data.email });
    if (subscriber) {
      subscriber.firstName = data.firstName || subscriber.firstName;
      subscriber.lastName = data.lastName || subscriber.lastName;
      subscriber.phone = data.phone || subscriber.phone;
      subscriber.isActive = true;
      await subscriber.save();
      return subscriber;
    }
    const newSubscriber = new Subscriber(data);
    await newSubscriber.save();
    return newSubscriber;
  } catch (error) {
    throw new Error(`Error creating subscriber: ${error.message}`);
  }
};

export const getSubscribers = async query => {
  try {
    const { paginate, page, limit, isActive } = query;
    const pageNumber = parseInt(page) || 1;
    const limitNumber = parseInt(limit) || 50;
    const skip = (pageNumber - 1) * limitNumber;
    const filter = {};
    if (isActive) {
      filter.isActive = isActive;
    }
    if (paginate === 'false') {
      const subscribers = await Subscriber.find(filter);
      return subscribers;
    } else {
      const subscribers = await Subscriber.find(filter)
        .skip(skip)
        .limit(limitNumber);
      return subscribers;
    }
  } catch (error) {
    throw new Error(`Error getting subscribers: ${error.message}`);
  }
};

export const getSubscriber = async email => {
  try {
    const subscriber = await Subscriber.findOne({ email });
    return subscriber;
  } catch (error) {
    throw new Error(`Error getting subscriber: ${error.message}`);
  }
};

export const deleteSubscriber = async email => {
  try {
    const subscriber = await Subscriber.findOne({ email });
    if (subscriber) {
      subscriber.isActive = false;
      await subscriber.save();
      return subscriber;
    }
    throw new Error(`Subscriber ${email} not found`);
  } catch (error) {
    throw new Error(`Error deleting subscriber: ${error.message}`);
  }
};

export const sendMail = async (
  recipients,
  subject,
  message,
  sendAll = false
) => {
  try {
    const allSubscribers = await Subscriber.find({ isActive: true });
    const mailList = sendAll
      ? allSubscribers?.map(subscriber => subscriber.email)
      : recipients;
    if (mailList.length > 0) {
      await sendEmail(mailList, subject, `<p>${message}</p>`);
    }
    return `Email sent to ${mailList.length} subscribers`;
  } catch (error) {
    throw new Error(`Error sending email: ${error.message}`);
  }
};
