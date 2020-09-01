/* eslint-disable react/no-children-prop */
import React, { Component } from 'react';
import { RichUtils } from 'draft-js';
import clsx from 'clsx';

export default ({ blockType, children }) =>
  class BlockStyleButton extends Component {
    toggleStyle = event => {
      event.preventDefault();
      this.props.setEditorState(
        RichUtils.toggleBlockType(this.props.getEditorState(), blockType)
      );
    };

    preventBubblingUp = event => {
      event.preventDefault();
    };

    blockTypeIsActive = () => {
      // if the button is rendered before the editor
      if (!this.props.getEditorState) {
        return false;
      }

      const editorState = this.props.getEditorState();
      const type = editorState
        .getCurrentContent()
        .getBlockForKey(editorState.getSelection().getStartKey())
        .getType();
      return type === blockType;
    };

    render() {
      const { theme } = this.props;
      const className = this.blockTypeIsActive()
        ? clsx(theme.button, theme.active)
        : theme.button;
      return (
        <div
          className={theme.buttonWrapper}
          onMouseDown={this.preventBubblingUp}
        >
          <button
            className={className}
            onClick={this.toggleStyle}
            type="button"
            children={children}
          />
        </div>
      );
    }
  };
