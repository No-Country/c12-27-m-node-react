const express = require('express');
const router = express.Router();
const checkRol = require('../middlewares/check_rol');
const authMidleware = require('../middlewares/session');

const {
  getAllUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
} = require('../controllers/user.controller');

router.get('/', authMidleware, checkRol(['ADMIN_ROLE']), getAllUsers);
router.get('/:id', authMidleware, checkRol(['ADMIN_ROLE']), getOneUser);
router.post('/', authMidleware, checkRol(['ADMIN_ROLE']), createUser);
router.put('/:id', authMidleware, checkRol(['ADMIN_ROLE']), updateUser);
router.delete('/:id', authMidleware, checkRol(['ADMIN_ROLE']), deleteUser);

module.exports = router;
