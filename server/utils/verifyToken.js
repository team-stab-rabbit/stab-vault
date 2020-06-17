const jwt = require('jsonwebtoken');

const secret = 'secret';

const verifyToken = (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return res.status(401).send('Unauthorized: No token provided');
  }

  return jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      return res.status(401).send('Unauthorized: Invalid token');
    }

    req.email = decoded.email;
    return next();
  });
};

module.exports = verifyToken;
