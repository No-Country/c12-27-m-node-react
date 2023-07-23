const { handlerHttp } = require('../handlers/error.handler');
const { verifyToken } = require('../helpers/createJWT');
const UserModel = require('../models/user.model');

const authMidleware = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      handlerHttp(res, 'UNAUTHORIZED', 401);
      return;
    }

    const token = req.headers.authorization.split(' ').pop();
    const dataToken = await verifyToken(token);

    // TODO: Custom message error
    if (!dataToken) {
      handlerHttp(res, 'NOT_PAYLOAD_DATA', 401);
      return;
    }
    const userData = await UserModel.findOne({ _id: dataToken.id });
    req.user = userData;

    next();
  } catch (error) {
    handlerHttp(res, 'LOGIN_REQUIRED', 401);
  }
};

module.exports = authMidleware;
