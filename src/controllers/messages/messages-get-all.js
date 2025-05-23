import model from '../../models/index.js';
import asyncHandler from '../../utils/async-handler.js';

const messagesGetAll = asyncHandler(async (_, res) => {
  const messages = await model.MESSAGE.find();
  res.status(200).json({ msg: 'success', data: messages });
});

export default messagesGetAll;
