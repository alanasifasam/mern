const express = require('express');

const routes = express.Router();

const Usuario = require ('./controllers/usuarios.controller')
const Produto = require ('./controllers/produtos.controller')


routes.get('/',Usuario.index);

 // rotas de usuarios 
routes.post('/api/usuarios',Usuario.create);
routes.get('/api/usuarios',Usuario.index);
routes.get('/api/usuarios.details:_id',Usuario.details);
routes.delete('/api/usuarios/:_id',Usuario.delete);
routes.put('/api/usuarios',Usuario.update);
 
// rotas de produtos

routes.post('/api/produto',Produto.create);
routes.get('/api/produto',Produto.index);
routes.get('/api/produto.details:_id',Produto.details);
routes.delete('/api/produto/:_id',Produto.delete);
routes.put('/api/produto',Produto.update);

module.exports = routes;