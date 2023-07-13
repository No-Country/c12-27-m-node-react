import { Request, Response } from 'express';
import { UserService } from '../services/user.service';

const service = new UserService();

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await service.findAll();
    res.json(users);
  } catch (error) {
    console.error(error);
  }
};

const getOneUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await service.findOne(id);
    res.json(user);
  } catch (error) {
    console.log(error);
  }
};

const createUser = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const newUser = await service.create(data);
    res.status(201).json(newUser);
  } catch (error) {
    console.log(error);
  }
};

const updateUser = async (req: Request, res: Response) => {
  //TODO: Implement logic to update one user
  res.json('Update User');
};

const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await service.delete(id);
    res.status(200).json(id);
  } catch (error) {
    console.log(error);
  }
};

export { getAllUsers, getOneUser, createUser, updateUser, deleteUser };
