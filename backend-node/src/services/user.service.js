const UserModel = require('../models/user.model');
const bcrypt = require('bcrypt');

class UserService {
  async findAll() {
    const users = await UserModel.find();
    return users;
  }

  async findOne(id) {
    const user = await UserModel.findById(id).select('-password -__v');
    if (!user) throw new Error(`User not found`);
    return user;
  }

  async findUserByJWT(id) {
    const user = await UserModel.findById(id).select('-password -__v');
    if (!user)
      throw new Error(`The token corresponds to a user that does not exist`);
    return user;
  }

  async create(data) {
    let { name, email, password } = data;
    password = await bcrypt.hash(password, 10);
    const newUser = await UserModel.create({ name, email, password });
    return newUser;
  }

  async createSeller(data) {
    let password =
      Math.random().toString(32).substring(2) + Date.now().toString(32);
    const newUser = await UserModel.create({ password, ...data });
    return newUser;
  }

  async update(id, data) {
    const userUpdated = await UserModel.findByIdAndUpdate(id, data, {
      new: true,
    }).select('-__v');
    if (!userUpdated) throw new Error(`User not found`);
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
