import React from 'react';
import { screen, render } from '@testing-library/react';
import { EditorState, ContentState } from 'draft-js';
import { PluginFunctions } from '@draft-js-plugins/editor';
import createCounterPlugin from '../../index';

jest.mock('linaria');

describe('CounterPlugin Line Counter', () => {
  const createEditorStateFromText = (text: string): EditorState => {
    const contentState = ContentState.createFromText(text);
    return EditorState.createWithContent(contentState);
  };

  it('instantiates plugin and counts 3 lines', () => {
    const editorState = createEditorStateFromText('One\nTwo\nThree');
    const counterPlugin = createCounterPlugin();
    counterPlugin.initialize!({
      getEditorState: () => editorState,
    } as PluginFunctions);
    const { LineCounter } = counterPlugin;

    render(<LineCounter />);
    expect(screen.getByText('3')).toBeInTheDocument();
  });
});
