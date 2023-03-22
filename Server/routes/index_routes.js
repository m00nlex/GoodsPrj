const Router = require('express')
const router = new Router()
const userRouter = require('./user.routes.js')
const tagRouter = require('./tag.routes.js')

router.use('/tag', tagRouter)
router.use('/user', userRouter)

module.exports = router