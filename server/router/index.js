const router = require('express').Router();
const { checkToken, sendUserData } = require('../middlewares');
const AuthRoutes = require('./auth');
const postsRoutes = require('./posts');
const commentsRoutes = require('./comments');

router.get('/isLogged', checkToken, sendUserData);
router.use(AuthRoutes);
router.use(postsRoutes);
router.use(commentsRoutes);

module.exports = router;
