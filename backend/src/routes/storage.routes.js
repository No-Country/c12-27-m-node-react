const express = require('express');
const {
  deleteStorage,
  getStorage,
  getStorages,
  postStorage,
  updateStorage,
} = require('../controllers/storage.controller');
const { uploadMiddleware } = require('../handlers/storage.handler');
const checkRol = require('../middlewares/check_rol');
const authMidleware = require('../middlewares/session');
const { validatorGetImage } = require('../validators/storage.validator');

const router = express.Router();

router.post(
  '/uploadfile',
  authMidleware,
  checkRol(['ADMIN_ROLE']),
  uploadMiddleware.single('myfile'),
  postStorage
);

router.get(
  '/:id',
  authMidleware,
  checkRol(['ADMIN_ROLE', 'SELLER_ROLE']),
  validatorGetImage,
  getStorage
);
router.get(
  '/',
  authMidleware,
  checkRol(['ADMIN_ROLE', 'SELLER_ROLE']),
  getStorages
);
router.put(
  '/:id',
  authMidleware,
  checkRol(['ADMIN_ROLE']),
  validatorGetImage,
  updateStorage
);
router.delete(
  '/:id',
  authMidleware,
  checkRol(['ADMIN_ROLE']),
  validatorGetImage,
  deleteStorage
);

module.exports = router;
