import React from 'react';
import { screen, render } from '@testing-library/react';
import { EditorState, ContentState } from 'draft-js';
import createCounterPlugin from '../../index';

describe('CounterPlugin Character Counter', () => {
  const createEditorStateFromText = text => {
    const contentState = ContentState.createFromText(text);
    return EditorState.createWithContent(contentState);
  };

  let counterPlugin;

  beforeEach(() => {
    counterPlugin = createCounterPlugin();
  });

  it('instantiates plugin and counts 12 characters', () => {
    const editorState = createEditorStateFromText('Hello World!');
    counterPlugin.initialize({
      getEditorState: () => editorState,
    });
    const { CharCounter } = counterPlugin;

    render(<CharCounter />);
    expect(screen.getByText('12')).toBeInTheDocument();
  });

  it('instantiates plugin and counts 3 unicode characters', () => {
    const editorState = createEditorStateFromText('😁😂😃');
    counterPlugin.initialize({
      getEditorState: () => editorState,
    });
    const { CharCounter } = counterPlugin;

    render(<CharCounter />);
    expect(screen.getByText('3')).toBeInTheDocument();
  });
});
