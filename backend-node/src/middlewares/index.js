const validateLogin = require('./validateLogin');
const validateFields = require('./validateFields');
const validateJWT = require('./validateJWT');

module.exports = {
  ...validateLogin,
  ...validateFields,
  ...validateJWT,
};
