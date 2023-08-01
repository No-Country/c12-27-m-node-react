const { check } = require('express-validator');
const validateResults = require('../helpers/validate_result');

const validatorCreateSupplier = [
  check('dni').exists().notEmpty().withMessage('dni is require'),
  check('name').exists().notEmpty().withMessage('name is require'),
  check('lastname').exists().notEmpty().withMessage('lastname is require'),
  check('email').exists().notEmpty().isEmail().withMessage('email is require'),
  (req, res, next) => {
    return validateResults(req, res, next);
  },
];

const validatorGetSupplier = [
  check('id').exists().notEmpty(),
  (req, res, next) => {
    return validateResults(req, res, next);
  },
];

module.exports = { validatorCreateSupplier, validatorGetSupplier };
