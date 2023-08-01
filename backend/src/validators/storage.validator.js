const { check } = require('express-validator');
const validateResults = require('../helpers/validate_result');

const validatorGetImage = [
  check('id').exists().notEmpty(),
  (req, res, next) => {
    return validateResults(req, res, next);
  },
];

module.exports = { validatorGetImage };
