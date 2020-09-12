import React from 'react';
import { screen, render } from '@testing-library/react';
import { EditorState, ContentState } from 'draft-js';
import createCounterPlugin from '../../index';

describe('CounterPlugin Word Counter', () => {
  const createEditorStateFromText = text => {
    const contentState = ContentState.createFromText(text);
    return EditorState.createWithContent(contentState);
  };

  let counterPlugin;

  beforeEach(() => {
    counterPlugin = createCounterPlugin();
  });

  it('instantiates plugin and counts 5 words', () => {
    const text = 'Hello there, how are you?';
    const editorState = createEditorStateFromText(text);
    counterPlugin.initialize({
      getEditorState: () => editorState,
    });
    const { WordCounter } = counterPlugin;

    render(<WordCounter />);
    expect(screen.getByText('5')).toBeInTheDocument();
  });
});
