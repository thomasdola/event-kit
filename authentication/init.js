const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../db/models/user');

module.exports = function(){
    passport.serializeUser(function(user, done) {
        console.log('from  serial => ' + user);
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            console.log('from derial => ' + user);
            done(err, user);
        });
    });

    passport.use(new LocalStrategy(
        function(username, password, done) {
            User.findOne({ username: username }, function(err, user) {
                if (err) { console.log('erororro'); return done(err); }
                if (!user) {
                    console.log('error 1');
                    return done(null, false, { message: 'Incorrect username.' });
                }
                user.validPassword(password, function(err, isValid){
                    console.log(isValid);
                    if(!isValid) return done(null, false, { message: 'Incorrect password.' });
                    return done(null, user);
                });
            });
        }
    ));
};
