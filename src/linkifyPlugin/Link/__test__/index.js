import React from 'react';
import { shallow } from 'enzyme';
import Link from '../index';
import { Map } from 'immutable';
import { expect } from 'chai';

describe('Link', () => {
  it('applies the className based on the theme property `link`', () => {
    const theme = Map({ link: 'custom-class-name' });
    const result = shallow(<Link theme={ theme } />);
    expect(result).to.have.prop('className', 'custom-class-name');
  });

  it('applies any custom passed prop', () => {
    const result = shallow(<Link data-custom="unicorn" />);
    expect(result).to.have.prop('data-custom', 'unicorn');
  });

  it('renders the passed in children', () => {
    const result = shallow(<Link children="https://www.draft-js-plugins.com/" />);
    expect(result).to.have.prop('children', 'https://www.draft-js-plugins.com/');
  });

  it('applies a custom className as well as the theme', () => {
    const theme = Map({ link: 'custom-class-name' });
    const result = shallow(<Link theme={ theme } className="link" />);
    expect(result).to.have.prop('className').to.contain('link');
    expect(result).to.have.prop('className').to.contain('custom-class-name');
  });

  it('uses the decoratedText prop as href', () => {
    const result = shallow(<Link decoratedText="https://www.draft-js-plugins.com/" />);
    expect(result).to.have.prop('href').to.contain('https://www.draft-js-plugins.com/');
  });
});
