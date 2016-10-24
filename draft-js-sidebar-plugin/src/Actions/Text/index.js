import React from 'react';
import { EditorState, Entity, AtomicBlockUtils, SelectionState } from 'draft-js';
import removeBlock from '../../Modifiers/removeBlock';
import insertBlock from '../../Modifiers/insertBlock';
import styles from '../../Components/Sidebar/styles.css';

export default class TextAction extends React.Component {

  onValidation = (textValue, blockKey) => {
    const entity = this.props.getEntity(textValue);
    if (typeof entity.then === 'function') {
      entity.then((entityKey) => this.insert(entityKey, blockKey));
    } else {
      this.insert(entity, blockKey);
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
    <li className={styles.listItem}>
      <img
        src={this.props.icon}
        onClick={this.onClick}
        alt="BUTTON"
      />
    </li>
  );
}

TextAction.propTypes = {
  icon: React.PropTypes.string.isRequired,
  getEntity: React.PropTypes.func.isRequired,
  // eslint-disable-next-line react/no-unused-prop-types
  remove: React.PropTypes.func,
};
