const path = require('path');

const packages = [
  '@draft-js-plugins/editor',
  '@draft-js-plugins/hashtag',
  '@draft-js-plugins/linkify',
  '@draft-js-plugins/anchor',
  '@draft-js-plugins/mention',
  '@draft-js-plugins/sticker',
  '@draft-js-plugins/undo',
  '@draft-js-plugins/emoji',
  '@draft-js-plugins/utils',
  '@draft-js-plugins/counter',
  '@draft-js-plugins/drag-n-drop',
  '@draft-js-plugins/drag-n-drop-upload',
  '@draft-js-plugins/inline-toolbar',
  '@draft-js-plugins/static-toolbar',
  '@draft-js-plugins/side-toolbar',
  '@draft-js-plugins/focus',
  '@draft-js-plugins/alignment',
  '@draft-js-plugins/text-alignment',
  '@draft-js-plugins/image',
  '@draft-js-plugins/resizeable',
  '@draft-js-plugins/buttons',
  '@draft-js-plugins/video',
  '@draft-js-plugins/divider',
  '@draft-js-plugins/table',
];

const packagesAliases = {};
packages.forEach((name) => {
  const [, folderName] = name.split('/');
  packagesAliases[name] = path.join(
    __dirname,
    '../packages',
    folderName,
    'src'
  );
});

module.exports = async ({ config }) => {
  config.module = {
    rules: [
      {
        test: /\.css$/,
        exclude: [/linaria-cache/, /node_modules/],
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]___[hash:base64:5]',
              },
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
        test: /\.(js|jsx|ts|tsx)?$/,
        use: [
          { loader: 'babel-loader' },
          {
            loader: 'linaria/loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif|ico)$/,
        use: [{ loader: 'file-loader', options: { name: '[name].[ext]' } }],
      },
    ],
  };

  config.resolve = {
    alias: {
      ...packagesAliases,
      react: path.join(__dirname, '..', 'node_modules', 'react'),
      'prop-types': path.join(__dirname, '..', 'node_modules', 'prop-types'),
    },
    extensions: ['.ts', '.tsx', '.js', '.json', '.mjs'],
    fallback: { path: require.resolve('path-browserify') },
  };

  return config;
};
