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
    //using loose true because of this issue: https://github.com/storybookjs/storybook/issues/12093
    ['@babel/preset-env', { loose: true }],
    '@babel/react',
    '@babel/flow',
    '@babel/typescript',
    'linaria/babel',
  ],
  plugins: [
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    '@babel/transform-runtime',
    removeLinariaImport,
  ],
};
