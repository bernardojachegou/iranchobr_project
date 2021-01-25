const express = require("express");
const routes = express.Router();

const Person = require("./personRoutes");
const Animal = require("./animalRoutes");
const Batch = require("./batchRoutes");
const Register = require("./registerRoutes");

routes.get("/", function (req, res) {
  res.send("Im working here");
});

Person(routes);
Animal(routes);
Batch(routes);
Register(routes);

module.exports = routes;
