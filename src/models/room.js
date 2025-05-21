import { model, Schema } from "mongoose";

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
        ref: "User",
      },
    ],
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export default model("Room", roomSchema);
