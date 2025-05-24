import bcrypt from 'bcrypt';
import model from '../../models/index.js';
import { refreshTokenOptions } from '../../settings/refresh-token-options.js';
import asyncHandler from '../../utils/async-handler.js';
import { generateAccessToken, generateRefreshToken } from '../../utils/generate-tokens.js';

const authSignUp = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await model.USER.create({
    username,
    email,
    password: hashedPassword,
  });

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

export default authSignUp;
