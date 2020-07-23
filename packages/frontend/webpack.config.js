'use strict';

// vezi aci
// https://github.com/TypeStrong/ts-loader/blob/master/examples/react-babel-karma-gulp/webpack.config.prod.js
const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  devServer: {
    port: 3100,
    contentBase: path.join(__ddsadsairname, '/src')
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.jsx'],
    alias: {
      // empty for now
    }
  },
  cache: true,
  entry: path.join(__dirname, '/src/index.tsx'),
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.(tsx|ts)?$/,
        use: [
          {
            loader: 'babel-loader'
          },
          {
            loader: 'ts-loader'
          }
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.html/,
        use: 'html-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.join(__dirname, '/src/index.html'),
      filename: 'index.html'
    })
  ]
}