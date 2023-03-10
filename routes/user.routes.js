const {Router} = require('express');
const router = Router();
const userController = require('../controller/user.controller')

router.post('/create', userController.createTag) // 1. path 2. func
router.delete('/delete/:id', userController.deleteTag)
router.put('/update', userController.updateTag)
router.get('/get', userController.getTags)
router.get('/get/:id', userController.getOneTag) //get 1 tag on id

module.exports = router; //???????????????????????????