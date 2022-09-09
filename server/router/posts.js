const router = require('express').Router();
const {
  addPost, viewPost, getPostData, getAllPosts,
} = require('../controllers');
const { checkToken } = require('../middlewares');
const { createPostPage, getPostComments } = require('../controllers');

router.get('/createPost', checkToken, createPostPage);
router.post('/addPost', checkToken, addPost);
router.get('/post/:id/display', viewPost);
router.get('/post/:id/data', getPostData);
router.get('/post/:id/comments', getPostComments);
router.get('/posts', getAllPosts);

module.exports = router;
