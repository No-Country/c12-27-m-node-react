const { handleHttp } = require('../handlers/error.handler');
const {
  InsertStorage,
  GetStorages,
  GetStorage,
  UpdateStorage,
  DeleteStorage,
} = require('../services/storage.services');
const statusNotFound = require('../handlers/not_found.handler');

const getStorage = async (req, res) => {
  try {
    const { id } = req.params;
    const resp = await GetStorage(id);
    const status = statusNotFound(resp, 'FILE_NOT_FOUND');
    res.send(status);
  } catch (error) {
    handleHttp(res, 'ERROR_GET_FILE');
  }
};

const getStorages = async (req, res) => {
  try {
    const resp = await GetStorages();
    res.send(resp);
  } catch (error) {
    handleHttp(res, 'ERROR_GET_FILES');
  }
};

const updateStorage = async (req, res) => {
  try {
    const { id } = req.params;
    const resp = await UpdateStorage(id, req.body);
    res.send(resp);
  } catch (error) {
    handleHttp(res, 'ERROR_UPDATE_FILE');
  }
};

const postStorage = async (req, res) => {
  try {
    const resStorage = await InsertStorage(req);
    res.send(resStorage);
  } catch (error) {
    handleHttp(res, 'ERROR_POST_FILE', error);
  }
};

const deleteStorage = async (req, res) => {
  try {
    const { id } = req.params;
    const resp = await DeleteStorage(id);
    res.send(`La orden ${resp} ha sido borrado con exito`);
  } catch (error) {
    handleHttp(res, 'ERROR_DELETE_FILE');
  }
};

module.exports = {
  getStorage,
  getStorages,
  updateStorage,
  postStorage,
  deleteStorage,
};
