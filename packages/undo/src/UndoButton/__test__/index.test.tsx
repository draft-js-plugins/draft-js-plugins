/* eslint no-unused-expressions: 0, react/no-children-prop:0 */
import React from 'react';
import { render } from '@testing-library/react';
import userEvents from '@testing-library/user-event';
import { EditorState, Modifier } from 'draft-js';
import Undo from '../index';
import { UndoPuginStore } from '../..';

describe('UndoButton', () => {
  function getStore(state = EditorState.createEmpty()): UndoPuginStore {
    return ({
      getEditorState: () => state,
      setEditorState: jest.fn(),
    } as unknown) as UndoPuginStore;
  }

  it('applies the className based on the theme property `undo`', () => {
    const theme = { undo: 'custom-class-name' };
    const store = getStore();
    const { getByRole } = render(
      <Undo store={store} theme={theme}>
        undo
      </Undo>
    );
    expect(getByRole('button')).toHaveClass('custom-class-name');
  });

  it('renders the passed in children', () => {
    const store = getStore();
    const { getByRole } = render(
      <Undo store={store} theme={{}}>
        undo
      </Undo>
    );
    expect(getByRole('button')).toHaveTextContent('undo');
  });

  it('applies a custom className as well as the theme', () => {
    const theme = { undo: 'custom-class-name' };
    const store = getStore();
    const { getByRole } = render(
      <Undo store={store} theme={theme} className="undo">
        undo
      </Undo>
    );
    expect(getByRole('button')).toHaveClass('custom-class-name undo');
  });

  it('adds disabled attribute to button if the getUndoStack is empty', () => {
    const store = getStore();
    const { getByRole } = render(
      <Undo store={store} theme={{}}>
        undo
      </Undo>
    );
    expect(getByRole('button')).toHaveProperty('disabled', true);
  });

  it('removes disabled attribute from button if the getUndoStack is not empty and click button', () => {
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
    const store = getStore(newEditorState);
    const { getByRole } = render(
      <Undo store={store} theme={{}}>
        undo
      </Undo>
    );
    expect(getByRole('button')).toHaveProperty('disabled', false);
    userEvents.click(getByRole('button'));
    expect(store.setEditorState).toHaveBeenCalledTimes(1);
  });
});
