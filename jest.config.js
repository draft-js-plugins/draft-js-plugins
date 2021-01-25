const base = require('./jest.config.base.js');

module.exports = {
  ...base,
  projects: [
    {
      ...base,
      displayName: 'root',
      modulePathIgnorePatterns: ['packages'],
    },
    '<rootDir>/packages/*/jest.config.js',
  ],
};
