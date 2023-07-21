const { Schema, model } = require('mongoose');

const CompanySchema = new Schema(
  {
    rut: {
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
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const CompanyModel = model('Company', CompanySchema);

module.exports = CompanyModel;
