/* eslint-disable no-var */
var autoprefixer = require('autoprefixer');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.css$/, loader: 'style-loader!css-loader!postcss-loader' },
    ]
  },
  postcss: [autoprefixer({ browsers: ['> 1%'] })],
};
