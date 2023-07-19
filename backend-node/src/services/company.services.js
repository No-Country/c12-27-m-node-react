/* eslint-disable node/no-unsupported-features/es-syntax */
const CompanyModel = require('../models/company.model');
const { encrypt, decrypt } = require('../handlers/encrypt.handler');

const LoginCompany = async (body) => {
  const { email, password } = body;
  const resp = await CompanyModel.findOne({ email: email });
  const isMatch = await decrypt(password, resp.password);
  const result = resp;
  if (isMatch) {
    return {
      email: result.email,
      username: result.username,
      name: result.name + ' ' + result.lastname,
    };
  }
};

const CreateCompany = async (req) => {
  const { body } = req;
  const hashPassword = await encrypt(body.password);
  const bodyRes = { ...body, password: hashPassword };
  const dataUser = await CompanyModel.create(bodyRes);
  dataUser.set('password', undefined, { strict: false });
  return dataUser;
};

const GetCompanies = async () => {
  const resCompanys = await CompanyModel.find({}).select('-password');
  return resCompanys;
};

const GetCompany = async (id) => {
  const resCompany = await CompanyModel.findOne({ _id: id }).select(
    '-password'
  );
  return resCompany;
};

const UpdateCompany = async (id, data) => {
  const resCompany = await CompanyModel.findOneAndUpdate(
    {
      _id: id,
    },
    data,
    {
      new: true,
    }
  ).select('-password');
  return resCompany;
};

const DeleteCompany = async (id) => {
  const resCompany = await CompanyModel.findOneAndRemove({
    _id: id,
  }).select('-password');
  return resCompany;
};
module.exports = {
  CreateCompany,
  GetCompanies,
  GetCompany,
  UpdateCompany,
  DeleteCompany,
  LoginCompany,
};
