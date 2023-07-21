const express = require('express');
const { check } = require('express-validator');
const { validateFields, validateJWT, isAdminRole } = require('../middlewares');

const router = express.Router();

const {
  getAllProducts,
  getOneProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require('../controllers/product.controller');

router.get('/', validateJWT, getAllProducts);
router.get(
  '/:id',
  [
    validateJWT,
    check('id', 'The product id is incorrect').isMongoId(),
    validateFields,
  ],
  getOneProduct
);
router.post(
  '/',
  [
    validateJWT,
    isAdminRole,
    check('name', 'You cannot create a product without a name').not().isEmpty(),
    check('category', 'You cannot create a product without a category')
      .not()
      .isEmpty(),
    check('price')
      .not()
      .isEmpty()
      .withMessage('Enter the quantity of the product'),
    check('price')
      .isNumeric()
      .withMessage('The price should be in numerical format'),
    check('stock', 'Enter quantity of stock of the product').not().isEmpty(),
    check('supplier', 'enter supplier name').not().isEmpty(),
    validateFields,
  ],
  createProduct
);
router.put(
  '/:id',
  [
    validateJWT,
    isAdminRole,
    check('id', 'The product id is incorrect').isMongoId(),
    validateFields,
  ],
  updateProduct
);
router.delete(
  '/:id',
  [
    validateJWT,
    isAdminRole,
    check('id', 'The product id is incorrect').isMongoId(),
    validateFields,
  ],
  deleteProduct
);

module.exports = router;
