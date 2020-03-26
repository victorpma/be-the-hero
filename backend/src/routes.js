const express = require('express');
const routes = express.Router();

const ongController = require('./controllers/OngController');

routes.get('/ongs', ongController.list);
routes.post('/ongs', ongController.create);

module.exports = routes;