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

  it('instantiates plugin with word counter and counts 5 words', () => {
    const counterPlugin = createCounterPlugin();
    const text = 'Hello there, how are you?';
    const editorState = createEditorStateFromText(text);
    counterPlugin.initialize!({
      getEditorState: () => editorState,
    } as PluginFunctions);
    const { CustomCounter } = counterPlugin;

    // a function that takes a string and returns the number of words
    const countFunction = (str: string): number => {
      const wordArray = str.match(/\S+/g); // matches words according to whitespace
      return wordArray ? wordArray.length : 0;
    };

    render(<CustomCounter countFunction={countFunction} />);
    expect(screen.getByText('5')).toBeInTheDocument();
  });

  it('instantiates plugin with number counter and counts 6 number characters', () => {
    const counterPlugin = createCounterPlugin();
    const text = 'I am a 1337 h4x0r';
    const editorState = createEditorStateFromText(text);
    counterPlugin.initialize!({
      getEditorState: () => editorState,
    } as PluginFunctions);
    const { CustomCounter } = counterPlugin;

    // a function that takes a string and returns the number of number characters
    const countFunction = (str: string): number => {
      const numArray = str.match(/\d/g); // matches only number characters
      return numArray ? numArray.length : 0;
    };

    render(<CustomCounter countFunction={countFunction} />);
    expect(screen.getByText('6')).toBeInTheDocument();
  });
});
