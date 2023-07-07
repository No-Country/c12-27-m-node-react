import { Schema, Types, model, Model } from "mongoose";
import { SuperUser } from "../interfaces/superUser.interface";

const SuperUserSchema = new Schema<SuperUser>(
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
    username: {
      type: String,
      required: true,
      unique:true
    },
    password: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    role: {
      type: String,
      enum: ['Admin'],
      required: true
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const SuperUserModel = model('superusers', SuperUserSchema);

export default SuperUserModel;
