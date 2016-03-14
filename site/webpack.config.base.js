var path = require('path'); // eslint-disable-line no-var
var ExtractTextPlugin = require('extract-text-webpack-plugin'); // eslint-disable-line no-var
var autoprefixer = require('autoprefixer'); // eslint-disable-line no-var

module.exports = {
  output: {
    path: path.join(__dirname, 'static'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  resolve: {
    alias: {
      'draft-js-plugin-editor': path.join(__dirname, '..', 'src', 'pluginEditor'),
      'draft-js-hashtag-plugin': path.join(__dirname, '..', 'src', 'hashtagPlugin'),
      'draft-js-sticker-plugin': path.join(__dirname, '..', 'src', 'stickerPlugin'),
      'draft-js-linkify-plugin': path.join(__dirname, '..', 'src', 'linkifyPlugin'),
      'draft-js-mention-plugin': path.join(__dirname, '..', 'src', 'mentionPlugin'),
      'draft-js-history-plugin': path.join(__dirname, '..', 'src', 'historyPlugin'),
      react: path.join(__dirname, 'node_modules', 'react'),
    },
    extensions: ['', '.js'],
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: /node_modules/,
        include: __dirname,
      }, {
        test: /\.js$/,
        loaders: ['babel'],
        include: path.join(__dirname, '..', 'src'),
      }, {
        test: /\.css/,
        loader: ExtractTextPlugin.extract('style', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader'),
        include: [
          path.join(__dirname, '..', 'src'),
          path.join(__dirname, 'components'),
        ],
      },
    ],
  },
  postcss: [autoprefixer({ browsers: ['> 1%'] })],
};
