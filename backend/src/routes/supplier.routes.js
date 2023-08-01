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
const checkRol = require('../middlewares/check_rol');
const authMidleware = require('../middlewares/session');

const router = Router();

/**
 * http://localhost:3000/supplier
 */

router.get(
  '/:id',
  authMidleware,
  checkRol(['ADMIN_ROLE', 'SELLER_ROLE']),
  validatorGetSupplier,
  getSupplier
);
router.get(
  '/',
  authMidleware,
  checkRol(['ADMIN_ROLE', 'SELLER_ROLE']),
  getSuppliers
);
router.post(
  '/',
  authMidleware,
  checkRol(['ADMIN_ROLE']),
  validatorCreateSupplier,
  postSupplier
);
router.put(
  '/:id',
  authMidleware,
  checkRol(['ADMIN_ROLE']),
  validatorGetSupplier,
  updateSupplier
);
router.delete(
  '/:id',
  authMidleware,
  checkRol(['ADMIN_ROLE']),
  validatorGetSupplier,
  deleteSupplier
);

module.exports = router;
