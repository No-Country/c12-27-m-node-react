import { Request, Response } from 'express';

const login = (req: Request, res: Response) => {
  res.json('Login user');
};

export { login };
