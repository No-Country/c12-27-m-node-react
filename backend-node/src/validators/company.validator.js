const { check } = require('express-validator');
const validateResults = require('../helpers/validate_result');

const validatorCreateCompany = [
  check('rut').exists().notEmpty().withMessage('rut is require'),
  check('companyname')
    .exists()
    .notEmpty()
    .withMessage('companyname is require'),
  check('address').exists().notEmpty().withMessage('address is require'),
  check('email').exists().notEmpty().isEmail().withMessage('email is require'),
  check('password').exists().notEmpty().withMessage('password is require'),
  (req, res, next) => {
    return validateResults(req, res, next);
  },
];

const validatorGetCompany = [
  check('id').exists().notEmpty(),
  (req, res, next) => {
    return validateResults(req, res, next);
  },
];

module.exports = { validatorCreateCompany, validatorGetCompany };
