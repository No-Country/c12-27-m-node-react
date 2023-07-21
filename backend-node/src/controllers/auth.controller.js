const bcrypt = require('bcrypt');
const UserModel = require('../models/user.model');
const { createToken } = require('../helpers/createJWT');

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne({ email });
    console.log('user', user);

    if (!user)
      return res
        .status(404)
        .json({ message: 'There was an error logging in - user not found' });

    const isMatchPassword = bcrypt.compare(password, user.password);

    if (!isMatchPassword) {
      return res.status(404).json({
        message: 'There was an error logging in - password is incorrect',
      });
    }

    // Generate JWT
    const token = await createToken(user);
    res.json({ user, token });
  } catch (error) {
    res.status(500).json({
      message: 'There was some mistake. Contact the administrator',
      error,
    });
  }
};

module.exports = { login };
