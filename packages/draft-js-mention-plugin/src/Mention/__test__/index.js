import React from 'react';
import { render, shallow } from 'enzyme';
import Mention from '../index';
import { fromJS, Map } from 'immutable';
import { Entity } from 'draft-js';
import { expect } from 'chai';

describe('Mention', () => {
  it('renders an Anchor tag in case a link is provided', () => {
    const mention = fromJS({
      link: 'https://www.example.com/john',
    });
    const entityKey = Entity.create('mention', 'SEGMENTED', { mention });
    const result = shallow(<Mention entityKey={ entityKey } theme={ Map() } />);
    expect(result).to.have.tagName('a');
  });

  it('renders a Span tag in case no link is provided', () => {
    const mention = fromJS({});
    const entityKey = Entity.create('mention', 'SEGMENTED', { mention });
    const result = render(<Mention entityKey={ entityKey } theme={ Map() } />);
    expect(result).to.have.tagName('span');
  });
});
