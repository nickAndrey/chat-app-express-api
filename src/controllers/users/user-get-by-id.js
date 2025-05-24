import model from '../../models/index.js';
import asyncHandler from '../../utils/async-handler.js';
import { createError } from '../../utils/error-helpers.js';

const userGetById = asyncHandler(async (req, res) => {
  const user = await model.USER.findById(req.params.id);
  if (!user) throw createError('User was not found');
  return res.status(200).json({
    msg: 'success',
    data: {
      id: user._id,
      username: user.username,
      email: user.email,
    },
  });
});

export default userGetById;
