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

  // Validate if email company exists
  const validateCompany = await CompanyModel.findOne({ email });
  if (validateCompany) throw new Error(`Company already exists`);

  // Encrypt password
  password = await bcrypt.hash(password, 10);

  // Create company
  const newCompany = await CompanyModel.create({ email, ...company });

  // Create user manager
  let role = 'ADMIN_ROLE';
  let { manager } = body;
  await UserModel.create({
    name: manager,
    email,
    password,
    role,
    company: newCompany._id,
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
