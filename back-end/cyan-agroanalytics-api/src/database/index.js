const Sequelize = require('sequelize')
const config = require('../config/database')

//importando modelos de banco de dados passando como parâmetro a instancia do Sequelize
const Mill = require('../models/Mill')

const connection = new Sequelize(config)

Mill.init(connection)

module.exports = connection