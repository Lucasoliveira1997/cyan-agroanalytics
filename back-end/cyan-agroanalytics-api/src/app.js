const app = require('express')()
const bodyParser = require('body-parser')

//Inicialização do banco de dados
require('../src/database/index')

//Importando as rotas
const millsRoute = require('./routes/mills.routes')

//middlewares aplicados a qualquer rota usada na aplicação
app.use(bodyParser.json())

//Inicializando as Rotas
app.use('/mills', millsRoute)

module.exports = app