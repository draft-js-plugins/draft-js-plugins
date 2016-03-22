import React from 'react';
import { shallow } from 'enzyme';
import Redo from '../index';
import { Map } from 'immutable';
import { expect } from 'chai';
import { EditorState } from 'draft-js';

describe('RedoButton', () => {
  const onChange = () => undefined;
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

  // TODO test: button is disabled in case the getRedoStack is empty
  // TODO test: button is not disabled in case the getRedoStack is not empty
  // TODO test: onClick on the button triggers an update with a redo
});
