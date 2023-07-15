import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import UserModel from '../models/User.model';
import createJWT from '../helpers/createJWT';

const login = async ({ body }: Request, res: Response) => {
  const { email, password } = body;

  try {
    const user = await UserModel.findOne({ email });
    if (!user)
      return res.status(404).json({ message: 'There was an error logging in' });

    const isPassValid = await bcrypt.compare(password, user.password);
    if (!isPassValid)
      return res.status(404).json({ message: 'There was an error logging in' });

    // Generate JWT
    const token = await createJWT(user.id);
    res.json({ user, token });
  } catch (error) {
    res.status(500).json({
      msg: 'There was some mistake. Contact the administrator',
      error,
    });
  }
};

//TODO: Recovery password
//TODO: Login with google

export { login };
