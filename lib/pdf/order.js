
const makeHeader = () => ({

    columns: [
        {
            image: 'public/images/logo.png',
            width: 100,
            alignment: 'center'
        }
    ]

});

const makeFooter = (currentPage, pageCount) => ({

    columns: [
        {
            text: 'Compony Name',
            alignment: 'left'
        },
        {
            text: `${currentPage.toString()} of ${pageCount}`,
            alignment: 'right'
        }
    ]

});

const orderRow = item => ({

    stack: [
                {
                    image: item.image,
                    width: 200
                },
                {
                    text: item.name
                },
                {
                    text: `GHS ${item.amount}`
                }
            ],
            width: '*'

});

const orderTotal = amount => ({

    columns: [
        {
            text: 'Total :',
            alignment: 'center'
        },
        {
            text: `${amount}`,
            alignment: 'right'
        }
    ]

});



const generateContent = order => {

    const items = {
        columns: [...order.items.map(item => orderRow(item))]
    };

    return [items, orderTotal(order.total)];

};





const generate = order => {
    return {
        header: function(){
            return {
                columns: [
                    {
                        image: 'public/images/logo.png',
                        alignment: 'center'
                    }
                ]
            };
        },

        content: generateContent(order),

        footer: function(currentPage, pageCount){

            return {
                columns: [
                    {
                        text: 'Compony Name',
                        alignment: 'left'
                    },
                    {
                        text: `${currentPage.toString()} of ${pageCount}`,
                        alignment: 'right'
                    }
                ]
            }

        }
    };
};


module.exports = {
    generate
};