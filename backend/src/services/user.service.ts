import { User } from '../interfaces/user.interface';
import UserModel from '../models/user.model';

class UserService {
  async findAll() {
    const users = await UserModel.find();
    return users;
  }

  async findOne(id: any) {
    const user = await UserModel.findById(id);
    if (!user) throw new Error(`Product not found`);
    return user;
  }

  async create(data: any) {
    const newUser = await UserModel.create(data);
    return newUser;
  }

  async update(id: any, data: any) {
    const user = await UserModel.findById(id);
    const userUpdated = await user?.updateOne(data);
    return userUpdated;
  }

  async delete(id: any) {
    const user = await UserModel.findById(id);
    if (!user) throw new Error(`User not found`);
    await user.deleteOne();
    return { id };
  }
}

export { UserService };
