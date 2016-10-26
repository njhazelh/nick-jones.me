/*global require module __dirname */

var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var path = require('path');
require('webpack');

module.exports = {
    entry: './main.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            },
            {
                test: /\.html$/,
                loader: 'html'
            },
            {
                test: /\.png$/,
                loader: 'url-loader?prefix=img/&limit=5000'
            },
            {
                test: /\.jpg$/,
                loader: 'url-loader?prefix=img/&limit=5000'
            },
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=5000&prefix=font/&mimetype=application/font-woff'
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=5000&prefix=font/&mimetype=application/octet-stream'
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file'
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=5000&mimetype=image/svg+xml'
            }
        ]
    },
    preloaders: [
        {
            test: /\.js$/,
            include: pathToRegExp(path.join(__dirname, 'src')),
            loader: 'eslint-loader'
        }
    ],
    plugins: [
        new CleanWebpackPlugin(['dist'], {
            root: __dirname,
            verbose: true,
            dry: false,
        }),
        new HtmlWebpackPlugin({
            title: 'Home | Nick Jones',
            inject: 'body',
            template: 'src/templates/index.html',
            favicon: 'src/img/favicon.png'
        })
    ]
};

function escapeRegExpString(str) {
    return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
}
function pathToRegExp(p) {
    return new RegExp('^' + escapeRegExpString(p));
}
