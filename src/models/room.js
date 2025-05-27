import { model, Schema } from 'mongoose';

const roomSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    isGroup: {
      type: Boolean,
      default: false,
    },
    members: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        min: [2, 'There have to be at least 2 members'],
      },
    ],
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  { timestamps: true }
);

export default model('Room', roomSchema);
