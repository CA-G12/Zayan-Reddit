const router = require('express').Router();
const { checkToken, sendUserData } = require('../middlewares');
const AuthRoutes = require('./auth');
const postsRoutes = require('./posts');

router.get('/isLogged', checkToken, sendUserData);
router.use(AuthRoutes);
router.use(postsRoutes);

module.exports = router;
