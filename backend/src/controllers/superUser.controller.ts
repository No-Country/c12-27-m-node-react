import { Request, Response } from "express";
import { handleHttp } from "../handlers/error.handler"
import { InsertSuperUser, GetSuperUsers, GetSuperUser, UpdateSuperUser, DeleteSuperUser, LoginSuperUser } from "../services/superUser.services";
import {encrypt, decrypt} from "../handlers/encrypt.handler";


const getSuperUser = async ({params}: Request, res: Response) => {
  try {
    const { id } = params;
    const resp = await GetSuperUser(id);
    res.send(resp);
  } catch (error) {
    handleHttp(res, 'ERROR_GET_SUPERUSER');
  }
}

const getSuperUsers = async (req: Request, res: Response) => {
  try {
    const resp = await GetSuperUsers();
    res.send(resp);
  } catch (error) {
    handleHttp(res, 'ERROR_GET_SUPERUSERS');
  }
}

const updateSuperUser = async ({params, body }: Request, res: Response) => {
  try {
    const { id } = params;
    const resp = await UpdateSuperUser(id, body);
    res.send(resp);
  } catch (error) {
    handleHttp(res, 'ERROR_UPDATE_SUPERUSER');
  }
}

const loginSuperUser = async({body}: Request, res: Response) => {
  try {
    const { email, password } = body;
    const resp: any = await LoginSuperUser(email);
    const isMatch = await decrypt(password, resp.password);
    const result = resp;
    if(isMatch) {
      res.send({email: result.email, username: result.username, name: result.name+ ' ' + result.lastname});
    }
  } catch (error) {
    handleHttp(res, 'ERROR_LOGIN_SUPERUSER', error);
  }
};

const postSuperUser = async ({body}: Request, res: Response) => {
  try {
    const newUser = body;
    const hash = await encrypt(newUser.password);
    newUser.password = hash;
    const resSuperUser = await InsertSuperUser(newUser);
    res.send(resSuperUser);
  } catch (error) {
    handleHttp(res, 'ERROR_POST_SUPERUSER', error);
  }
}

const deleteSuperUser = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const resp = await DeleteSuperUser(id);
    res.send(`El usuario ${resp} ha sido borrado con exito`);
  } catch (error) {
    handleHttp(res, 'ERROR_DELETE_SUPERUSER');
  }
}

export {
  getSuperUser,
  getSuperUsers,
  updateSuperUser,
  postSuperUser,
  deleteSuperUser,
  loginSuperUser
}
