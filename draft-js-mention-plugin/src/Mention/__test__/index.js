import React from 'react';
import { render } from 'enzyme';
import { Map } from 'immutable';
import { ContentState } from 'draft-js';
import { expect } from 'chai';
import Mention from '../index';

describe('Mention', () => {
  it('renders an Anchor tag in case a link is provided', () => {
    const mention = {
      link: 'https://www.example.com/john',
    };
    const contentState = ContentState.createFromText('');
    const contentStateWithEntity = contentState.createEntity('mention', 'SEGMENTED', { mention });
    const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
    const result = render(<Mention entityKey={entityKey} contentState={contentState} theme={Map()} />);
    expect(result).to.have.tagName('a');
  });

  it('renders a Span tag in case no link is provided', () => {
    const mention = {};
    const contentState = ContentState.createFromText('');
    const contentStateWithEntity = contentState.createEntity('mention', 'SEGMENTED', { mention });
    const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
    const result = render(<Mention entityKey={entityKey} contentState={contentState} theme={Map()} />);
    expect(result).to.have.tagName('span');
  });

  it('can render when mention is an Object', () => {
    const mention = {};
    const contentState = ContentState.createFromText('');
    const contentStateWithEntity = contentState.createEntity('mention', 'SEGMENTED', { mention });
    const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
    const result = render(<Mention entityKey={entityKey} contentState={contentState} theme={Map()} />);
    expect(result).to.have.tagName('span');
  });
});
