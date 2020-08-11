'use strict';

const HtmlWebPackPlugin = require('html-webpack-plugin');
const {transform} = require('@formatjs/ts-transformer');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

const intlTransformer = () => {
  return {
    before: [
      transform({
        extractFromFormatMessageCall: true,
        overrideIdFn: '[sha512:contenthash:base64:6]',
      })
    ]
  }
}

module.exports = {
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.jsx'],
    alias: {
      '@models': path.join(__dirname, './../models/src'),
      '@ui': path.join(__dirname, './../app-ui/src'),
      '@modules': path.join(__dirname, './src/modules'),
      '@form': path.join(__dirname, './../app-ui/src/core/Form')
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
            loader: 'ts-loader',
            options: {
              getCustomTransformers() {
                return intlTransformer()
              }
            }
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
    new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({
      template: path.join(__dirname, '/src/index.html'),
      filename: 'index.html'
    })
  ]
}