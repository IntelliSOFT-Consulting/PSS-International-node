import { Schema, model } from 'mongoose';

const versionSchema = new Schema(
  {
    description: { type: String, required: true },
    number: { type: Number, required: true, unique: true },
    isActive: { type: Boolean, default: false },
    status: { type: String, default: 'draft', enum: ['draft', 'published'] },
    indicators: [String],
    createdBy: String,
    publishedBy: String,
  },
  { timestamps: true }
);

export default model('Version', versionSchema);
