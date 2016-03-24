/* eslint-disable no-var */
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');

module.exports = {
  devtool: 'source-map',

  entry: {
    index: ['./src/index.js'],
  },

  output: {
    path: path.join(__dirname, 'lib'),
    filename: '[name].js',
    libraryTarget: 'commonjs2',
    publicPath: '/',
  },

  resolve: {
    extensions: ['', '.js'],
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: [
          path.join(__dirname, 'src'),
        ],
      }, {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[local]___[hash:base64:5]!postcss-loader'),
        include: [
          path.join(__dirname, 'src'),
        ],
      },
    ],
  },
  postcss: [autoprefixer({ browsers: ['> 1%'] })],

  plugins: [
    new ExtractTextPlugin('plugin.css', { allChunks: true }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),

    // new webpack.optimize.UglifyJsPlugin({
    //   screw_ie8: true,
    //   compressor: { warnings: false },
    // }),
  ],
};
