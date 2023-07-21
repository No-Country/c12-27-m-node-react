const UserService = require('../services/user.service');
const service = new UserService();
const { handlerHttp } = require('../handlers/error.handler');

const getAllUsers = async (req, res) => {
  try {
    const users = await service.findAll();
    res.json(users);
  } catch (error) {
    handlerHttp(res, 'ERROR_GET_USERS', error);
  }
};

const getOneUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await service.findOne(id);
    res.json(user);
  } catch (error) {
    handlerHttp(res, 'ERROR_GET_USER', error);
  }
};

const createUser = async (req, res) => {
  try {
    const data = req.body;
    const newUser = await service.create(data);
    res.status(201).json(newUser);
  } catch (error) {
    handlerHttp(res, 'ERROR_POST_USER', error);
  }
};

const updateUser = async (req, res) => {
  res.json('Update User');
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await service.delete(id);
    res.status(200).json(id);
  } catch (error) {
    handlerHttp(res, 'ERROR_DELETE_USER', error);
  }
};

module.exports = {
  getAllUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
};
