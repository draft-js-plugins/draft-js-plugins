import React from 'react';
import { EditorState, Entity, AtomicBlockUtils, SelectionState } from 'draft-js';
import removeBlock from '../../Modifiers/removeBlock';
import insertBlock from '../../Modifiers/insertBlock';

export default class TextAction extends React.Component {

  onValidation = (textValue, blockKey) => {
    const response = this.props.add(textValue);
    if (typeof response.then === 'function') {
      response.then((entityKey) => this.insert(entityKey, blockKey));
    } else {
      this.insert(response, blockKey);
    }
  };

  onCancel = (blockKey) => {
    const editorState = this.props.getPluginMethods().getEditorState();
    const stateWithoutText = removeBlock(editorState, blockKey);
    this.props.getPluginMethods().setEditorState(stateWithoutText);
    this.props.getPluginMethods().setReadOnly(false);
  };

  onClick = (event) => {
    event.preventDefault();
    this.props.onClick();
    const entityKey = Entity.create('TEXT-INPUT', 'IMMUTABLE', {
      placeholder: this.props.placeholder,
      onValidation: this.onValidation,
      cancel: this.onCancel,
    });
    const state = this.props.getPluginMethods().getEditorState();
    const newState = AtomicBlockUtils.insertAtomicBlock(
      state,
      entityKey,
      ' '
    );
    const emptySelection = SelectionState.createEmpty();
    const noSelectionState = EditorState.acceptSelection(newState, emptySelection);
    this.props.getPluginMethods().setEditorState(noSelectionState);
    this.props.getPluginMethods().setReadOnly(true);
  };

  insert = (entityKey, blockKey) => {
    const editorState = this.props.getPluginMethods().getEditorState();
    const stateWithoutText = removeBlock(editorState, blockKey);
    const newState = insertBlock(stateWithoutText, entityKey);
    this.props.getPluginMethods().setEditorState(newState);
    this.props.getPluginMethods().setReadOnly(false);
  };

  render = () => (
    <img
      src={this.props.icon}
      onClick={this.onClick}
      alt="BUTTON"
    />
  );
}

TextAction.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  name: React.PropTypes.string.isRequired,
  icon: React.PropTypes.string.isRequired,
  add: React.PropTypes.func.isRequired,
  // eslint-disable-next-line react/no-unused-prop-types
  remove: React.PropTypes.func,
};
