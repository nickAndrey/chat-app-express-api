import model from "../../models/index.js";
import asyncHandler from "../../utils/async-handler.js";

const roomsGetById = asyncHandler(async (req, res) => {
  const room = await model.ROOM.findById(req.params.id);
  if (!room) throw createError("Room was not found");
  return res.status(200).json({ message: "success", data: room });
});

export default roomsGetById;
