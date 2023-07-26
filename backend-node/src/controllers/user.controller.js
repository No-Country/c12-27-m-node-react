const UserService = require('../services/user.service');
const service = new UserService();
const { handlerHttp, handlerError } = require('../handlers/error.handler');

const getAllUsers = async (req, res) => {
  try {
    const users = await service.findAll(req.user.company);
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
    const newUser = await service.createSeller(data);
    console.log(newUser);
    res.status(201).json(newUser);
  } catch (error) {
    console.log(error);
    handlerError(res, 400, error.message);
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { ...data } = req.body;
  try {
    const userUpdated = await service.update(id, data);
    res.json(userUpdated);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await service.delete(id);
    res.status(200).json({ message: `User with id ${id} removed` });
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
