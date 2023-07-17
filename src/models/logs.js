import { Schema, model } from 'mongoose';

const logSchema = new Schema(
  {
    activity: { type: String, required: true },
    country: { type: String, required: true },
    version: String,
    description: String,
  },
  { timestamps: true }
);

export default model('Log', logSchema);
