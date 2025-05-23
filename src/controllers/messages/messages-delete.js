import model from '../../models/index.js';
import asyncHandler from '../../utils/async-handler.js';

const messagesDelete = asyncHandler(async (req, res) => {
  await model.MESSAGE.findByIdAndDelete(req.params.id);
  res.status(200).json({ msg: 'success', data: null });
});

export default messagesDelete;
