const { handlerHttp } = require('../handlers/error.handler');

const checkRol = (roles) => (req, res, next) => {
  try {
    const { user } = req;
    const rolByUser = user.role;
    // console.log(rolByUser);
    const checkValueRol = roles.some((rolSingle) =>
      rolByUser.includes(rolSingle)
    );
    if (!checkValueRol) {
      handlerHttp(res, 'USER_NOT_HAVE_PERMISSION', 403);
      return;
    }
    next();
  } catch (error) {
    handlerHttp(res, 'ERROR_PERMISSION_DENIED', 403);
  }
};

module.exports = checkRol;
