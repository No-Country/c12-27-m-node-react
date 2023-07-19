const express = require('express');
const {
  deleteStorage,
  getStorage,
  getStorages,
  postStorage,
  updateStorage,
} = require('../controllers/storage.controller');
const { uploadMiddleware } = require('../handlers/storage.handler');

const { validatorGetImage } = require('../validators/storage.validator');

const router = express.Router();

router.post('/uploadfile', uploadMiddleware.single('myfile'), postStorage);

router.get('/:id', validatorGetImage, getStorage);
router.get('/', getStorages);
router.put('/:id', validatorGetImage, updateStorage);
router.delete('/:id', validatorGetImage, deleteStorage);

module.exports = router;
