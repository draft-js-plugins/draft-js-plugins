const path = require('path');

const packages = [
  'draft-js-plugins-editor',
  'draft-js-hashtag-plugin',
  'draft-js-linkify-plugin',
  'draft-js-anchor-plugin',
  'draft-js-mention-plugin',
  'draft-js-sticker-plugin',
  'draft-js-undo-plugin',
  'draft-js-emoji-plugin',
  'draft-js-plugins-utils',
  'draft-js-counter-plugin',
  'draft-js-drag-n-drop-plugin',
  'draft-js-drag-n-drop-upload-plugin',
  'draft-js-inline-toolbar-plugin',
  'draft-js-static-toolbar-plugin',
  'draft-js-side-toolbar-plugin',
  'draft-js-focus-plugin',
  'draft-js-alignment-plugin',
  'draft-js-image-plugin',
  'draft-js-resizeable-plugin',
  'draft-js-buttons',
  'draft-js-video-plugin',
  'draft-js-divider-plugin',
];

const packagesAliases = {};
packages.forEach(name => {
  packagesAliases[name] = path.join(__dirname, '..', name, 'src');
});

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: [/linaria-cache/, /node_modules/],
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]',
            },
          },
        ],
      },

      {
        test: /\.css$/,
        include: [/linaria-cache/, /node_modules/],
        use: ['style-loader', 'css-loader'],
      },

      {
        test: /\.js$/,
        loader: 'linaria/loader',
        options: {
          sourceMap: true,
        },
      },

      {
        test: /\.(png|jpg|gif|ico)$/,
        use: [{ loader: 'file-loader', options: { name: '[name].[ext]' } }],
      },
    ],
  },

  resolve: {
    alias: {
      ...packagesAliases,
      react: path.join(__dirname, '..', 'node_modules', 'react'),
      'prop-types': path.join(__dirname, '..', 'node_modules', 'prop-types'),
      lodash: path.join(__dirname, '..', 'node_modules', 'lodash'),
    },
  },
};
