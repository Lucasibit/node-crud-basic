const express = require('express');
const controllerProduto = require('./controllers/ProdutoController');

const routes = express.Router();

routes.get('/list', controllerProduto.List);

routes.post('/create', controllerProduto.Create);

routes.post('/update', controllerProduto.Update);

routes.post('/delete', controllerProduto.Delete);

routes.get('/list/:id', controllerProduto.GetOne);

module.exports = routes;