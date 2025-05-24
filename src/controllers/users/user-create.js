import bcrypt from 'bcrypt';
import model from '../../models/index.js';
import asyncHandler from '../../utils/async-handler.js';
import { createError } from '../../utils/error-helpers.js';

const userCreate = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await model.USER.create({
    username,
    email,
    password: hashedPassword,
  });

  if (!user) throw createError('User not found');
  res.status(200).json({
    msg: 'success',
    data: {
      id: user._id,
      username: user.username,
      email: user.email,
    },
  });
});

export default userCreate;
