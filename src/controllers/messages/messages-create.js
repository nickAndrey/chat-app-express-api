import model from '../../models/index.js';
import { getIO } from '../../settings/socket.js';
import asyncHandler from '../../utils/async-handler.js';
import { createError } from '../../utils/error-helpers.js';

const messagesCreate = asyncHandler(async (req, res) => {
  const { roomId, senderId, content } = req.body;

  if (!roomId) throw createError('roomId is required field');

  if (!senderId) throw createError('senderId is required field');

  if (!content) throw createError('content is required field');

  const newMessage = await model.MESSAGE.create({
    roomId,
    senderId,
    content,
  });

  const io = getIO();
  io.to(roomId).emit('newMessage', newMessage);

  res.status(200).json({ msg: 'success', data: newMessage });
});

export default messagesCreate;
