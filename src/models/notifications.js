import { model, Schema } from 'mongoose';

const notificationSchema = new Schema({
  title: String,
  body: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'Subscriber',
  },
});

export default model('Notification', notificationSchema);
