const router = require('express').Router();
const { addComment } = require('../controllers');

router.post('/addComment', addComment);

module.exports = router;
