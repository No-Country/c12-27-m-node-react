const { Schema, model } = require('mongoose');

const SupplierSchema = new Schema(
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
    email: {
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

const SupplierModel = model('supplier', SupplierSchema);

module.exports = SupplierModel;
