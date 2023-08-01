require('dotenv').config();
const mongoose = require('mongoose');
const { DB_URI } = process.env;

const dbConnect = async () => {
  try {
    if (!DB_URI) throw new Error('DB_URI is not defined in the .env file');
    await mongoose.connect(DB_URI);
  } catch (error) {
    console.log(error);
  }
};

module.exports = dbConnect;
