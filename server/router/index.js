const router = require('express').Router();
const { checkToken, sendUserData } = require('../middlewares');
const {createPostPage} = require('../controllers')
const AuthRoutes = require('./auth');
const postsRoutes = require('./posts');

router.get('/main', checkToken, sendUserData);
router.use(AuthRoutes);
router.use(checkToken, postsRoutes);

module.exports = router;
