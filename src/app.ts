import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import cookieParser from "cookie-parser";
import { router } from "./routes";

const { PORT } = process.env;

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);
app.use(cookieParser());
app.use(cors({
    origin: ['*'] // all domains are allowed
}));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});


app.listen(PORT, () => console.log(`Listening in Port ${PORT} 💥💥`));