const handlerHttp = (res, error, errorRaw) => {
  res.status(500);
  res.json({ error, errorRaw });
};

const handlerError = (res, codeError, messageError) => {
  res.status(codeError).json({ message: messageError });
};

module.exports = { handlerHttp, handlerError };
