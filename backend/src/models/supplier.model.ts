import { Schema, Types, model, Model } from "mongoose";
import { Supplier } from "../interfaces/supplier.interface";

const SupplierSchema = new Schema<Supplier>(
  {
    dni: {
      type: Number,
      required: true,
      unique: true
    },
    name: {
      type: String,
      required: true
    },
    lastname: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const SupplierModel = model('supplier', SupplierSchema);

export default SupplierModel;
