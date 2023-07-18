const express = require('express');
const { check } = require('express-validator');
const { validateFields, validateJWT } = require('../middlewares');

const router = express.Router();

const {
  getAllProducts,
  getOneProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require('../controllers/product.controller');

router.get('/', getAllProducts);
router.get('/:id', getOneProduct);
router.post(
  '/',
  [
    validateJWT,
    check('name', 'You cannot create a product without a name').not().isEmpty(),
    validateFields,
  ],
  createProduct
);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router;
