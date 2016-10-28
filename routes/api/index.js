var express = require('express');
var router = express.Router();

var data = {

    steps: [
        {
            id: 'jfalkdjoadfasdkfjlaksd',
            name: 'step one'
        },
        {
            id: 'jfalkdjoadfasdkfllaksd',
            name: 'step two'
        }
    ],

    categories: [
        {
            id: 'fakkldjkfajsdklfjkasd',
            name: 'party management',
            img: '/images/logo.png',
            stepId: 'jfalkdjoadfasdkfllaksd'
        },
        {
            id: 'fakkldjkfajsdklfjkasr',
            name: 'party management',
            img: '/images/logo.png',
            stepId: 'jfalkdjoadfasdkfjlaksd'
        },
        {
            id: 'fakkldjkfajsdklfjkasz',
            name: 'party management',
            img: '/images/logo.png',
            stepId: 'jfalkdjoadfasdkfjlaksd'
        },
    ],

    services: [
        {
            id: 'kdjfaldklfjaslk',
            categoryId: 'fakkldjkfajsdklfjkasd',
            name: 'service one',
            amount: 1500,
            img: '/images/logo.png',
            fixed: false,
            packages: [
                {
                    amount: 1500,
                    range: [0,50]
                },
                {
                    amount: 3000,
                    range: [51,150]
                },
                {
                    amount: 5000,
                    range: [151,250]
                }
            ]
        },
        {
            id: 'kdjfaldklfjaslu',
            categoryId: 'fakkldjkfajsdklfjkasr',
            name: 'service two',
            amount: 2000,
            img: '/images/logo.png',
            fixed: true,
        },
        {
            id: 'kdjfaldklfjasld',
            categoryId: 'fakkldjkfajsdklfjkasd',
            name: 'service three',
            amount: 2000,
            img: '/images/logo.png',
            fixed: true,
        },
        {
            id: 'kdjfaldkleesld',
            categoryId: 'fakkldjkfajsdklfjkasd',
            name: 'service four',
            amount: 2000,
            img: '/images/logo.png',
            fixed: true,
        },
        {
            id: 'kdjfvvdklfjasld',
            categoryId: 'fakkldjkfajsdklfjkasd',
            name: 'service five',
            amount: 5000,
            img: '/images/logo.png',
            fixed: true,
        },
    ],
    images: [
        {
            id: 'kdjfaldklfjaslk',
            images: ['/images/logo.png', '/images/logo.png', '/images/logo.png', '/images/logo.png']
        }
    ]
};

router.get('/steps', function(req, res){
    res.json(data.steps);
})

router.get('/steps/:stepId/categories', function(req, res){
    const stepId = req.params.stepId;
    res.json(data.categories.filter(category => category.stepId === stepId));
});

router.get('/categories/:categoryId/services', function(req, res, next){
    const categoryId = req.params.categoryId;
    res.json(data.services.filter(service => service.categoryId === categoryId));
});

router.get('/services/:serviceId/images', (req, res) => {
    const serviceId = req.params.serviceId;
    res.json(data.images.filter(service => service.id === serviceId));
})




module.exports = router;