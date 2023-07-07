import app from './src/app';
import dbConnect from './src/config/mongo';
const { PORT } = process.env;

dbConnect().then(() => {
  console.log('Successful connection to the database ✅✅');
  app.listen(PORT, () => console.log(`Listening in Port ${PORT} 💥💥`));
});
