import chai from 'chai';
import dirtyChai from 'dirty-chai';
import chaiEnzyme from 'chai-enzyme';
import hook from 'css-modules-require-hook';
import { jsdom } from 'jsdom';

process.env.NODE_ENV = 'test';

hook({
  generateScopedName: '[name]__[local]___[hash:base64:5]',
});

chai.use(dirtyChai);
chai.use(chaiEnzyme());

const exposedProperties = ['window', 'navigator', 'document'];

global.document = jsdom('');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js',
};
