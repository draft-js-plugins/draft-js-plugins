import chai from 'chai';
import dirtyChai from 'dirty-chai';
import hook from 'css-modules-require-hook';

process.env.NODE_ENV = 'test';

hook({
  generateScopedName: '[name]__[local]___[hash:base64:5]',
});

const { JSDOM } = require('jsdom');

const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
const { window } = jsdom;

function copyProps(src, target) {
  const props = Object.getOwnPropertyNames(src)
    .filter((prop) => typeof target[prop] === 'undefined')
    .reduce((result, prop) => ({
      ...result,
      [prop]: Object.getOwnPropertyDescriptor(src, prop),
    }), {});
  Object.defineProperties(target, props);
}

global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: 'node.js',
};
copyProps(window, global);

const exposedProperties = ['window', 'navigator', 'document'];

Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

// chaiEnzyme needs to be initialised here, so that canUseDOM is set
// to true when react-dom initialises (which chai-enzyme depends upon)
const chaiEnzyme = require('chai-enzyme');

chai.use(dirtyChai);
chai.use(chaiEnzyme());
