const { handlerHttp, handlerError } = require('../handlers/error.handler');
const {
  GetCompany,
  GetCompanies,
  UpdateCompany,
  CreateCompany,
  DeleteCompany,
} = require('../services/company.services');
const statusNotFound = require('../handlers/not_found.handler');

const createCompany = async (req, res) => {
  try {
    const resSuperUser = await CreateCompany(req);
    res.status(201).json(resSuperUser);
  } catch (error) {
    handlerError(res, 400, error.message);
    // handlerHttp(res, 'ERROR_POST_COMPANY', error);
  }
};

const getCompany = async (req, res) => {
  try {
    const { id } = req.params;
    const company = await GetCompany(id);
    res.json(company);
  } catch (error) {
    handlerError(res, 400, error.message);
    // handlerHttp(res, 'ERROR_GET_COMPANY');
  }
};

const getCompanies = async (req, res) => {
  try {
    const resp = await GetCompanies();
    res.send(resp);
  } catch (error) {
    handlerHttp(res, 'ERROR_GET_COMPANIES');
  }
};

const updateCompany = async (req, res) => {
  try {
    const { id } = req.params;
    const companyUpdated = await UpdateCompany(id, req.body);
    res.json(companyUpdated);
  } catch (error) {
    // handlerHttp(res, 'ERROR_UPDATE_COMPANY');
    handlerError(res, 400, error.message);
  }
};

const deleteCompany = async (req, res) => {
  try {
    const { id } = req.params;
    await DeleteCompany(id);
    res.status(200).json({ message: `Company with id ${id} has deleted` });
  } catch (error) {
    handlerError(res, 400, error.message);
  }
};

module.exports = {
  getCompanies,
  getCompany,
  createCompany,
  updateCompany,
  deleteCompany,
};
