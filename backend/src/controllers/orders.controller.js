const { handleHttp } = require('../handlers/error.handler');
const {
  InsertOrder,
  GetOrders,
  GetOrder,
  UpdateOrder,
  DeleteOrder,
} = require('../services/orders.services');
const statusNotFound = require('../handlers/not_found.handler');

const getOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const resp = await GetOrder(id);
    const status = statusNotFound(resp, 'ORDER_NOT_FOUND');
    res.send(status);
  } catch (error) {
    handleHttp(res, 'ERROR_GET_ORDER');
  }
};

const getOrders = async (req, res) => {
  try {
    const resp = await GetOrders();
    res.send(resp);
  } catch (error) {
    handleHttp(res, 'ERROR_GET_ORDERS');
  }
};

const updateOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const resp = await UpdateOrder(id, req.body);
    res.send(resp);
  } catch (error) {
    handleHttp(res, 'ERROR_UPDATE_ORDER');
  }
};

const postOrder = async (req, res) => {
  try {
    const newUser = req.body;
    const resOrder = await InsertOrder(newUser);
    res.send(resOrder);
  } catch (error) {
    handleHttp(res, 'ERROR_POST_ORDER', error);
  }
};

const deleteOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const resp = await DeleteOrder(id);
    res.send(`La orden ${resp} ha sido borrado con exito`);
  } catch (error) {
    handleHttp(res, 'ERROR_DELETE_ORDER');
  }
};

module.exports = {
  getOrder,
  getOrders,
  updateOrder,
  postOrder,
  deleteOrder,
};
