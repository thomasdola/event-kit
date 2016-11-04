const path = require('path');
const dataUri = require('data-uri');

const fontsLato = {
    Lato: {
        bold: path.resolve(__dirname, 'public/stylesheets/fonts/Lato-Bold.ttf'),
        normal: path.resolve(__dirname, 'public/stylesheets/fonts/Lato-Bold.ttf'),
        light: path.resolve(__dirname, 'public/stylesheets/fonts/Lato-Light.ttf'),
        italic: path.resolve(__dirname, 'public/stylesheets/fonts/Lato-Italic.ttf')
    }
};

const fonts = {
	Roboto: {
		normal: 'fonts/Roboto-Regular.ttf',
		bold: 'fonts/Roboto-Medium.ttf',
		italics: 'fonts/Roboto-Italic.ttf',
		bolditalics: 'fonts/Roboto-Italic.ttf'
	}
};

const PdfPrinter = require('../../node_modules/pdfmake/src/printer');
const printer = new PdfPrinter(fonts);
const fs = require('fs');
const OrderPdf = require('./order');
const ServerOrderPdf = require('./order-server');

const convertImages = order => {
    
};

const pdfOrder = (order, admin = false) => {
    const pdfDocSpec = admin 
        ? ServerOrderPdf.generate(order)
        : OrderPdf.generate(order); 

    const pdfDoc = printer.createPdfKitDocument(pdfDocSpec);
    pdfDoc.pipe(fs.createWriteStream(`pdfs/order_${Math.random()}_print.pdf`));
    pdfDoc.end();
    
};

module.exports = {
    generate: pdfOrder
}

