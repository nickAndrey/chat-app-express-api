import model from '../../models/index.js';
import asyncHandler from '../../utils/async-handler.js';
import { createError } from '../../utils/error-helpers.js';

const roomsRemoveMember = asyncHandler(async (req, res) => {
  const { id, uid } = req.params;

  const updatedRoom = await model.ROOM.findByIdAndUpdate(
    id,
    { $pull: { members: uid } },
    { new: true }
  );

  if (!updatedRoom) {
    throw createError('Room not found');
  }

  res.status(200).json({ msg: 'success', data: updatedRoom });
});

export default roomsRemoveMember;
