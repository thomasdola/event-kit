var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        manage: path.resolve(__dirname, 'spas/manage/app.js'),
        kit: path.resolve(__dirname, 'spas/kit/app.js')
    },
    output: {
        path: path.join(__dirname, 'public/javascripts/spas'),
        filename: '[name].app.js'
    },
    watch: true,
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                include: /spas/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};