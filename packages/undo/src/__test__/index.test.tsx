import React from 'react';
import { EditorState } from 'draft-js';
import { render, screen } from '@testing-library/react';
import { PluginFunctions } from '@draft-js-plugins/editor';
import createUndoPlugin from '../index';

jest.mock('linaria');

describe('UndoPlugin Config', () => {
  const onChange = (): void => undefined;
  let editorState: EditorState;

  beforeEach(() => {
    editorState = EditorState.createEmpty();
  });

  const config = {
    theme: {
      redo: 'custom-class-name-redo',
      undo: 'custom-class-name-undo',
    },
    redoContent: 'custom-child-redo',
    undoContent: 'custom-child-undo',
  };

  it('instantiates plugin with undoContent config', () => {
    const undoPlugin = createUndoPlugin(config);
    const UndoButton = undoPlugin.UndoButton;
    undoPlugin.initialize!({
      getEditorState: () => editorState,
      setEditorState: onChange,
    } as unknown as PluginFunctions);

    render(<UndoButton />);
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('custom-child-undo');
    expect(button).toHaveClass('custom-class-name-undo');
  });

  it('instantiates plugin with redoContent config', () => {
    const undoPlugin = createUndoPlugin(config);
    const RedoButton = undoPlugin.RedoButton;
    undoPlugin.initialize!({
      getEditorState: () => editorState,
      setEditorState: onChange,
    } as unknown as PluginFunctions);

    render(<RedoButton />);
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('custom-child-redo');
    expect(button).toHaveClass('custom-class-name-redo');
  });
});
