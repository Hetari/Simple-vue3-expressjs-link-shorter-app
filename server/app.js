const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser"); //use to parse incoming request bodies
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/authRoutes");

const services = require("./routes/service");
const db = require("./data/db");
const url_db = require("./data/url");
const { async } = require("validate.js");

// Load environment variables from .env file
dotenv.config();

// Port and host
const port = process.env.APP_PORT || 3000;
const host = process.env.APP_HOST || "localhost";

// Set up the Cors options
const corsOptions = {
  origin: "http://localhost:8080",
  optionsSuccessStatus: 200,
};

// creating the app
const app = express();
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());

// Endpoints
app.get("/", async (req, res) => {
  // const all_urls = await db.GetAllUrls();
  // res.send(all_urls);
  res.send("Hello world");
});

app.post("/short/:url", async (req, res) => {
  const url = req.body.url;
  try {
    if (!services.validateUrl(url)) {
      return res.status(400).send({
        msg: "Invalid URL...",
      });
    }
    const url_key = services.generateShortUrl();
    const short_url = `http://${host}:${port}/${url_key}`;

    console.log(short_url);
    res.status(200).send(short_url);
    // const result = await db.CreateUrl(url, short_url);
    // if (result) return
    // else throw new Error("An error occurred while creating the URL.");
  } catch (error) {
    return res.status(500).send({ msg: "Error. Please try again." });
  }
});

app.use(authRoutes);

app.listen(port, (err) => {
  if (err) {
    console.error("Error starting server: ", err);
  } else {
    console.log("Server started on port: ", port);
  }
});
