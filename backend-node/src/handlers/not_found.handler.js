const statusNotFound = (res, alert) => {
  const data = res ? res : alert;
  return data;
};

module.exports = statusNotFound;
