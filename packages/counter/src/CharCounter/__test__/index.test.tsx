import React from 'react';
import { screen, render } from '@testing-library/react';
import { PluginFunctions } from '@draft-js-plugins/editor';
import { EditorState, ContentState } from 'draft-js';
import createCounterPlugin from '../../index';

jest.mock('linaria');

describe('CounterPlugin Character Counter', () => {
  const createEditorStateFromText = (text: string): EditorState => {
    const contentState = ContentState.createFromText(text);
    return EditorState.createWithContent(contentState);
  };

  it('instantiates plugin and counts 12 characters', () => {
    const counterPlugin = createCounterPlugin();
    const editorState = createEditorStateFromText('Hello World!');
    counterPlugin.initialize!({
      getEditorState: () => editorState,
    } as PluginFunctions);
    const { CharCounter } = counterPlugin;

    render(<CharCounter />);
    expect(screen.getByText('12')).toBeInTheDocument();
  });

  it('instantiates plugin and counts 3 unicode characters', () => {
    const counterPlugin = createCounterPlugin();
    const editorState = createEditorStateFromText('😁😂😃');
    counterPlugin.initialize!({
      getEditorState: () => editorState,
    } as PluginFunctions);
    const { CharCounter } = counterPlugin;

    render(<CharCounter />);
    expect(screen.getByText('3')).toBeInTheDocument();
  });
});
