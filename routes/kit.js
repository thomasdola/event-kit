var express = require('express');
var router = express.Router();

/* GET Wedding. */
router.get('/wedding', function(req, res, next) {
    res.send('respond with a resource');
});

/* GET Party. */
router.get('/party', function(req, res, next) {
    res.send('respond with a resource');
});

/* GET Funeral. */
router.get('/funeral', function(req, res, next) {
    res.send('respond with a resource');
});

module.exports = router;