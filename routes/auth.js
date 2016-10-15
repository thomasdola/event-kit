var express = require('express');
var router = express.Router();
const passport = require('passport');

/* GET manage/auth/login. */
router.get('/login', function(req, res, next) {
    res.render('auth/login');
});

/* POST manage/auth/login. */
router.post('/login', function(req, res, next){
    passport.authenticate('local', function(err, user, info) {
        console.log("from post login");
        console.log(user);
        if (err) return next(err);
        if (!user){
            return res.redirect('/manage/auth/login');
        }
        req.logIn(user, function(err) {
            if (err) { return next(err); }
            console.log('from login => ' + user._id);
            return res.redirect('/manage/dashboard');
        });
    })(req, res, next);
});

/* GET manage/auth/logout */
router.get('/logout', function(req, res, next) {
    req.logout();
    res.redirect('/manage/auth/login')
});

module.exports = router;