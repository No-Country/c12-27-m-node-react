const bcrypt = require('bcrypt');

const encrypt = async (password) => {
  const salt = 10;
  const hash = await bcrypt.hash(password, salt);
  return hash;
};

const decrypt = async (password, hash) => {
  const match = await bcrypt.compare(password, hash);
  return match;
};

module.exports = {
  encrypt,
  decrypt,
};
