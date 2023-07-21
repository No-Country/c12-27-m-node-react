const express = require('express');
const router = express.Router();
const {
  getCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
} = require('../controllers/category.controller');
const checkRol = require('../middlewares/check_rol');
const authMidleware = require('../middlewares/session');

router.get(
  '/',
  authMidleware,
  checkRol(['ADMIN_ROLE', 'SELLER_ROLE']),
  getCategories
);
router.get(
  '/:id',
  authMidleware,
  checkRol(['ADMIN_ROLE', 'SELLER_ROLE']),
  getCategory
);
router.post('/', authMidleware, checkRol(['ADMIN_ROLE']), createCategory);
router.put('/:id', authMidleware, checkRol(['ADMIN_ROLE']), updateCategory);
router.delete('/:id', authMidleware, checkRol(['ADMIN_ROLE']), deleteCategory);

module.exports = router;
