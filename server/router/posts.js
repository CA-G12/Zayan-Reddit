const router = require('express').Router();
const { addPost } = require('../controllers');

router.post('/addPost', addPost);


module.exports = router;
