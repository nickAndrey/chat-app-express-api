import jwt from 'jsonwebtoken';

function authenticateToken(req, res, next) {
  const { authorization } = req.headers;
  const token = authorization && authorization.split(' ')[1];

  if (!token) {
    return res
      .status(401)
      .json({ msg: 'No token provided, check authorization headers and try again' });
  }

  jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
    if (err) return res.status(401).json({ msg: 'Token is expired' });

    req.user = user;

    next();
  });
}

export default authenticateToken;
