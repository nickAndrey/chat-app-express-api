import model from '../../models/index.js';
import asyncHandler from '../../utils/async-handler.js';
import { createError } from '../../utils/error-helpers.js';

const roomsAddMember = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { userId } = req.body;

  if (!userId) throw createError('Field missed: userId');

  const updatedRoom = await model.ROOM.findByIdAndUpdate(
    id,
    { $addToSet: { members: userId } },
    { new: true }
  );

  if (!updatedRoom) throw createError('Room was not found');

  res.status(200).json({ msg: 'success', data: updatedRoom });
});

export default roomsAddMember;
