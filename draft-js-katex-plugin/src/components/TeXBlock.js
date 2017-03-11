import React, { Component } from 'react';
import katex from 'katex';
import { Entity } from 'draft-js';
import unionClassNames from 'union-class-names';
import KatexOutput from './KatexOutput';

export default class TeXBlock extends Component {
  constructor(props) {
    super(props);
    this.state = { editMode: false };
  }

  onClick = () => {
    if (this.state.editMode) {
      return;
    }

    this.setState({
      editMode: true,
      texValue: this.getValue(),
    }, () => {
      this.startEdit();
    });
  };

  onValueChange = (evt) => {
    const value = evt.target.value;
    let invalid = false;
    try {
      katex.__parse(value); // eslint-disable-line no-underscore-dangle
    } catch (e) {
      invalid = true;
    } finally {
      this.setState({
        invalidTeX: invalid,
        texValue: value,
      });
    }
  };

  getValue = () => {
    const entityKey = this.props.block.getEntityAt(0);
    const entityData = Entity.get(entityKey).getData();
    return entityData.content;
  };

  startEdit = () => {
    const { block, blockProps } = this.props;
    blockProps.onStartEdit(block.getKey());
  };

  finishEdit = (newContentState) => {
    const { block, blockProps } = this.props;
    blockProps.onFinishEdit(block.getKey(), newContentState);
  };

  remove = () => {
    const { block, blockProps } = this.props;
    blockProps.onRemove(block.getKey());
  };

  save = () => {
    const { block, store } = this.props;

    const entityKey = block.getEntityAt(0);
    const editorState = store.getEditorState();

    Entity.mergeData(entityKey, { content: this.state.texValue });

    this.setState({
      invalidTeX: false,
      editMode: false,
      texValue: null,
    }, this.finishEdit.bind(this, editorState));
  };

  render() {
    const { theme, doneContent, removeContent } = this.props;

    let texContent = null;
    if (this.state.editMode) {
      if (this.state.invalidTeX) {
        texContent = '';
      } else {
        texContent = this.state.texValue;
      }
    } else {
      texContent = this.getValue();
    }

    let className = theme.tex;
    if (this.state.editMode) {
      className = unionClassNames(className, theme.activeTeX);
    }

    let editPanel = null;
    if (this.state.editMode) {
      let buttonClass = theme.saveButton;
      if (this.state.invalidTeX) {
        buttonClass = unionClassNames(buttonClass, theme.invalidButton);
      }

      editPanel = (
        <div
          className={theme.panel}
        >
          <textarea
            className={theme.texValue}
            onChange={this.onValueChange}
            ref={(textarea) => { this.textarea = textarea; }}
            value={this.state.texValue}
          />
          <div
            className={theme.buttons}
          >
            <button
              className={buttonClass}
              disabled={this.state.invalidTeX}
              onClick={this.save}
            >
              {this.state.invalidTeX ? doneContent.invalid : doneContent.valid}
            </button>
            <button
              className={theme.removeButton}
              onClick={this.remove}
            >
              {removeContent}
            </button>
          </div>
        </div>
      );
    }

    return (
      <div
        className={className}
      >
        <KatexOutput
          content={texContent}
          onClick={this.onClick}
        />
        {editPanel}
      </div>
    );
  }
}
