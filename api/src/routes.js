const express = require('express');
const person = require('./controllers/personController');
// const animal = require('./controllers/animalController');
const routes = express.Router();

routes.get('/', function (req, res) {
  res.send('Im working here');
});

// People routes;

routes.get('/people', person.index);
routes.post('/people', person.post);
routes.get('/people/:id', person.find);
routes.put('/people/:id', person.put);
routes.delete('/people/:id', person.delete);

// Animals routes;

// routes.get('/animals', animal.index);
// routes.post('/animals', animal.post);
// routes.get('/animals/:id', animal.find);
// routes.put('/animals/:id', animal.put);
// routes.delete('/animals/:id', animal.delete);

module.exports = routes;
