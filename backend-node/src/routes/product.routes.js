const express = require('express');
const { check } = require('express-validator');
const { validateFields, validateJWT } = require('../middlewares');
const {
  getAllProducts,
  getOneProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require('../controllers/product.controller');
const checkRol = require('../middlewares/check_rol');
const authMidleware = require('../middlewares/session');
const router = express.Router();

router.get(
  '/',
  authMidleware,
  checkRol(['ADMIN_ROLE', 'SELLER_ROLE']),
  validateJWT,
  getAllProducts
);
router.get(
  '/:id',
  [
    authMidleware,
    checkRol(['ADMIN_ROLE', 'SELLER_ROLE']),
    validateJWT,
    check('id', 'The product id is incorrect').isMongoId(),
    validateFields,
  ],
  getOneProduct
);
router.post(
  '/',
  [
    authMidleware,
    checkRol(['ADMIN_ROLE']),
    validateJWT,
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
    authMidleware,
    checkRol(['ADMIN_ROLE']),
    validateJWT,
    check('id', 'The product id is incorrect').isMongoId(),
    validateFields,
  ],
  updateProduct
);
router.delete(
  '/:id',
  [
    authMidleware,
    checkRol(['ADMIN_ROLE']),
    validateJWT,
    check('id', 'The product id is incorrect').isMongoId(),
    validateFields,
  ],
  deleteProduct
);

module.exports = router;
