/* eslint-disable no-var */
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var StaticSitePlugin = require('react-static-webpack-plugin');
var webpackBaseConfig = require('./webpack.config.base');

module.exports = Object.assign(webpackBaseConfig, {
  devtool: 'source-map',

  entry: {
    app: ['./client/index.js'],
  },

  output: {
    path: path.join(__dirname, 'public'),
    filename: '[name].js',
    libraryTarget: 'umd',
    publicPath: '/',
  },

  plugins: [
    new ExtractTextPlugin('[name].css', { allChunks: true }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      screw_ie8: true,
      compressor: { warnings: false },
    }),
    new StaticSitePlugin({
      src: 'app',
      stylesheet: '/app.css',
      favicon: '/favicon.ico',
      template: path.join(__dirname, 'index.html.js'),
    }),
  ],
});
