import { Schema, model } from 'mongoose';

const subscriberSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    phone: String,
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default model('Subscriber', subscriberSchema);
