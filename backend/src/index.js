const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const app = express();
app.use(cors());
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

app.use(routes);
app.listen(3333);