// require("dotenv").config();
// const express = require("express");
//const morgan = require("morgan");
//const routesConfig = require("./routes");

import "dotenv/config";
import express from "express";

import routesConfig from "./routes.js";
import configExpress from "./config/express.js";
import connectDatabase from "./config/database.js";

const app = express();

// Configure express
configExpress(app);

// Connect to database
connectDatabase();

// Configure routes
routesConfig(app);

//app.post("/api/people", (req, res) => {
//const { name } = req.body;
// res.json(req.body);
//});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});
