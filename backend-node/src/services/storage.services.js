const StorageModel = require('../models/storage.model');
const PUBLIC_URL = process.env.PUBLIC_URL;

const InsertStorage = async (req) => {
  const fileData = {
    filename: req.file.filename,
    url: `${PUBLIC_URL}/${req.file.filename}`,
  };
  const resInsert = await StorageModel.create(fileData);
  return resInsert;
};

const GetStorages = async () => {
  const resStorage = await StorageModel.find({});
  return resStorage;
};

const GetStorage = async (id) => {
  const resStorages = await StorageModel.findOne({ _id: id });
  return resStorages;
};

const UpdateStorage = async (id, data) => {
  const resStorages = await StorageModel.findOneAndUpdate(
    {
      _id: id,
    },
    data,
    {
      new: true,
    }
  );
  return resStorages;
};

const DeleteStorage = async (id) => {
  const resStorages = await StorageModel.findOneAndRemove({ _id: id });
  return resStorages;
};
module.exports = {
  InsertStorage,
  GetStorage,
  GetStorages,
  UpdateStorage,
  DeleteStorage,
};
