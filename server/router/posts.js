const router = require('express').Router();
const { addPost, viewPost } = require('../controllers');
const { checkToken } = require('../middlewares');
const { createPostPage } = require('../controllers');

router.get('/createPost', checkToken, createPostPage);
router.post('/addPost', addPost, viewPost);

module.exports = router;
