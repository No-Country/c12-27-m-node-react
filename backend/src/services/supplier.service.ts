import { Supplier } from "../interfaces/supplier.interface";
import SupplierModel from "../models/supplier.model";

const InsertSupplier = async (supplier: Supplier) => {
  const resInsert = await SupplierModel.create(supplier);
  const findDataUser = {
    "dni": resInsert.dni,
    "name": resInsert.name,
    "lastname": resInsert.lastname,
    "email": resInsert.email,
  }
  return findDataUser;
};

const GetSuppliers = async () => {
  const resSuppliers = await SupplierModel.find({});
  return resSuppliers;
};

const GetSupplier = async (id: string) => {
  const resSupplier = await SupplierModel.findOne({ _id: id });
  return resSupplier;
};

const UpdateSupplier = async (id: string, data: Supplier) => {
  const resSupplier = await SupplierModel.findOneAndUpdate(
    {
      _id: id
    },
    data,
    {
      new: true,
    },
  );
  return resSupplier;
};

const DeleteSupplier = async (id: string) => {
  const resSupplier = await SupplierModel.findOneAndRemove({ _id: id });
  return resSupplier;
}
export { InsertSupplier, GetSuppliers, GetSupplier, UpdateSupplier, DeleteSupplier };
