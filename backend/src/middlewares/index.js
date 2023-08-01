const validateLogin = require('./validateLogin');
const validateFields = require('./validateFields');
const validateJWT = require('./validateJWT');
const validateRole = require('./validateRole');

module.exports = {
  ...validateLogin,
  ...validateFields,
  ...validateJWT,
  ...validateRole,
};
