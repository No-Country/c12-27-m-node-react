const { check } = require('express-validator');
const validateResults = require('../helpers/validate_result');

const validatorCreateOrder = [
  check('id_user').exists().notEmpty().withMessage('id_user is require'),
  check('product').exists().notEmpty().withMessage('product is require'),
  check('quantity').exists().notEmpty().withMessage('quantity is require'),
  (req, res, next) => {
    return validateResults(req, res, next);
  },
];

const validatorGetOrder = [
  check('id').exists().notEmpty(),
  (req, res, next) => {
    return validateResults(req, res, next);
  },
];

module.exports = { validatorCreateOrder, validatorGetOrder };
