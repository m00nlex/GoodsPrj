const db = require('../db/db.js')
const {Tag} = require('../models/models.js')
const ApiError = require('../err/ApiError.js')
class TagController{
    async getTags(req, res){
        const tags = await Tag.findAll()
        res.json(tags.map( tag => {return tag.name}))
    }
    async getOneTag(req, res){
        const id = req.params.id
        const tag = await db.query(`SELECT * FROM tags WHERE id = $1`, [id])
        res.json(tag.rows[0])
    }
    async createTag(req, res){
        const {name} = req.body // = { "name" : "mun" }
        console.log(req.body)
        const newTag = await Tag.create({name})
        return res.json(newTag)
    }
    async updateTag(req, res){
        const {id, name} = req.body
        const tag = await db.query('UPDATE tags SET name = $1 where id = $2 RETURNING *', [name, id])
        res.json(tag.rows[0])
    }
    async deleteTag(req, res){
        const id = req.params.id
        const deleteTag = await db.query('DELETE FROM tags WHERE id = $1 RETURNING *', [id])
        res.send(`${deleteTag} was deleted`)
    }
}

module.exports = new TagController()
