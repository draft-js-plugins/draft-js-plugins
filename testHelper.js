import chai from 'chai';
import dirtyChai from 'dirty-chai';
import chaiEnzyme from 'chai-enzyme';
import hook from 'css-modules-require-hook';

process.env.NODE_ENV = 'test';

hook({
  generateScopedName: '[name]__[local]___[hash:base64:5]',
});

chai.use(dirtyChai);
chai.use(chaiEnzyme());
