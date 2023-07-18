const express = require('express');
const { check } = require('express-validator');
const { login } = require('../controllers/auth.controller');
const { validateFormLogin } = require('../middlewares/validateLogin');

const router = express.Router();

router.post(
  '/login',
  [
    check('email', 'Email is required').isEmail(),
    check('email', 'The email field cannot be empty').not().isEmpty(),
    check('password', 'Password is required').not().isEmpty(),
    validateFormLogin,
  ],
  login
);

module.exports = router;
