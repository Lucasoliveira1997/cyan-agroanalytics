'use strict'

class ControllerBase {
    constructor(model) {
        this.model = model
    }

    async post(data, resp) {
        try {            
            const created = await this.model.create(data)
            resp.status(201).json(created)
        } catch (error) {
            console.log(error)
            resp.status(400).json({ error:'Error while inserting a new Mill' })
        }
    }

    async get(resp) {
        try {
            const items = await this.model.findAll({})

            resp.status(200).json(items)

        } catch (error) {
            resp.status(400).json({ error:'Error while searching for Mills' })
        }
    }

    async getById(req, resp) {
        try {
            const item = await this.model.findOne({ where: {id: req.params.id} })
            resp.status(200).json(item)
            
        } catch (error) {
            resp.status(400).json({ error:'Error while searching for a specific Mill' })
        }
    }

    async put(req, resp) {
        try {
            const updated = await this.model.update(
                {name: req.body.name}, 
                {where: {id: req.params.id}}
            )
            resp.status(202).json(updated)            
        } catch (error) {
            resp.status(400).json({ error:'Error while updating a Mill' })
        }
    }

    async delete(req, resp) {
        try {
            await this.model.destroy({where: {id: req.params.id}})
            resp.send(204)
        } catch (error) {
            resp.status(400).json({ error:'Error while removing a Mill' })
        }
    }
}

module.exports = ControllerBase