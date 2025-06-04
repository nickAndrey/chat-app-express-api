import model from '../../models/index.js';
import asyncHandler from '../../utils/async-handler.js';
import { createError } from '../../utils/error-helpers.js';

const roomsDeleteMessage = asyncHandler(async (req, res) => {
  const { id: roomId, messageId } = req.params;
  const { memberId } = req.body;

  if (!memberId) throw createError('Field missed: memberId');

  await model.MESSAGE.findOneAndUpdate(
    { roomId, id: messageId },
    { $addToSet: { hiddenFor: memberId } },
    { new: true }
  );

  res.status(200).json({ msg: 'Message hidden for user', data: null });
});

export default roomsDeleteMessage;
