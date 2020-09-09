'use strict'

const millModel = require('../models/Mill')

module.exports = {

    async post(req, resp) {
        try {
            console.log(req.body)
            
            const { name, harvests } = req.body

            const mill = await millModel.create({ name, harvests })

            resp.status(201).json(mill)

        } catch (error) {
            // console.log(error)
            resp.status(400).json({ error:'Error while inserting a new Mill' })
        }
    },

    async get(req, resp) {
        try {
            const mills = await millModel.findAll({})

            resp.status(200).json(mills)

        } catch (error) {
            resp.status(400).json({ error:'Error while searching for Mills' })
        }
    },

    async getById(req, resp) {
        try {
            console.log(req.params.id)
            const mill = await millModel.findOne({ where: {id: req.params.id} })

            resp.status(200).json(mill)
            
        } catch (error) {
            resp.status(400).json({ error:'Error while searching for a specific Mill' })
        }
    },

    async put(req, resp) {
        const millUpdated = await millModel.update()
    }

}