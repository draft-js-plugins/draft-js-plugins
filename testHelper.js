import chai from 'chai';
import dirtyChai from 'dirty-chai';
import chaiEnzyme from 'chai-enzyme';

process.env.NODE_ENV = 'test';

chai.use(dirtyChai);
chai.use(chaiEnzyme());
