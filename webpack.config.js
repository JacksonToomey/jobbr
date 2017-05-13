var webpack = require("webpack");
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');


module.exports = {
    entry: {
        "app": "./client/app.jsx",
        vendor: [
            'react',
            'react-dom',
            'react-redux',
            'redux',
            'react-router',
            'react-router-redux',
            'redux-thunk',
            'reselect',
            'prop-types',
            'axios',
            'immutable',
        ]
    },
    output: {
        path: path.join(__dirname, 'static/js'),
        filename: 'main.js',
        sourceMapFilename: 'main.map'
    },
    module: {
        loaders: [
            {
                test : /\.jsx?/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader!sass-loader'})
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new ExtractTextPlugin('../css/style.css'),
        new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.bundle.js' })
    ],
    devtool: '#source-map'
}