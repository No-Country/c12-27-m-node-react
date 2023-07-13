import { Router } from 'express';
//import userRegisterHandler from '../handlers/userRegister.handler';
const router = Router();

router.get('/', (req, res) => {
  res.json('Testing app');
});

export { router };
