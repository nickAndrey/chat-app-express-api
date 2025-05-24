import jwt from 'jsonwebtoken';

function generateAccessToken(user) {
  return jwt.sign(user, process.env.TOKEN_SECRET, {
    expiresIn: '15Minutes',
  });
}

function generateRefreshToken(user) {
  return jwt.sign(user, process.env.TOKEN_SECRET, {
    expiresIn: '30Days',
  });
}

export { generateAccessToken, generateRefreshToken };
