const UserService = require('../services/user.service');
const service = new UserService();

const getAllUsers = async (req, res) => {
  try {
    const users = await service.findAll();
    res.json(users);
  } catch (error) {
    console.error(error);
  }
};

const getOneUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await service.findOne(id);
    res.json(user);
  } catch (error) {
    console.log(error);
  }
};

const createUser = async (req, res) => {
  try {
    const data = req.body;
    const newUser = await service.create(data);
    res.status(201).json(newUser);
  } catch (error) {
    console.log(error);
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
    console.log(error);
  }
};

module.exports = {
  getAllUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
};
