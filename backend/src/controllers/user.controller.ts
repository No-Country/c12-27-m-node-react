import { Request, Response } from 'express';

const getAllUsers = (req: Request, res: Response) => {
  res.json('Get All users');
};

const getOneUser = (req: Request, res: Response) => {
  res.json('Get one user');
};

const createUser = (req: Request, res: Response) => {
  res.json('Create user');
};

const updateUser = (req: Request, res: Response) => {
  res.json('Update user');
};

const deleteUser = (req: Request, res: Response) => {
  res.json('Delete user');
};

export { getAllUsers, getOneUser, createUser, updateUser, deleteUser };
