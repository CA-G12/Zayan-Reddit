const router = require('express').Router();
const { checkToken } = require('../middlewares');
const AuthRoutes = require('./auth');
const postsRoutes = require('./posts');

router.get('/main', checkToken);
router.use(AuthRoutes);
router.use(postsRoutes);

module.exports = router;
