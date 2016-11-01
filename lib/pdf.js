const fonts = {
    Lato: {
        bold: '../public/stylesheets/fonts/Lato-Bold.ttf',
        normal: '../public/stylesheets/fonts/Lato-Regular.ttf',
        light: '../public/stylesheets/fonts/Lato-Light.ttf',
        italic: '../public/stylesheets/fonts/Lato-Italic.ttf'
    }
};

const PdfPrinter = require('../node_modules/pdfmake/src/printer');
const printer = new PdfPrinter(fonts);
const fs = require('fs');
const OrderPdf = require('./pdf/order');
const ServerOrderPdf = require('./pdf/order-server');

const pdfOrder = (order, admin = false) => {
    const pdfDocSpec = admin 
        ? ServerOrderPdf.generate(order)
        : OrderPdf.generate(order); 

    const pdfDoc = printer.createPdfKitDocument(pdfDocSpec);
    pdfDoc.pipe(fs.createWriteStream('pdfs/order.pdf'));
    pdfDoc.end();
};

module.exports = {
    generate: pdfOrder
}

