const { Router } = require('express');
const {
  deleteSupplier,
  getSupplier,
  getSuppliers,
  postSupplier,
  updateSupplier,
} = require('../controllers/supplier.controller');

const {
  validatorCreateSupplier,
  validatorGetSupplier,
} = require('../validators/supplier.validator');

const router = Router();

/**
 * http://localhost:3000/supplier
 */

router.get('/:id', validatorGetSupplier, getSupplier);
router.get('/', getSuppliers);
router.post('/', validatorCreateSupplier, postSupplier);
router.put('/:id', validatorGetSupplier, updateSupplier);
router.delete('/:id', validatorGetSupplier, deleteSupplier);

module.exports = router;
