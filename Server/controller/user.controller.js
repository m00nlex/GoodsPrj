const db = require('../db/db.js')
const ApiError = require('../err/ApiError.js')
class UserController{
    async getUsers(req, res){
        const users = await db.query(`SELECT * FROM users`)
        res.json(users.rows ? users.rows : "nothing is here")

    }
    async getUser(req, res){
        const id = req.params.id
        const user = await db.query(`SELECT * FROM users WHERE id = $1`, [id])
        res.json(user.rows ? user.rows : "nothing is here")
    }

    async registration(req, res){

    }
    async login(req, res){

    }
    async check(req, res, next){
        const {id} = req.query
        if (!id){
            return next(ApiError.badRequest('Не задан ID'))
        }
        res.json(id)
    }
}

module.exports = new UserController()
