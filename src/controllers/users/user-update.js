import bcrypt from 'bcrypt';
import model from '../../models/index.js';
import asyncHandler from '../../utils/async-handler.js';
import { createError } from '../../utils/error-helpers.js';

const userUpdate = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const updatedUser = await model.USER.findByIdAndUpdate(req.params.id, {
    username,
    email,
    password: hashedPassword,
  });

  if (!updatedUser) throw createError('User was not found');
  res.status(200).json({
    msg: 'success',
    data: {
      id: updatedUser._id,
      username: updatedUser.username,
      email: updatedUser.email,
    },
  });
});

export default userUpdate;
