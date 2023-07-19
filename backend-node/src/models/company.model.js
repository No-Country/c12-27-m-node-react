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
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const CompanyModel = model('Company', CompanySchema);

module.exports = CompanyModel;
