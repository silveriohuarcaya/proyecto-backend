require("dotenv").config();
const express = require("express");

const app = express();

// middleware
const controller = (req, res, next) => {
  console.log("middleware");
  const { name = "Mundo" } = req.query;

  req.daticahermosa = {
    name: name.toUpperCase(),
  };

  req.query = {
    name: `Hola Amiga ${name}`,
  };
  next();
};
const controller1 = (req, res, next) => {
  console.log("get", req.query);
  console.log(req.daticahermosa);
  const { name = "Mundo" } = req.query;
  res.send(`<h1>Controller1 ${name.toUpperCase()}</h1>`);
};

app.get("/", controller, controller1);
//app.post();
//app.put();
//app.delete();
//app.patch();

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});
