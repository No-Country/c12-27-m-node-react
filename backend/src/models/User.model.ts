import { Schema, Types, model, Model } from 'mongoose';
import { User } from '../interfaces/user.interface';

const UserSchema = new Schema<User>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    required: true,
  },
  token: {
    type: String,
    required: true,
  },
});

const UserModel = model('users', UserSchema);
export default UserModel;
