module.exports = {
  core: {
    builder: 'webpack5',
  },
  stories: ['../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  framework: '@storybook/react',
  staticDirs: ['../stories/public'],
};
