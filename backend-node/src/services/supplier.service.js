const SupplierModel = require('../models/supplier.model');

const InsertSupplier = async (supplier) => {
  const resInsert = await SupplierModel.create(supplier);
  return resInsert;
};

const GetSuppliers = async () => {
  const resSuppliers = await SupplierModel.find({});
  return resSuppliers;
};

const GetSupplier = async (id) => {
  const resSupplier = await SupplierModel.findOne({ _id: id });
  return resSupplier;
};

const UpdateSupplier = async (id, data) => {
  const resSupplier = await SupplierModel.findOneAndUpdate(
    {
      _id: id,
    },
    data,
    {
      new: true,
    }
  );
  return resSupplier;
};

const DeleteSupplier = async (id) => {
  const resSupplier = await SupplierModel.findOneAndRemove({ _id: id });
  return resSupplier;
};
module.exports = {
  InsertSupplier,
  GetSuppliers,
  GetSupplier,
  UpdateSupplier,
  DeleteSupplier,
};
