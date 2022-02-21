import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from 'dotenv';

import { connectDB } from "./db/mongoConnection.js";
import postRouter from './routes/router.js';

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

dotenv.config({ path: "config.env" });
const PORT = process.env.PORT || 8080;

connectDB()

app.use('/products', postRouter)

app.listen(PORT, () =>
  console.log(`server is running on http://localhost:${PORT}`)
);