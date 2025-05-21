import model from "../../models/index.js";
import asyncHandler from "../../utils/async-handler.js";

const roomsDelete = asyncHandler(async (req, res) => {
  await model.ROOM.findByIdAndDelete(req.params.id);
  res.status(200).json({ msg: "success", data: null });
});

export default roomsDelete;
