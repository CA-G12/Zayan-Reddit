const router = require('express').Router();
const { checkToken, sendUserData } = require('../middlewares');
const { getUserData } = require('../controllers');
const AuthRoutes = require('./auth');
const postsRoutes = require('./posts');
const commentsRoutes = require('./comments');

router.use(AuthRoutes);
router.get('/isLogged', checkToken, sendUserData);
router.get('/profileData/:id', getUserData);
router.use(postsRoutes);
router.use(commentsRoutes);

module.exports = router;
