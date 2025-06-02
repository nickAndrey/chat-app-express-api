import model from '../../models/index.js';
import asyncHandler from '../../utils/async-handler.js';
import { createError } from '../../utils/error-helpers.js';

const roomsDelete = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { memberId } = req.body;

  if (!memberId) throw createError('Field missed: memberId');

  await model.ROOM.findByIdAndUpdate(id, {
    $addToSet: { deletedFor: memberId },
  });

  res.status(200).json({ msg: 'Room hidden for user', data: null });
});

export default roomsDelete;
