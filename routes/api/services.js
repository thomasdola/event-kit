var express = require('express');
var router = express.Router();

var data = [
    {
        id: 'kdjfaldklfjaslk',
        categoryId: 'akdfjklasdjfks',
        name: 'service one',
        price: 2000
    }
]

router.get(`/:categoryId/services`, function(req, res, next){
    res.json(data);
});

module.exports = router;