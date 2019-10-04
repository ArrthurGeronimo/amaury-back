const express = require('express');
const routes = express.Router();

routes.get('/',(req, res) => {
    res.send('URL base da API')
})

const DadosDaEstacaoController = require('./controllers/DadosDaEstacaoController');
routes.get('/dados_da_estacao', DadosDaEstacaoController.index);
routes.get('/dados_da_estacao/:id', DadosDaEstacaoController.show);
routes.post('/dados_da_estacao', DadosDaEstacaoController.store);
routes.put('/dados_da_estacao/:id', DadosDaEstacaoController.update);
routes.delete('/dados_da_estacao/:id', DadosDaEstacaoController.destroy);

module.exports = routes;