'use strict';

// Modules
var path = require('path')
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractLess = new ExtractTextPlugin({
  filename: "[hash].css"
});

module.exports = {
  entry: './src/index.js',
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'h5 webpack优化版',
      template: './index.html',
      inject: 'body',
    }),
    extractLess
  ],
  output: {
    filename: '[name].js'
  },
  devServer: {
    contentBase: './',
    stats: 'minimal',
    historyApiFallback: true,
    hot: true,
    port: 3000
  },
  module : {
    rules: [
    {
      enforce: 'pre',
      test: /\.js$/,
      loader: 'eslint-loader',
      query: {
        esModules: true
      }
    },
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

