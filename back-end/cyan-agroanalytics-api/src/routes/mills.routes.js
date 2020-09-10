'use strict'

const route = require('express').Router()

const _ctrl = require('../controllers/MillsController')

route.post('/', _ctrl.post)
route.get('/', _ctrl.get)
route.get('/:id', _ctrl.getById)
route.put('/:id', _ctrl.put)
route.delete('/:id', _ctrl.delete)

module.exports = route