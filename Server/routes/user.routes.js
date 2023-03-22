const Router = require('express');
const router = new Router();
const userController = require('../controller/user.controller.js')


router.get('/getusers', userController.getUsers)
router.get('/getuser/:id', userController.getUser)
router.post('/login', userController.login)
router.post('/registration', userController.registration)
router.get('/auth', userController.check)

module.exports = router;