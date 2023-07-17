import { Schema, model } from 'mongoose';

const categorySchema = new Schema(
  {
    systemComponent: {
      type: Schema.Types.ObjectId,
      ref: 'SystemComponents',
      required: true,
    },
    description: String,
    isActive: { type: Boolean, default: true },
    indicators: [
      {
        name: { type: String, required: true },
        description: String,
        code: { type: String, required: true },
        dimension: String,
        createdBy: {
          displayName: String,
          id: String,
          name: String,
          username: String,
        },
        expectedFrequencyDataDissemination: String,
        indicatorReference: String,
      },
    ],
  },
  { timestamps: true }
);

export default model('Category', categorySchema);
