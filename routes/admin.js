var express = require('express');
var router = express.Router();


router.use(function(req, res, next) {
    res.locals.currentUser = req.user;
    res.locals.errors = req.flash("error");
    res.locals.infos = req.flash("info");
    next();
});

router.get('/dashboard', function(req, res, next){
    res.send("welcome to admin dashboard");
});

module.exports = router;