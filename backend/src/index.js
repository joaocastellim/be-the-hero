const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * Rota / Recurso
 */

/**
 * GET: Find an information in back-end
 * POST: Create an information in back-end
 * PUT: Alter an information in back-end
 * DELETE: Delete an information in back-end
 */

/**
 * Paramters types
 * 
 * Query Params: Parâmetros nomeados enviados na rota após o "?" (Filtros, paginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

/**
 * SQL: MySQL, SQLite, PostgresSQL, Oracle, Micosoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 */

app.listen(3333);