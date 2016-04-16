import React from 'react';
import { mount } from 'enzyme';
import createCounterPlugin from '../../index';
import { expect } from 'chai';
import { EditorState, ContentState } from 'draft-js';

describe('CounterPlugin Word Counter', () => {
  const createEditorStateFromText = (text) => {
    const contentState = ContentState.createFromText(text);
    return EditorState.createWithContent(contentState);
  };

  let counterPlugin;

  beforeEach(() => {
    counterPlugin = createCounterPlugin();
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
});
