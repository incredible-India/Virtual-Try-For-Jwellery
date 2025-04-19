const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'Thisisthesecrettoken';

function generateToken(user) {
  return jwt.sign(
    { id: user.id, email: user.email },
    JWT_SECRET,
    { expiresIn: '1d' }
  );
}

function verifyToken(token) {
  return jwt.verify(token, JWT_SECRET);
}

module.exports = { generateToken, verifyToken };
