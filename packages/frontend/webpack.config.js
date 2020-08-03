'use strict';


const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
  devServer: {
    // tell webpack all our assets can be get relative to the base path (/)
    publicPath: '/',
    // when requesting a page, the browser sends the server request with that specific url
    // and then throws an error when the path is not found (e.g: refresh when on /course/123 -> 
    // request to /course/213/index.html instead of /index.html)
    // historyApiFallback: true instructs webpack to always get the /index.html file
    historyApiFallback: true,
    port: 3100,
    contentBase: path.join(__dirname, '/src')
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.jsx'],
    alias: {
      '@models': path.join(__dirname, './../models/src'),
      '@ui': path.join(__dirname, './../app-ui/src'),
      '@modules': path.join(__dirname, './src/modules'),
    }
  },
  cache: true,
  entry: path.join(__dirname, '/src/index.tsx'),
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
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
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.join(__dirname, '/src/index.html'),
      filename: 'index.html'
    })
  ]
}