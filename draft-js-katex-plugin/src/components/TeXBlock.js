import React, { Component } from 'react';
import katex from 'katex';
import { Entity } from 'draft-js';
import unionClassNames from 'union-class-names';
import KatexOutput from './KatexOutput';

export default class TeXBlock extends Component {
  constructor(props) {
    super(props);
    this.state = { editMode: false };

    this._onClick = () => {
      if (this.state.editMode) {
        return;
      }

      this.setState({
        editMode: true,
        texValue: this._getValue(),
      }, () => {
        this._startEdit();
      });
    };

    this._onValueChange = evt => {
      const value = evt.target.value;
      let invalid = false;
      try {
        katex.__parse(value);
      } catch (e) {
        invalid = true;
      } finally {
        this.setState({
          invalidTeX: invalid,
          texValue: value,
        });
      }
    };

    this._save = () => {
      const { block, store } = this.props;

      const entityKey = block.getEntityAt(0);
      const editorState = store.getEditorState();

      Entity.mergeData(entityKey, { content: this.state.texValue });

      this.setState({
        invalidTeX: false,
        editMode: false,
        texValue: null,
      }, this._finishEdit.bind(this, editorState));
    };

    this._remove = () => {
      const { block, blockProps } = this.props;
      blockProps.onRemove(block.getKey());
    };
    this._startEdit = () => {
      const { block, blockProps } = this.props;
      blockProps.onStartEdit(block.getKey());
    };
    this._finishEdit = (newContentState) => {
      const { block, blockProps } = this.props;
      blockProps.onFinishEdit(block.getKey(), newContentState);
    };
  }

  _getValue() {
    return Entity.get(this.props.block.getEntityAt(0)).getData()['content'];
  }

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
      texContent = this._getValue();
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

      editPanel =
        <div className={theme.panel}>
          <textarea
            className={theme.texValue}
            onChange={this._onValueChange}
            ref="textarea"
            value={this.state.texValue}
          />
          <div className={theme.buttons}>
            <button
              className={buttonClass}
              disabled={this.state.invalidTeX}
              onClick={this._save}>
              {this.state.invalidTeX ? doneContent.invalid : doneContent.valid}
            </button>
            <button className={theme.removeButton} onClick={this._remove}>
              {removeContent}
            </button>
          </div>
        </div>;
    }

    return (
      <div className={className}>
        <KatexOutput content={texContent} onClick={this._onClick} />
        {editPanel}
      </div>
    );
  }
}
