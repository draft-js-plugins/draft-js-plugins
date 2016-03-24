/* eslint no-unused-expressions: 0 */
import React from 'react';
import { shallow } from 'enzyme';
import Redo from '../index';
import { Map } from 'immutable';
import sinon from 'sinon';
import chai, { expect } from 'chai';
import sinonChai from 'sinon-chai';
import { EditorState, Modifier } from 'draft-js';

chai.use(sinonChai);

describe('RedoButton', () => {
  const onChange = () => sinon.spy();
  let editorState;

  beforeEach(() => {
    editorState = EditorState.createEmpty();
  });

  it('applies the className based on the theme property `hashtag`', () => {
    const theme = Map({ redo: 'custom-class-name' });
    const result = shallow(
      <Redo
        editorState={ editorState }
        onChange={ onChange }
        theme={ theme }
        children={ 'redo' }
      />
    );
    expect(result).to.have.prop('className', 'custom-class-name');
  });

  it('renders the passed in children', () => {
    const result = shallow(
      <Redo
        editorState={ editorState }
        onChange={ onChange }
        children="redo"
      />
    );
    expect(result).to.have.prop('children', 'redo');
  });

  it('applies a custom className as well as the theme', () => {
    const theme = Map({ redo: 'custom-class-name' });
    const result = shallow(
      <Redo
        editorState={ editorState }
        onChange={ onChange }
        theme={ theme }
        className="hashtag"
        children="redo"
      />
    );
    expect(result).to.have.prop('className').to.contain('hashtag');
    expect(result).to.have.prop('className').to.contain('custom-class-name');
  });

  it('adds disabled attribute to button if the getRedoStack is empty', () => {
    const result = shallow(
      <Redo
        editorState={ editorState }
        onChange={ onChange }
        children="redo"
      />
    );
    expect(result.find('button')).prop('disabled').to.equal(true);
  });

  it('removes disabled attribute from button if the getRedoStack is not empty', () => {
    const contentState = editorState.getCurrentContent();
    const SelectionState = editorState.getSelection();
    const newContent = Modifier.insertText(
      contentState,
      SelectionState,
      'hello'
    );
    const newEditorState = EditorState.push(editorState, newContent, 'insert-text');
    const undoEditorState = EditorState.undo(newEditorState);
    const result = shallow(
      <Redo
        editorState={ undoEditorState }
        onChange={ onChange }
        children="redo"
      />
    );
    expect(result.find('button')).prop('disabled').to.equal(false);
  });

  it('triggers an update with redo when the button is clicked', () => {
    const result = shallow(
      <Redo
        editorState={ editorState }
        onChange={ onChange }
        children="redo"
      />
    );
    result.find('button').simulate('click');
    expect(onChange).to.have.been.calledOnce;
  });
});
