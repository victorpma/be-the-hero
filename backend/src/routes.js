const express = require('express');
const routes = express.Router();

const ongController = require('./controllers/OngController');
const incidentController = require('./controllers/IncidentController');
const profileController = require('./controllers/ProfileController');
const sessionController = require('./controllers/SessionController');

routes.get('/ongs', ongController.list);
routes.post('/ongs', ongController.create);

routes.get('/incidents', incidentController.list);
routes.post('/incidents', incidentController.create);
routes.delete('/incidents/:id', incidentController.delete);

routes.get('/profile', profileController.index);

routes.post('/session', sessionController.signIn);

module.exports = routes;