const db = require('../db/db.js')

class UserController{
    async getUsers(req, res){
        const users = await db.query(`SELECT * FROM users`)
        if (users.rows){
            res.json(users.rows)
        } else {
            res.json('nothing')
        }
    }
    async getUser(req, res){
        const id = req.params.id
        const user = await db.query(`SELECT * FROM users WHERE id = $1`, [id])
        res.json(user.rows)
    }

}

module.exports = new UserController()
