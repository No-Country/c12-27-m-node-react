const CompanyModel = require('../models/company.model');
const bcrypt = require('bcrypt');
const UserModel = require('../models/user.model');

const GetCompanies = async () => {
  const resCompanys = await CompanyModel.find({});
  return resCompanys;
};

const GetCompany = async (id) => {
  const company = await CompanyModel.findOne({ _id: id }).select('-__v');
  if (!company) throw new Error(`Company not found`);
  return company;
};

const CreateCompany = async (req) => {
  const { body } = req;
  let { password, email, ...company } = body;

  // Encrypt password
  password = await bcrypt.hash(password, 10);

  // Create company
  const newCompany = await CompanyModel.create({ email, ...company });

  // Create user manager
  let role = 'ADMIN_ROLE';
  let { manager, companyname } = body;
  await UserModel.create({
    name: manager,
    email,
    password,
    role,
    company: companyname,
  });

  return newCompany;
};

const UpdateCompany = async (id, data) => {
  const companyUpdated = await CompanyModel.findByIdAndUpdate(id, data, {
    new: true,
  }).select('-__v');
  if (!companyUpdated) throw new Error(`Company not found`);
  return companyUpdated;
};

const DeleteCompany = async (id) => {
  const company = await CompanyModel.findById(id);
  if (!company) throw new Error(`Company not found`);
  await company.deleteOne();
  return { id };
};

module.exports = {
  CreateCompany,
  GetCompanies,
  GetCompany,
  UpdateCompany,
  DeleteCompany,
};
