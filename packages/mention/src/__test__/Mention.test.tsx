import React from 'react';
import { screen, render } from '@testing-library/react';
import { ContentState } from 'draft-js';
import Mention from '../Mention';
import { MentionData } from '..';

const mentiont: MentionData = { name: 'mention' };

describe('Mention', () => {
  it('renders an Anchor tag in case a link is provided', () => {
    const mention = {
      link: 'https://www.example.com/john',
    };
    const contentState = ContentState.createFromText('');
    const contentStateWithEntity = contentState.createEntity(
      'mention',
      'SEGMENTED',
      { mention }
    );
    const entityKey = contentStateWithEntity.getLastCreatedEntityKey();

    render(
      <Mention
        entityKey={entityKey}
        contentState={contentState}
        className={'className'}
        decoratedText={'decoratedText'}
        mention={mentiont}
      >
        children
      </Mention>
    );
    expect(screen.getByTestId('mentionLink')).toBeTruthy();
  });

  it('renders a Span tag in case no link is provided', () => {
    const mention = {};
    const contentState = ContentState.createFromText('');
    const contentStateWithEntity = contentState.createEntity(
      'mention',
      'SEGMENTED',
      { mention }
    );
    const entityKey = contentStateWithEntity.getLastCreatedEntityKey();

    render(
      <Mention
        entityKey={entityKey}
        contentState={contentState}
        className={'className'}
        decoratedText={'decoratedText'}
        mention={mentiont}
      >
        children
      </Mention>
    );
    expect(screen.getByTestId('mentionText')).toBeTruthy();
  });

  it('can render when mention is an Object', () => {
    const mention = {};
    const contentState = ContentState.createFromText('');
    const contentStateWithEntity = contentState.createEntity(
      'mention',
      'SEGMENTED',
      { mention }
    );
    const entityKey = contentStateWithEntity.getLastCreatedEntityKey();

    render(
      <Mention
        entityKey={entityKey}
        contentState={contentState}
        className={'className'}
        decoratedText={'decoratedText'}
        mention={mentiont}
      >
        children
      </Mention>
    );
    expect(screen.getByTestId('mentionText')).toBeTruthy();
  });
});
