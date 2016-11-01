var express = require('express');
var router = express.Router();
const PdfGenerator = require('../../lib/pdf/pdf');

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
            id: 'kdjfaldkcfjaslk',
            categoryId: 'fakkldjkfajsdklfjkasd',
            name: 'service ten',
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
    ],
    order: {
        total: 200,
        items: [
            {
                name: 'service one',
                image: 'public/images/logo.png',
                amount: 100,
                package: [5, 15] 
            },
            {
                name: 'service two',
                image: 'public/images/logo.png',
                amount: 200,
                package: null 
            }
        ]
    }
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
});

router.get('/services/:serviceId', (req, res) => {
    const serviceId = req.params.serviceId;
    res.json(data.images.filter(service => service.id === serviceId));
});

router.post('/orders', (req, res) => {
    // create `pending` order and send a verfication code to client number, in order to verify her number.
    res.sendStatus(200);
});

router.post('/orders/validate', (req, res) => {
    //verify the phone number by matching the code sent to the number to the received
    // if they match change the order status to `new`
    res.sendStatus(200);
});

router.post('/orders/retry', (req, res) => {
    //send a new verfication code to phone number
    res.sendStatus(200);
});

router.post('/pdfs', (req, res) => {
    // generate a pdf of the order data sent in
    PdfGenerator.generate(data.order);
    res.sendStatus(200);
});




module.exports = router;