const { handleHttp } = require('../handlers/error.handler');
const {
  InsertSupplier,
  GetSuppliers,
  GetSupplier,
  UpdateSupplier,
  DeleteSupplier,
} = require('../services/supplier.service');
const statusNotFound = require('../handlers/not_found.handler');

const getSupplier = async (req, res) => {
  try {
    const { id } = req.params;
    const resp = await GetSupplier(id);
    const status = statusNotFound(resp, 'USER_NOT_FOUND');
    res.send(status);
  } catch (error) {
    handleHttp(res, 'ERROR_GET_SUPPLIER');
  }
};

const getSuppliers = async (req, res) => {
  try {
    const resp = await GetSuppliers();
    res.send(resp);
  } catch (error) {
    handleHttp(res, 'ERROR_GET_SUPPLIERS');
  }
};

const updateSupplier = async (req, res) => {
  try {
    const { id } = req.params;
    const resp = await UpdateSupplier(id, req.body);
    res.send(resp);
  } catch (error) {
    handleHttp(res, 'ERROR_UPDATE_SUPPLIER');
  }
};

const postSupplier = async (req, res) => {
  try {
    const newUser = req.body;
    const resSupplier = await InsertSupplier(newUser);
    res.send(resSupplier);
  } catch (error) {
    handleHttp(res, 'ERROR_POST_SUPPLIER', error);
  }
};

const deleteSupplier = async (req, res) => {
  try {
    const { id } = req.params;
    const resp = await DeleteSupplier(id);
    res.send(`El usuario ${resp} ha sido borrado con exito`);
  } catch (error) {
    handleHttp(res, 'ERROR_DELETE_SUPPLIER');
  }
};

module.exports = {
  getSupplier,
  getSuppliers,
  updateSupplier,
  postSupplier,
  deleteSupplier,
};
