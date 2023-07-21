const express = require('express');
const router = express.Router();
const { isAdminRole, validateJWT, validateFields } = require('../middlewares');
const {
  getCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
} = require('../controllers/category.controller');
const { check } = require('express-validator');

router.get('/', validateJWT, getCategories);
router.get(
  '/:id',
  [
    validateJWT,
    check('id', 'It is not a valid id format').isMongoId(),
    validateFields,
  ],
  getCategory
);
router.post(
  '/',
  [
    validateJWT,
    isAdminRole,
    check('name', 'The name is required').not().isEmpty(),
    validateFields,
  ],
  createCategory
);
router.put(
  '/:id',
  [
    validateJWT,
    isAdminRole,
    check('name', 'The name is required').not().isEmpty(),
    validateFields,
  ],
  updateCategory
);
router.delete('/:id', [validateJWT, isAdminRole], deleteCategory);

module.exports = router;
