const { Router } = require('express');
const {
  deleteOrder,
  getOrder,
  getOrders,
  postOrder,
  updateOrder,
} = require('../controllers/orders.controller');
const checkRol = require('../middlewares/check_rol');
const authMidleware = require('../middlewares/session');
const {
  validatorCreateOrder,
  validatorGetOrder,
} = require('../validators/orders.validator');

const router = Router();

/**
 * http://localhost:3000/Order
 */

router.get(
  '/:id',
  authMidleware,
  checkRol(['ADMIN_ROLE', 'SELLER_ROLE']),
  validatorGetOrder,
  getOrder
);
router.get(
  '/',
  authMidleware,
  checkRol(['ADMIN_ROLE', 'SELLER_ROLE']),
  getOrders
);
router.post(
  '/',
  authMidleware,
  checkRol(['ADMIN_ROLE']),
  validatorCreateOrder,
  postOrder
);
router.put(
  '/:id',
  authMidleware,
  checkRol(['ADMIN_ROLE']),
  validatorGetOrder,
  updateOrder
);
router.delete(
  '/:id',
  authMidleware,
  checkRol(['ADMIN_ROLE']),
  validatorGetOrder,
  deleteOrder
);

module.exports = router;
