import { Router } from 'express';
import { check } from 'express-validator';
import { validateFormLogin } from '../middlewares/validateLogin';
import { login } from '../controllers/auth.controller';

const router = Router();

router.post(
  '/login',
  [
    check('email', 'Email is required').isEmail(),
    check('email', 'The email field cannot be empty').not().isEmpty(),
    check('password', 'Password is required').not().isEmpty(),
    validateFormLogin,
  ],
  login,
);

export { router };
