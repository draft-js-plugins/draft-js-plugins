var webpack = require('webpack'); // eslint-disable-line no-var
var ExtractTextPlugin = require('extract-text-webpack-plugin'); // eslint-disable-line no-var
var webpackBaseConfig = require('./webpack.config.base'); // eslint-disable-line no-var

module.exports = Object.assign(webpackBaseConfig, {
  entry: [
    './index',
  ],
  plugins: [
    new ExtractTextPlugin('css/bundle.css', { disable: true }),
    new webpack.optimize.UglifyJsPlugin({ minimize: true }),
  ],
});
