const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins
const path = require('path');

const config = {
  entry: './app/index.js',
  output: {
    filename: 'bundle.js',
    path: './dist'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack2-HtmlWebpackPlugin-example',
      filename: '../index.html'
    }),
    new webpack.optimize.UglifyJsPlugin(),
  ]
}

module.exports = config;
