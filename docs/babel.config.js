const removeLinariaImport = () => ({
  name: 'remove-linaria-import',
  visitor: {
    ImportDeclaration(path) {
      if (path.node.source && path.node.source.value === 'linaria') {
        path.remove();
      }
    },
  },
});

module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/preset-flow',
    '@babel/preset-typescript',
    'linaria/babel',
  ],
  plugins: ['@babel/plugin-proposal-class-properties', removeLinariaImport],
};
