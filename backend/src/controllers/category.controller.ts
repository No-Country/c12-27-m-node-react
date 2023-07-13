import { Request, Response } from 'express';

const getAllCategories = (req: Request, res: Response) => {
  res.json('Get All Categories');
};

// TODO: Other controllers

export { getAllCategories };
