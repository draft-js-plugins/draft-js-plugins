import React from 'react';
import { EditorState, Entity, AtomicBlockUtils } from 'draft-js';
import removeBlock from '../../Modifiers/removeBlock';
import insertBlock from '../../Modifiers/insertBlock';

export default class TextAction extends React.Component {

  insert = (entityKey, blockKey) => {
    const editorState = this.props.getEditorState();
    const stateWithoutText = removeBlock(editorState, blockKey);
    const newState = insertBlock(stateWithoutText, entityKey);
    this.props.setEditorState(newState);
    this.props.setReadOnly(false);
  }

  onValidation = (textValue, blockKey) => {
    const response = this.props.add(textValue);
    if (typeof response.then === 'function') {
      response.then((entityKey) => this.insert(entityKey, blockKey));
    } else {
      this.insert(response, blockKey);
    }
  }

  onCancel = (blockKey) => {
    const editorState = this.props.getEditorState();
    const stateWithoutText = removeBlock(editorState, blockKey);
    this.props.setEditorState(stateWithoutText);
    this.props.setReadOnly(false);
  }

  onClick = (event) => {
    event.preventDefault();
    this.props.onClick();
    const entityKey = Entity.create('TEXT-INPUT', 'IMMUTABLE', {
      placeholder: this.props.placeholder,
      onValidation: this.onValidation,
      cancel: this.onCancel,
    });
    const state = this.props.getEditorState();
    const newState = AtomicBlockUtils.insertAtomicBlock(
      state,
      entityKey,
      ' '
    );
    this.props.setEditorState(newState);
    this.props.setReadOnly(true);
  };

  render = () => (
    <button onClick={this.onClick}>
      {this.props.icon || 'BUTTON'}
    </button>
  )
}