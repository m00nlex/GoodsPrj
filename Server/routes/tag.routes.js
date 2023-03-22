const Router = require('express');
const router = new Router();
const tagController = require('../controller/tag.controller.js')

router.post('/createtag', tagController.createTag) // 1. path 2. func
router.delete('/deletetag/:id', tagController.deleteTag)
router.put('/updatetag', tagController.updateTag)
router.get('/gettags', tagController.getTags)
router.get('/gettag/:id', tagController.getOneTag) //get 1 tag on id

module.exports = router;