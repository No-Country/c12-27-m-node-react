const jwt = require('jsonwebtoken');
const { UserModel } = require('../models/user.model');
const UserService = require('../services/user.service');

const service = new UserService();

const validateJWT = async (req, res, next) => {
  // Get token
  const token = req.header('x-token');

  if (!token) return res.status(401).json({ message: 'Invalid token' });

  try {
    const { uid } = jwt.verify(token, process.env.SECRETORPRIVATEKEY);
    const userMatch = await service.findOne(uid);

    if (!userMatch) return res.status(401).json({ message: 'Invalid token' });

    req.user = userMatch;
    next();
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

module.exports = { validateJWT };
