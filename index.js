const express = require("express");
const cors = require("cors");
const { send } = require("express/lib/response");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hi From genuise Car");
});
