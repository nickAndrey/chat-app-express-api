import bcrypt from 'bcrypt';
import model from '../../models/index.js';
import { refreshTokenOptions } from '../../settings/refresh-token-options.js';
import asyncHandler from '../../utils/async-handler.js';
import { createError } from '../../utils/error-helpers.js';
import { generateAccessToken, generateRefreshToken } from '../../utils/generate-tokens.js';

const authLogin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email) throw createError('Required field email is missing');
  if (!password) throw createError('Required field password is missing');

  const user = await model.USER.findOne({ email });
  if (!user) throw createError('User with this email does not exist');

  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) throw createError('Password is invalid');

  const userDTO = {
    id: user._id,
    username: user.username,
    email: user.email,
  };

  const accessToken = generateAccessToken(userDTO);
  const refreshToken = generateRefreshToken(userDTO);

  res.cookie('refreshToken', refreshToken, refreshTokenOptions);

  res.status(200).json({
    msg: 'success',
    data: { user: userDTO, accessToken },
  });
});

export default authLogin;
