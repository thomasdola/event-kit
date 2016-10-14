var mongoose = require('mongoose');
const configDB = require('../../config/database');
mongoose.connect(configDB.url);
mongoose.Promise = global.Promise;
var User = require('../models/user');
var Role = require('../models/role');
const roleConstants = require('../constants');

/*seeding roles*/
var adminRole = new Role({name: roleConstants.ADMIN});
var staffRole = new Role({name: roleConstants.STAFF});
var roles = [adminRole, staffRole];
roles.forEach(function(role){
    role.save(function(err){
        if(err) throw err;
        console.log('roles created!')
    })
});

/*seeding admin*/
var adminUser = new User({
    name: 'Event Admin',
    username: 'admin',
    password: 'admin',
    role: roleConstants.ADMIN
});
adminUser.save(function(err){
    if(err) throw err;
    console.log('main admin created!');
});
