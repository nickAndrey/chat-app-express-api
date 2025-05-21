import model from "../../models/index.js";
import asyncHandler from "../../utils/async-handler.js";

const roomsCreate = asyncHandler(async (req, res) => {
  const { name, isGroup, members, createdBy } = req.data;
  const room = model.ROOM.create({
    name,
    isGroup,
    members,
    createdBy,
  });
  res.status(200).json({ msg: "success", data: room });
});

export default roomsCreate;
