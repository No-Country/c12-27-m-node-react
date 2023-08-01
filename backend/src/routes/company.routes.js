const Router = require('express');
const {
  getCompanies,
  getCompany,
  createCompany,
  updateCompany,
  deleteCompany,
} = require('../controllers/company.controller');
const {
  validatorCreateCompany,
  validatorGetCompany,
} = require('../validators/company.validator');
const checkRol = require('../middlewares/check_rol');
const authMidleware = require('../middlewares/session');

const router = Router();

router.get('/:id', validatorGetCompany, getCompany);
router.get('/', getCompanies);
router.post('/', validatorCreateCompany, createCompany);
router.put(
  '/:id',
  authMidleware,
  checkRol(['ADMIN_ROLE']),
  validatorGetCompany,
  updateCompany
);
router.delete(
  '/:id',
  authMidleware,
  checkRol(['ADMIN_ROLE']),
  validatorGetCompany,
  deleteCompany
);

module.exports = router;
