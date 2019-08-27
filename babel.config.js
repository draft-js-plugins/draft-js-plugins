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
  presets: ['@babel/env', '@babel/react', '@babel/flow', 'linaria/babel'],
  plugins: ['@babel/proposal-class-properties', removeLinariaImport],
};
