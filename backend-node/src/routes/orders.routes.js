const { Router } = require('express');
const {
  deleteOrder,
  getOrder,
  getOrders,
  postOrder,
  updateOrder,
} = require('../controllers/orders.controller');

const {
  validatorCreateOrder,
  validatorGetOrder,
} = require('../validators/orders.validator');

const router = Router();

/**
 * http://localhost:3000/Order
 */

router.get('/:id', validatorGetOrder, getOrder);
router.get('/', getOrders);
router.post('/', validatorCreateOrder, postOrder);
router.put('/:id', validatorGetOrder, updateOrder);
router.delete('/:id', validatorGetOrder, deleteOrder);

module.exports = router;
