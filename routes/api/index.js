var express = require('express');
var router = express.Router();

var data = {

    categories: [
        {
            id: 'fakkldjkfajsdklfjkasd',
            name: 'party management',
            img: '/images/logo.png'
        },
        {
            id: 'fakkldjkfajsdklfjkasr',
            name: 'party management',
            img: '/images/logo.png'
        },
        {
            id: 'fakkldjkfajsdklfjkasz',
            name: 'party management',
            img: '/images/logo.png'
        },
    ],

    services: [
        {
            id: 'kdjfaldklfjaslk',
            categoryId: 'fakkldjkfajsdklfjkasd',
            name: 'service one',
            amount: 2000,
            img: '/images/logo.png'
        },
        {
            id: 'kdjfaldklfjaslu',
            categoryId: 'fakkldjkfajsdklfjkasr',
            name: 'service two',
            amount: 2000,
            img: '/images/logo.png'
        },
        {
            id: 'kdjfaldklfjasld',
            categoryId: 'fakkldjkfajsdklfjkasd',
            name: 'service three',
            amount: 2000,
            img: '/images/logo.png'
        },
    ]
};

router.get('/categories/:categoryId/services', function(req, res, next){
    const categoryId = req.params.categoryId;
    res.json(data.services.filter(service => service.categoryId === categoryId));
});

router.get('/categories', function(req, res){
    res.json(data.categories);
});

module.exports = router;