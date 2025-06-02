import model from '../../models/index.js';
import { getIO } from '../../settings/socket.js';
import asyncHandler from '../../utils/async-handler.js';
import { createError } from '../../utils/error-helpers.js';

const roomsCreateMessage = asyncHandler(async (req, res) => {
  const { roomId, senderId, content } = req.body;

  if (!roomId) throw createError('Field missed: roomId');
  if (!senderId) throw createError('Field missed: senderId');
  if (!content) throw createError('Field missed: content');

  const newMessage = await model.MESSAGE.create({
    roomId,
    senderId,
    content,
  });

  const io = getIO();

  io.to(roomId).emit('newMessage', newMessage);

  res.status(200).json({ msg: 'success', data: newMessage });
});

export default roomsCreateMessage;
