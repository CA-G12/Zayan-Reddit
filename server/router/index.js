const router = require('express').Router();
const { checkToken } = require('../middlewares');
const AuthRoutes = require('./auth');

router.get('/main', checkToken);
router.use(AuthRoutes);

module.exports = router;
