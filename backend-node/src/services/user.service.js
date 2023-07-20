const UserModel = require('../models/user.model');
const bcrypt = require('bcrypt');

class UserService {
  async findAll() {
    const users = await UserModel.find();
    return users;
  }

  async findOne(id) {
    const user = await UserModel.findById(id).select('-password -__v');
    if (!user) throw new Error(`Product not found`);
    return user;
  }

  async create(data) {
    let { name, email, password } = data;
    password = await bcrypt.hash(password, 10);
    const newUser = await UserModel.create({ name, email, password });
    return newUser;
  }

  async update(id, data) {
    const user = await UserModel.findById(id);
    const userUpdated = await user.updateOne(data);
    return userUpdated;
  }

  async delete(id) {
    const user = await UserModel.findById(id);
    if (!user) throw new Error(`User not found`);
    await user.deleteOne();
    return { id };
  }
}

module.exports = UserService;
