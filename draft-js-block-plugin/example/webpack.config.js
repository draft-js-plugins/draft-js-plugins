
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var plugins = [];

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
  plugins: plugins
};
