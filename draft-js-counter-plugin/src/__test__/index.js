import React from 'react';
import { shallow, mount } from 'enzyme';
import createUndoPlugin from '../index';
import { Map } from 'immutable';
import { expect } from 'chai';
import { EditorState } from 'draft-js';

describe('UndoPlugin Config', () => {
  const onChange = () => undefined;
  let editorState;

  beforeEach(() => {
    editorState = EditorState.createEmpty();
  });

  it('instantiates plugin with undoContent config', () => {
    const undoPlugin = createUndoPlugin({
      undoContent: 'custom-child',
    });
    const UndoButton = undoPlugin.UndoButton;
    const result = shallow(
      <UndoButton
        editorState={ editorState }
        onChange={ onChange }
      />
    );
    expect(result).to.have.prop('children', 'custom-child');
  });

  it('instantiates plugin with redoContent config', () => {
    const undoPlugin = createUndoPlugin({
      redoContent: 'custom-child',
    });
    const RedoButton = undoPlugin.RedoButton;
    const result = shallow(
      <RedoButton
        editorState={ editorState }
        onChange={ onChange }
      />
    );
    expect(result).to.have.prop('children', 'custom-child');
  });

  it('instantiates plugin with theme config', () => {
    const theme = Map({
      redo: 'custom-class-name',
      undo: 'custom-class-name',
    });
    const undoPlugin = createUndoPlugin({ theme });
    const RedoButton = undoPlugin.RedoButton;
    const UndoButton = undoPlugin.UndoButton;
    const redoResult = mount(
      <RedoButton
        editorState={ editorState }
        onChange={ onChange }
      />
    );
    const undoResult = mount(
      <UndoButton
        editorState={ editorState }
        onChange={ onChange }
      />
    );
    expect(redoResult.find('button')).to.have.prop('className').to.contain('custom-class-name');
    expect(undoResult.find('button')).to.have.prop('className').to.contain('custom-class-name');
  });
});
