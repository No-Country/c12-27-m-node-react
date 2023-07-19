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

const router = Router();

router.get('/:id', validatorGetCompany, getCompany);
router.get('/', getCompanies);
router.post('/', validatorCreateCompany, createCompany);
router.put('/:id', validatorGetCompany, updateCompany);
router.delete('/:id', validatorGetCompany, deleteCompany);

module.exports = router;
