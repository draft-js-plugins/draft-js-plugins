import { render } from '@testing-library/react';
import userEvents from '@testing-library/user-event';
import { EditorState, Modifier } from 'draft-js';
import React from 'react';
import { UndoPuginStore } from '../..';
import Redo from '../index';

describe('RedoButton', () => {
  function getStore(state = EditorState.createEmpty()): UndoPuginStore {
    return {
      getEditorState: () => state,
      setEditorState: jest.fn(),
    } as unknown as UndoPuginStore;
  }

  it('applies the className based on the theme property `redo`', () => {
    const theme = { redo: 'custom-class-name' };
    const store = getStore();
    const { getByRole } = render(
      <Redo store={store} theme={theme}>
        redo
      </Redo>
    );
    expect(getByRole('button')).toHaveClass('custom-class-name');
  });

  it('renders the passed in children', () => {
    const store = getStore();
    const { getByRole } = render(
      <Redo store={store} theme={{}}>
        redo
      </Redo>
    );
    expect(getByRole('button')).toHaveTextContent('redo');
  });

  it('applies a custom className as well as the theme', () => {
    const theme = { redo: 'custom-class-name' };
    const store = getStore();
    const { getByRole } = render(
      <Redo store={store} theme={theme} className="redo">
        redo
      </Redo>
    );

    expect(getByRole('button')).toHaveClass('custom-class-name redo');
  });

  it('adds disabled attribute to button if the getRedoStack is empty', () => {
    const store = getStore();
    const { getByRole } = render(
      <Redo store={store} theme={{}}>
        redo
      </Redo>
    );
    expect(getByRole('button')).toHaveProperty('disabled', true);
  });

  it('removes disabled attribute from button if the getRedoStack is not empty and click button', async () => {
    const editorState = EditorState.createEmpty();
    const contentState = editorState.getCurrentContent();
    const SelectionState = editorState.getSelection();
    const newContent = Modifier.insertText(
      contentState,
      SelectionState,
      'hello'
    );
    const newEditorState = EditorState.push(
      editorState,
      newContent,
      'insert-characters'
    );
    const undoEditorState = EditorState.undo(newEditorState);
    const store = getStore(undoEditorState);
    const { getByRole } = render(
      <Redo store={store} theme={{}}>
        redo
      </Redo>
    );
    expect(getByRole('button')).toHaveProperty('disabled', false);
    await userEvents.click(getByRole('button'));
    expect(store.setEditorState).toHaveBeenCalledTimes(1);
  });
});
