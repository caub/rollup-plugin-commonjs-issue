const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './index-webpack.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'webpack.js'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  }
}
