'use strict';

// Modules
var path = require('path')
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractLess = new ExtractTextPlugin({
  filename: "index.min.css"
});

module.exports = {
  entry: './src/index.js',
  devtool: 'none',
  plugins: [
    extractLess,
    new webpack.LoaderOptionsPlugin({
      test: /\.css|less$/,
      minimize: true,
      debug: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      output: {
        comments: false
      }
    })
  ],
  output: {
    path: __dirname + '/dist',
    publicPath: './',
    filename: 'index.min.js'
  },
  module : {
    rules: [
    {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: [/node_modules/]
    },
    {
      test: /\.html$/,
      use: [{
        loader: 'html-loader',
        options: {
          minimize: true,
          removeComments: true,
          collapseWhitespace: true
        }
      }]
    },
    {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [{
          loader: 'css-loader',
          options: {
            sourceMap: true
          }
        }]
      })
    },
    {
      test: /\.less$/,
      use: extractLess.extract({
        use: [
          'css-loader',
          {
            loader: 'less-loader',
            options: {
              sourceMap: true
            }
          }
        ],
        fallback: "style-loader"
      })
    }]
  }
}

