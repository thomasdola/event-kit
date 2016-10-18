var express = require('express');
var router = express.Router();

var data = [
    {
        id: 'akdfjklasdjfks',
        name: 'category one'
    }
]

router.get('/categories', function(req, res, next){
    res.json(data);
});

module.exports = router;