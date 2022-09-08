const router = require('express').Router();
const {
  addPost, viewPost, getPostData, getAllPosts,
} = require('../controllers');
const { checkToken } = require('../middlewares');
const { createPostPage } = require('../controllers');

router.get('/createPost', checkToken, createPostPage);
router.post('/addPost', checkToken, addPost);
router.get('/post/:id/display', viewPost);
router.get('/post/:id/data', getPostData);
router.get('/posts', getAllPosts);

module.exports = router;
