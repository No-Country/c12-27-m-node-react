const { Schema, model } = require('mongoose');

const CompanySchema = new Schema({
  NIF: {
    type: Number,
    required: true,
  },
  companyname: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
    unique: true,
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

const CompanyModel = model('Company', CompanySchema);

module.exports = CompanyModel;
