const express = require('express');

const routes = express.Router();

const Usuario = require ('./controllerscontroller/usuarios.controller')

routes.get('/',Usuario.index);

 // rotas de usuarios 
routes.post('/api/usuarios',Usuario.create);
routes.get('/api/usuarios',Usuario.index);
routes.get('/api/usuarios.details',Usuarios.details);
routes.delete('/api/usuarios/:_id',Usuarios.delete);
routes.put('/api/usuarios',Usuario.update);


module.exports = routes;