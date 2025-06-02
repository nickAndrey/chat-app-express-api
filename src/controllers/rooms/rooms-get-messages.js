import model from '../../models/index.js';
import asyncHandler from '../../utils/async-handler.js';
import { createError } from '../../utils/error-helpers.js';

const roomsGetMessages = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { userId } = req.query;

  if (!userId) throw createError('Field missed: userId');

  const messages = await model.MESSAGE.find({
    roomId: id,
    hiddenFor: { $ne: userId },
  });

  return res.status(200).json({ msg: 'success', data: messages });
});

export default roomsGetMessages;
