const jwt = require('jsonwebtoken');
const { SECRETORPRIVATEKEY } = process.env;

const createToken = async (user) => {
  const sign = await jwt.sign(
    {
      id: user._id,
      role: user.role,
    },
    SECRETORPRIVATEKEY,
    {
      expiresIn: '4h',
    }
  );
  return sign;
};

const verifyToken = async (tokenJwt) => {
  try {
    return await jwt.verify(tokenJwt, SECRETORPRIVATEKEY);
  } catch (error) {
    return null;
  }
};

module.exports = { createToken, verifyToken };
