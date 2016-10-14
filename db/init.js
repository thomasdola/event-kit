const mongoose = require('mongoose');
const configDB = require('../config/database');

module.exports = function(){
    mongoose.connect(configDB.url);
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
        console.log("we're connected")
    });
};


