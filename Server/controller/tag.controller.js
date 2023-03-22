const db = require('../db/db.js')

class TagController{
    async getTags(req, res){
        const tags = await db.query(`SELECT * FROM tags`)
        res.json(tags.rows)
    }
    async getOneTag(req, res){
        const id = req.params.id
        const tag = await db.query(`SELECT * FROM tags WHERE id = $1`, [id])
        res.json(tag.rows[0])
    }
    async createTag(req, res){
        const {name} = req.body
        const newTag = await db.query(`INSERT INTO tags (name) VALUES ($1) RETURNING *`, [name])
        res.json(newTag.rows)
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
