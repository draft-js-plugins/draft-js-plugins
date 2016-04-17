import React from 'react';
import { mount } from 'enzyme';
import createCounterPlugin from '../../index';
import { expect } from 'chai';
import { EditorState, ContentState } from 'draft-js';

describe('CounterPlugin Character Counter', () => {
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

  it('instantiates plugin and counts 3 unicode characters', () => {
    const { CharCounter } = counterPlugin;

    const text = '😁😂😃';
    const editorState = createEditorStateFromText(text);
    const result = mount(
      <CharCounter editorState={ editorState } />
    );
    expect(result).to.have.text('3');
  });
});
