var path = require('path'); // eslint-disable-line no-var
var ExtractTextPlugin = require('extract-text-webpack-plugin'); // eslint-disable-line no-var
var autoprefixer = require('autoprefixer'); // eslint-disable-line no-var

module.exports = {
  resolve: {
    alias: {
      'draft-js-plugins-editor': path.join(__dirname, '..', 'draft-js-plugins-editor', 'src'),
      'draft-js-hashtag-plugin': path.join(__dirname, '..', 'draft-js-hashtag-plugin', 'src'),
      'draft-js-linkify-plugin': path.join(__dirname, '..', 'draft-js-linkify-plugin', 'src'),
      'draft-js-mention-plugin': path.join(__dirname, '..', 'draft-js-mention-plugin', 'src'),
      'draft-js-sticker-plugin': path.join(__dirname, '..', 'draft-js-sticker-plugin', 'src'),
      'draft-js-undo-plugin': path.join(__dirname, '..', 'draft-js-undo-plugin', 'src'),
      'draft-js-emoji-plugin': path.join(__dirname, '..', 'draft-js-emoji-plugin', 'src'),
      'draft-js-counter-plugin': path.join(__dirname, '..', 'draft-js-counter-plugin', 'src'),
      'draft-js-dnd-plugin': path.join(__dirname, '..', 'draft-js-dnd-plugin', 'src'),
      'draft-js-inline-toolbar-plugin': path.join(__dirname, '..', 'draft-js-inline-toolbar-plugin', 'src'),
      'draft-js-side-toolbar-plugin': path.join(__dirname, '..', 'draft-js-side-toolbar-plugin', 'src'),
      'draft-js-focus-plugin': path.join(__dirname, '..', 'draft-js-focus-plugin', 'src'),
      'draft-js-alignment-plugin': path.join(__dirname, '..', 'draft-js-alignment-plugin', 'src'),
      'draft-js-image-plugin': path.join(__dirname, '..', 'draft-js-image-plugin', 'src'),
      'draft-js-resizeable-plugin': path.join(__dirname, '..', 'draft-js-resizeable-plugin', 'src'),
      'draft-js-buttons': path.join(__dirname, '..', 'draft-js-buttons', 'src'),
      react: path.join(__dirname, 'node_modules', 'react'),
    },
    extensions: ['', '.js'],
  },
  module: {
    loaders: [
      {
        // match all js files except example.js
        test: /^(?!.*example\.js$).*\.js$/,
        loaders: ['babel'],
        exclude: /node_modules/,
        include: path.join(__dirname, 'client'),
      }, {
        test: /\.js$/,
        loaders: ['babel'],
        include: [
          path.join(__dirname, '..', 'draft-js-plugins-editor', 'src'),
          path.join(__dirname, '..', 'draft-js-hashtag-plugin', 'src'),
          path.join(__dirname, '..', 'draft-js-linkify-plugin', 'src'),
          path.join(__dirname, '..', 'draft-js-mention-plugin', 'src'),
          path.join(__dirname, '..', 'draft-js-sticker-plugin', 'src'),
          path.join(__dirname, '..', 'draft-js-undo-plugin', 'src'),
          path.join(__dirname, '..', 'draft-js-emoji-plugin', 'src'),
          path.join(__dirname, '..', 'draft-js-dnd-plugin', 'src'),
          path.join(__dirname, '..', 'draft-js-inline-toolbar-plugin', 'src'),
          path.join(__dirname, '..', 'draft-js-side-toolbar-plugin', 'src'),
          path.join(__dirname, '..', 'draft-js-counter-plugin', 'src'),
          path.join(__dirname, '..', 'draft-js-focus-plugin', 'src'),
          path.join(__dirname, '..', 'draft-js-alignment-plugin', 'src'),
          path.join(__dirname, '..', 'draft-js-image-plugin', 'src'),
          path.join(__dirname, '..', 'draft-js-resizeable-plugin', 'src'),
          path.join(__dirname, '..', 'draft-js-buttons', 'src'),
        ],
      }, {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[local]___[hash:base64:5]!postcss-loader'),
        include: [
          path.join(__dirname, '..', 'draft-js-plugins-editor', 'src'),
          path.join(__dirname, '..', 'draft-js-hashtag-plugin', 'src'),
          path.join(__dirname, '..', 'draft-js-linkify-plugin', 'src'),
          path.join(__dirname, '..', 'draft-js-mention-plugin', 'src'),
          path.join(__dirname, '..', 'draft-js-sticker-plugin', 'src'),
          path.join(__dirname, '..', 'draft-js-undo-plugin', 'src'),
          path.join(__dirname, '..', 'draft-js-emoji-plugin', 'src'),
          path.join(__dirname, '..', 'draft-js-dnd-plugin', 'src'),
          path.join(__dirname, '..', 'draft-js-inline-toolbar-plugin', 'src'),
          path.join(__dirname, '..', 'draft-js-side-toolbar-plugin', 'src'),
          path.join(__dirname, '..', 'draft-js-counter-plugin', 'src'),
          path.join(__dirname, '..', 'draft-js-focus-plugin', 'src'),
          path.join(__dirname, '..', 'draft-js-alignment-plugin', 'src'),
          path.join(__dirname, '..', 'draft-js-image-plugin', 'src'),
          path.join(__dirname, '..', 'draft-js-resizeable-plugin', 'src'),
          path.join(__dirname, '..', 'draft-js-buttons', 'src'),
          path.join(__dirname, 'client/components'),
        ],
      }, {
        test: /prism\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader'),
        include: [
          path.join(__dirname, 'node_modules/prismjs/themes/'),
        ],
      }, {
        test: /\.(png|jpg|gif|ico)$/,
        loaders: ['file?name=[name].[ext]'],
      },
    ],
  },
  postcss: [autoprefixer({ browsers: ['> 1%'] })],
};
