// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: [`${__dirname}/jestHelper.js`],
  moduleFileExtensions: ['jsx', 'js', 'ts', 'tsx'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  moduleDirectories: ['node_modules', 'src'],
  testPathIgnorePatterns: ['./node_modules/'],
  collectCoverageFrom: [],
  coveragePathIgnorePatterns: ['.stories.*'],
  coverageThreshold: {
    global: {},
  },
  globals: {
    'ts-jest': {
      babelConfig: `${__dirname}/babel.config.js`,
    },
  },
};
