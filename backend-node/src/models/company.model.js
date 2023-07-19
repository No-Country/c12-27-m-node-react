const { Schema, model } = require('mongoose');

const CompanySchema = new Schema(
  {
    dni: {
      type: Number,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      enum: ['Admin'],
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const CompanyModel = model('Company', CompanySchema);

module.exports = CompanyModel;
