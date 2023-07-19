const Router = require('express');
const {
  getCompanies,
  getCompany,
  createCompany,
  updateCompany,
  deleteCompany,
  loginCompany,
} = require('../controllers/company.controller');

const router = Router();

router.post('/login', loginCompany);
router.get('/:id', getCompany);
router.get('/', getCompanies);
router.post('/', createCompany);
router.put('/:id', updateCompany);
router.delete('/:id', deleteCompany);

module.exports = router;
