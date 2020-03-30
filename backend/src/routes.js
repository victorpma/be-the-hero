const express = require('express');
const routes = express.Router();

const ongController = require('./controllers/OngController');
const incidentController = require('./controllers/IncidentController');
const profileController = require('./controllers/ProfileController');
const sessionController = require('./controllers/SessionController');

const sessionCreateValidator = require('./validators/Session/sessionCreateValidator');
const ongCreateValidator = require('./validators/Ongs/ongCreateValidator');
const profileGetValidator = require('./validators/Profile/profileGetValidator');
const incidentsListValidator = require('./validators/Incidents/incidentsListValidator');
const incidentsDeleteValidator = require('./validators/Incidents/incidentsDeleteValidator');

routes.post('/session', sessionCreateValidator, sessionController.signIn);

routes.get('/ongs', ongController.list);
routes.post('/ongs', ongCreateValidator, ongController.create);

routes.get('/incidents', incidentsListValidator, incidentController.list);
routes.post('/incidents', incidentController.create);
routes.delete('/incidents/:id', incidentsDeleteValidator, incidentController.delete);

routes.get('/profile', profileGetValidator, profileController.index);

module.exports = routes;