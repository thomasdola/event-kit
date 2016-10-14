var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');
const saltRounds = 10;

var userSchema = new Schema({
    name: {type: String, required: true},
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    role: {type: String, required: true},
    created_at: {type: Date},
    updated_at: {type: Date}
});

userSchema.pre('save', function (done) {
    var user = this;
    if(!user.isModified("password")) return done();
    /*hash password*/
    var userPlainPassword = user.password;
    bcrypt.hash(userPlainPassword, saltRounds, function(err, hash) {
        if(err) return done(err);
        // Store hash in your password DB.
        user.password = hash;
        done();
    });
});

userSchema.pre('save', function(done){
    /*insert timestamps*/
    var currentDate = Date.now();
    this.updated_at = currentDate;
    if(!this.created_at) this.created_at = currentDate;
    done();
});

userSchema.methods.validPassword = function(password, done){
    var hash = this.password;
    bcrypt.compare(password, hash, function(err, isMatch){
        done(err, isMatch);
    });
};

var User = mongoose.model('User', userSchema);

module.exports = User;