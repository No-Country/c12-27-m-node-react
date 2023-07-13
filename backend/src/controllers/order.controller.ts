import { Request, Response } from 'express';

const getAllOrders = (req: Request, res: Response) => {
  res.json('Get All Orders');
};

// TODO: Other controllers

export { getAllOrders };
