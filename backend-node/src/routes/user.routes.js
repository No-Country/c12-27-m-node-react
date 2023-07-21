const express = require('express');
const router = express.Router();
const { isAdminRole, validateJWT } = require('../middlewares');

const {
  getAllUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
} = require('../controllers/user.controller');

router.get('/', [validateJWT, isAdminRole], getAllUsers);
router.get('/:id', [validateJWT, isAdminRole], getOneUser);
router.post('/', [validateJWT, isAdminRole], createUser);
router.put('/:id', [validateJWT, isAdminRole], updateUser);
router.delete('/:id', [validateJWT, isAdminRole], deleteUser);

module.exports = router;
