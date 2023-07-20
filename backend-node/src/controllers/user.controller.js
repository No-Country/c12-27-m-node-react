const UserService = require('../services/user.service');
const service = new UserService();

const getAllUsers = async (req, res) => {
  try {
    const users = await service.findAll();
    res.json(users);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

const getOneUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await service.findOne(id);
    res.json(user);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

const createUser = async (req, res) => {
  try {
    const data = req.body;
    const newUser = await service.create(data);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(401).json({ message: error.message });
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
    res.status(401).json({ message: error.message });
  }
};

module.exports = {
  getAllUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
};
