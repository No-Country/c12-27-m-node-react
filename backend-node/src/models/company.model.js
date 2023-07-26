const { Schema, model } = require('mongoose');

const CompanySchema = new Schema({
  NIF: {
    type: Number,
    required: true,
    unique: true,
  },
  companyname: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    type: String,
    required: true,
  },
  manager: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
  },
});
CompanySchema.methods.toJSON = function () {
  const { __v, ...company } = this.toObject();
  return company;
};

const CompanyModel = model('Company', CompanySchema);

module.exports = CompanyModel;
