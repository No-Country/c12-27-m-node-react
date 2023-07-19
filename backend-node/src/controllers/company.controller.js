const { handleHttp } = require('../handlers/error.handler');
const {
  GetCompany,
  GetCompanies,
  UpdateCompany,
  CreateCompany,
  DeleteCompany,
} = require('../services/company.services');
const statusNotFound = require('../handlers/not_found.handler');

const getCompany = async ({ params } = req, res) => {
  try {
    const { id } = params;
    const resp = await GetCompany(id);
    const status = statusNotFound(resp, 'COMPANY_NOT_FOUND');
    res.send(status);
  } catch (error) {
    handleHttp(res, 'ERROR_GET_COMPANY');
  }
};

const getCompanies = async (req, res) => {
  try {
    const resp = await GetCompanies();
    res.send(resp);
  } catch (error) {
    handleHttp(res, 'ERROR_GET_COMPANIES');
  }
};

const updateCompany = async ({ params, body }, res) => {
  try {
    const { id } = params;
    const resp = await UpdateCompany(id, body);
    res.send(resp);
  } catch (error) {
    handleHttp(res, 'ERROR_UPDATE_COMPANY');
  }
};

const createCompany = async (req, res) => {
  try {
    const resSuperUser = await CreateCompany(req);
    res.send(resSuperUser);
  } catch (error) {
    handleHttp(res, 'ERROR_POST_COMPANY', error);
  }
};

const deleteCompany = async ({ params } = req, res) => {
  try {
    const { id } = params;
    const resp = await DeleteCompany(id);
    res.send(`La empresa ${resp} ha sido borrado con exito`);
  } catch (error) {
    handleHttp(res, 'ERROR_DELETE_COMPANY');
  }
};

module.exports = {
  getCompanies,
  getCompany,
  createCompany,
  updateCompany,
  deleteCompany,
};
