import jwt from 'jsonwebtoken';
import { refreshTokenOptions } from '../../settings/refresh-token-options.js';
import asyncHandler from '../../utils/async-handler.js';
import { generateAccessToken, generateRefreshToken } from '../../utils/generate-tokens.js';

const authRefreshToken = asyncHandler(async (req, res) => {
  const { refreshToken } = req.cookies;

  if (!refreshToken) {
    return res.status(401).json({ msg: 'No refresh token provided' });
  }

  jwt.verify(refreshToken, process.env.TOKEN_SECRET, (err, user) => {
    if (err) return res.status(401).json({ msg: 'Refresh token is invalid or expired' });

    const { id, username, email } = user;
    const userDTO = { id, username, email };

    const accessToken = generateAccessToken(userDTO);
    const refreshToken = generateRefreshToken(userDTO);

    res.cookie('refreshToken', refreshToken, refreshTokenOptions);

    res.status(200).json({
      msg: 'success',
      data: { user: userDTO, accessToken },
    });
  });
});

export default authRefreshToken;
