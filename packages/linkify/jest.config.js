const base = require('../../jest.config.base.js');
const packageName = require('./package').name;

module.exports = {
  ...base,
  displayName: packageName,
  name: packageName,
};
