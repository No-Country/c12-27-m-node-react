import { SuperUser } from "../interfaces/superUser.interface";
import SuperUserModel from "../models/superUser.models";

const LoginSuperUser = async (email: string) => {
  const resSuperUser = await SuperUserModel.findOne({ email: email });
  return resSuperUser;
};

const InsertSuperUser = async (superUser: SuperUser) => {
  const resInsert = await SuperUserModel.create(superUser);
  const findDataUser = {
    "dni": resInsert.dni,
    "name": resInsert.name,
    "lastname": resInsert.lastname,
    "username": resInsert.username,
    "email": resInsert.email,
    "role": resInsert.role
  }
  return findDataUser;
};

const GetSuperUsers = async () => {
  const resSuperUsers = await SuperUserModel.find({}).select('-password');
  return resSuperUsers;
};

const GetSuperUser = async (id: string) => {
  const resSuperUser = await SuperUserModel.findOne({ _id: id }).select('-password');
  return resSuperUser;
};

const UpdateSuperUser = async (id: string, data: SuperUser) => {
  const resSuperUser = await SuperUserModel.findOneAndUpdate(
    {
      _id: id
    },
    data,
    {
      new: true,
    },
  ).select('-password');
  return resSuperUser;
};

const DeleteSuperUser = async (id: string) => {
  const resSuperUser = await SuperUserModel.findOneAndRemove({ _id: id }).select('-password');
  return resSuperUser;
}
export { InsertSuperUser, GetSuperUsers, GetSuperUser, UpdateSuperUser, DeleteSuperUser, LoginSuperUser };
