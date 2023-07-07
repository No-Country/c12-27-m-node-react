import { default as bcrypt } from "bcrypt";

const encrypt = async (password: string) => {
  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(password, salt);
  return hash;
};

const decrypt = async(password: string, hash: string) => {
  const match = await bcrypt.compare(password, hash);
  return match;
};

export {
  encrypt,
  decrypt
};
