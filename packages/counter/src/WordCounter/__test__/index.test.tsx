import React from 'react';
import { screen, render } from '@testing-library/react';
import { EditorState, ContentState } from 'draft-js';
import { PluginFunctions } from '@draft-js-plugins/editor';
import createCounterPlugin from '../../index';

jest.mock('linaria');

describe('CounterPlugin Word Counter', () => {
  const createEditorStateFromText = (text: string): EditorState => {
    const contentState = ContentState.createFromText(text);
    return EditorState.createWithContent(contentState);
  };

  it('instantiates plugin and counts 5 words', () => {
    const counterPlugin = createCounterPlugin();
    const text = 'Hello there, how are you?';
    const editorState = createEditorStateFromText(text);
    counterPlugin.initialize!({
      getEditorState: () => editorState,
    } as PluginFunctions);
    const { WordCounter } = counterPlugin;

    render(<WordCounter />);
    expect(screen.getByText('5')).toBeInTheDocument();
  });
});
