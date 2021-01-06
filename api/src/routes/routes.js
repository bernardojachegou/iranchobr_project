const express = require('express');
const routes = express.Router();

const Person = require('./peopleRoutes');
const Animal = require('./animalRoutes');

routes.get('/', function (req, res) {
  res.send('Im working here');
});

Person(routes);
Animal(routes);

module.exports = routes;
