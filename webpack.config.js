var path = require('path');
var webpack = require('webpack');
var WebpackNotifierPlugin = require('webpack-notifier');

module.exports = {
    entry: {
        manage: path.resolve(__dirname, 'spas/manage/app.js'),
        kit: path.resolve(__dirname, 'spas/kit/app.js')
    },
    output: {
        path: path.join(__dirname, 'public/javascripts/spas'),
        filename: '[name].app.js'
    },
    plugins: [
        new WebpackNotifierPlugin(),
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                include: /spas/,
                loader: 'babel-loader'
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};