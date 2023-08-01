const app = require('./src/app');
const dbConnect = require('./src/config/mongo');

const { PORT } = process.env;

dbConnect().then(() => {
  console.log('Successful connection to the database ✅✅');
  app.listen(PORT, () => console.log(`Listening in Port ${PORT} 💥💥`));
});
