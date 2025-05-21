import model from "../../models/index.js";
import asyncHandler from "../../utils/async-handler.js";

const roomsUpdate = asyncHandler(async (req, res) => {
  const { name } = req.body;
  const updatedRoom = await model.ROOM.findByIdAndUpdate(req.params.id, {
    name,
  });

  if (!updatedRoom) throw createError("Room was not found");
  res.status(200).json({ message: "success", data: updatedRoom });
});

export default roomsUpdate;
