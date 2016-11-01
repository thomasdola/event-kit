
const makeHeader = () => ({

    columns: [
        {
            image: '../../public/images/logo.png',
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

    columns: [
        {
            width: 200,
            image: item.image
        },
        {
            text: item.name,
            alignment: 'center'
        },
        {
            text: `GHS ${item.amount}`,
            alignment: 'right'
        }
    ]

});

const orderTotal = amount => ({

    columns: [
        {
            text: 'Total :',
            alignment: 'left'
        },
        {
            text: `${amount}`,
            alignment: 'right'
        }
    ]

});



const generateContent = order => {

    return [...order.map(item => orderRow(item)), orderTotal];

};





const generate = order => {
    return {
        header: makeHeader,
        content: generateContent(order),
        footer: makeFooter
    };
};


module.exports = {
    generate
};