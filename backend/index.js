const express = require("express");
const app = express();

app.use(express.json());

/**
 * Métodos HTTP
 * 
 * GET: Buscar/listar informação no backend
 * POST: Criar informação no backend
 * PUT: Alterar informação no backend
 * DELETE: Deletar informação no backend
 */

 /**
  * Tipos de parâmetros
  * 
  * Query params: Parâmetros nomiados enviados na rota após "?" (filtros, paginação)
  * Route params: Parâmetros utilizados para identificar recursos
  * Request body: Corpo da requisição, utilizado para criar ou alterar recursos
  */

app.get('/', (request, response) => {
    return response.json({
        evento: 'Semana Omnistack'
    });
});

app.listen(3333);