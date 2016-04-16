import React from 'react';
import { mount } from 'enzyme';
import createCounterPlugin from '../../index';
import { expect } from 'chai';
import { EditorState, ContentState } from 'draft-js';

describe('CounterPlugin Line Counter', () => {
  const createEditorStateFromText = (text) => {
    const contentState = ContentState.createFromText(text);
    return EditorState.createWithContent(contentState);
  };

  let counterPlugin;

  beforeEach(() => {
    counterPlugin = createCounterPlugin();
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
