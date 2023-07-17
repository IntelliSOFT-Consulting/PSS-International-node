import { Schema, model } from 'mongoose';

const systemComponentsSchema = new Schema(
  {
    name: String,
    systemElements: [String],
  },
  {
    timestamps: true,
  }
);

export default model('SystemComponents', systemComponentsSchema);
