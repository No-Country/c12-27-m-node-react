import { Schema, Types, model, Model } from 'mongoose';
import { User } from '../interfaces/user.interface';

const UserSchema = new Schema<User>({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
  },
  role: {
    type: String,
    required: true,
    default: 'SELLER_ROLE',
    enum: ['ADMIN_ROLE', 'SELLER_ROLE'],
  },
  avatar: {
    type: String,
  },
  token: {
    type: String,
  },
  status: {
    type: Boolean,
    default: true,
  },
});

UserSchema.methods.toJSON = function () {
  const { __v, password, _id, ...user } = this.toObject();
  user.id = _id;
  return user;
};

const UserModel = model('users', UserSchema);
export default UserModel;
