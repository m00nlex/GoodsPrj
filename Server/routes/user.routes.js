const Router = require('express');
const router = new Router();
const userController = require('../controller/user.controller.js')

router.post('/tag', userController.createTag) // 1. path 2. func
router.delete('/tag/:id', userController.deleteTag)
router.put('/tag', userController.updateTag)
router.get('/tag', userController.getTags)
router.get('/tag/:id', userController.getOneTag) //get 1 tag on id

module.exports = router; //???????????????????????????