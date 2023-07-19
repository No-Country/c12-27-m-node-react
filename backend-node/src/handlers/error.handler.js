const handleHttp = (res, error, errorRaw) => {
  res.status(500);
  res.send({ error, errorRaw });
};

module.exports = { handleHttp };
