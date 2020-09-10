'use strict'

const millModel = require('../models/Mill')
const _controllerBase = require('../base/ControllerBase')
const controllerBase = new _controllerBase(millModel)

module.exports = {

    post(req, resp) {
        const { name, harvests } = req.body
        controllerBase.post({name, harvests}, resp)        
    },

    get(req, resp) {
        controllerBase.get(resp)
    },

    async getById(req, resp) {
        controllerBase.getById(req, resp)
    },

    async put(req, resp) {
        controllerBase.put(req, resp)
    },

    async delete(req, resp) {
        controllerBase.delete(req, resp)
    }

}