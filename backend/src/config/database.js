require('dotenv').config();
const { connect } = require('mongoose');
const { DB_URI } = process.env;

const dbConnect = async () => {
  try {
    if (!DB_URI) throw new Error('DB_URI is not defined in the .env file');
    await connect(DB_URI);
    console.log(`Connected to database successfully`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = dbConnect;
