//importando blibliotecas
const express = require('express');

const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

//** '.send' envia um texto, '.json' uma estrutura json
//método post, róta assíncrona

//objeto para gerenciar rotas
const routes = express.Router();

routes.get('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

routes.get('/profile', ProfileController.index);


//
// // routes.get('/ongs', async (request, response) => {
// //     const ongs = await connection('ongs').select('*');
// //     return response.json(ongs);
// // })

//exportando as rotas para chamada
module.exports = routes;