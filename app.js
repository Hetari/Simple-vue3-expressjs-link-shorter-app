import express from "express";
import helmet from "helmet";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser"; //use to parse incoming request bodies

import services from "./routes/service";
import db from "./data/db";
import urlDb from "./data/url";

// Load environment variables from .env file
dotenv.config();

// Port and host
const port = process.env.PORT || 3000;
const host = process.env.HOST || "localhost";

// Set up the Cors options
const corsOptions = {
  origin: "http://localhost:8080",
  optionsSuccessStatus: 200,
};

// creating the app
const app = express();
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(helmet);
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(port, () => {
  console.log("listening port ", port);
});
