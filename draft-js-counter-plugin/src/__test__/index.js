import React from 'react';
import { mount } from 'enzyme';
import createCounterPlugin from '../index';
import { expect } from 'chai';
import { EditorState, ContentState } from 'draft-js';

describe('CounterPlugin Config', () => {
  const createEditorStateFromText = (text) => {
    const contentState = ContentState.createFromText(text);
    return EditorState.createWithContent(contentState);
  };

  let counterPlugin;

  beforeEach(() => {
    counterPlugin = createCounterPlugin();
  });

  it('instantiates plugin and counts 12 characters', () => {
    const { CharCounter } = counterPlugin;

    const text = 'Hello World!';
    const editorState = createEditorStateFromText(text);
    const result = mount(
      <CharCounter editorState={ editorState } />
    );
    expect(result).to.have.text('12');
  });

  it('instantiates plugin and counts 5 words', () => {
    const { WordCounter } = counterPlugin;

    const text = 'Hello there, how are you?';
    const editorState = createEditorStateFromText(text);
    const result = mount(
      <WordCounter editorState={ editorState } />
    );
    expect(result).to.have.text('5');
  });

  it('instantiates plugin and counts 3 lines', () => {
    const { LineCounter } = counterPlugin;

    const text = 'One\nTwo\nThree';
    const editorState = createEditorStateFromText(text);
    const result = mount(
      <LineCounter editorState={ editorState } />
    );
    expect(result).to.have.text('3');
  });
});
