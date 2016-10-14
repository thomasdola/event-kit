module.exports = function authenticationMiddleware () {
    return function (req, res, next) {
        console.log("Authenticated ? => " + req.isAuthenticated());
        console.log(req.user);
        if (req.isAuthenticated()) {
            return next();
        }else {
            req.flash("info", "You must be logged in to access the request page");
            res.redirect('/manage/auth/login');
        }
    }
};