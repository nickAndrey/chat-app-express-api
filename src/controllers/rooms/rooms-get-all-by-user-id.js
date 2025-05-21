import model from "../../models/index.js";
import asyncHandler from "../../utils/async-handler.js";
import { createError } from "../../utils/error-helpers.js";

const roomsGetAllByUserId = asyncHandler(async (req, res) => {
  const rooms = await model.ROOM.find({ members: req.params.userId });
  if (rooms.length === 0) throw createError("No rooms found");
  res.status(200).json({ msg: "success", data: rooms });
});

export default roomsGetAllByUserId;
