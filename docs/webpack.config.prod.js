const path = require('path');
const webpack = require('webpack');
const ReactStaticPlugin = require('react-static-webpack-plugin');
const webpackBaseConfig = require('./webpack.config.base');

module.exports = Object.assign(webpackBaseConfig, {
  mode: 'production',
  devtool: 'source-map',

  entry: ['./client/index.js'],

  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].[contenthash].js',
    publicPath: '/',
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new ReactStaticPlugin({
      routes: './client/routes.js',
      template: './template.js',
    }),
  ],
});
