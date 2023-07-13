import { Router } from 'express';
const router = Router();
import {
  getAllUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
} from '../controllers/user.controller';

router.get('/', getAllUsers);
router.get('/:id', getOneUser);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export { router };
