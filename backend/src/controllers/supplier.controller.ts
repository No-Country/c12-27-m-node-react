import { Request, Response } from "express";
import { handleHttp } from "../handlers/error.handler"
import { InsertSupplier, GetSuppliers, GetSupplier, UpdateSupplier, DeleteSupplier } from "../services/supplier.service";
import { encrypt, decrypt } from "../handlers/encrypt.handler";
import statusNotFound from "../handlers/not_found.handler";


const getSupplier = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const resp = await GetSupplier(id);
    const status = statusNotFound(resp!, 'USER_NOT_FOUND')
    res.send(status);
  } catch (error) {
    handleHttp(res, 'ERROR_GET_Supplier');
  }
}

const getSuppliers = async (req: Request, res: Response) => {
  try {
    const resp = await GetSuppliers();
    res.send(resp);
  } catch (error) {
    handleHttp(res, 'ERROR_GET_SupplierS');
  }
}

const updateSupplier = async ({ params, body }: Request, res: Response) => {
  try {
    const { id } = params;
    const resp = await UpdateSupplier(id, body);
    res.send(resp);
  } catch (error) {
    handleHttp(res, 'ERROR_UPDATE_Supplier');
  }
}

const postSupplier = async ({ body }: Request, res: Response) => {
  try {
    const newUser = body;
    const resSupplier = await InsertSupplier(newUser);
    res.send(resSupplier);
  } catch (error) {
    handleHttp(res, 'ERROR_POST_Supplier', error);
  }
}

const deleteSupplier = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const resp = await DeleteSupplier(id);
    res.send(`El usuario ${resp} ha sido borrado con exito`);
  } catch (error) {
    handleHttp(res, 'ERROR_DELETE_Supplier');
  }
}

export {
  getSupplier,
  getSuppliers,
  updateSupplier,
  postSupplier,
  deleteSupplier,
}
