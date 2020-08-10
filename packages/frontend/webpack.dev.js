'use strict';

const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    // tell webpack all our assets can be get relative to the base path (/)
    publicPath: '/',
    // when requesting a page, the browser sends the server request with that specific url
    // and then throws an error when the path is not found (e.g: refresh when on /course/123 -> 
    // request to /course/213/index.html instead of /index.html)
    // historyApiFallback: true instructs webpack to always get the /index.html file
    historyApiFallback: true,
    port: 3100,
    contentBase: path.join(__dirname, '/src'),
    hot: true
  }
})