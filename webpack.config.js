const {resolve} = require('path');
const webpack = require('webpack');

module.exports = {
  context: resolve(__dirname, './example'),
  entry: [
    './src/main.js'
  ],
  output: {
    path: resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
}
