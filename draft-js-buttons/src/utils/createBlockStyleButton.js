/* eslint-disable react/no-children-prop */
import React, { Component } from 'react';
import { RichUtils } from 'draft-js';
import unionClassNames from 'union-class-names';

export default ({ blockType, children }) => (
  class BlockStyleButton extends Component {

    toggleStyle = (event) => {
      event.preventDefault();
      this.props.setEditorState(
        RichUtils.toggleBlockType(
          this.props.getEditorState(),
          blockType
        )
      );
    }

    preventBubblingUp = (event) => { event.preventDefault(); }

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
    }

    render() {
      const { theme, wrapIcon } = this.props;
      const isActive = this.blockTypeIsActive();
      const className = isActive ? unionClassNames(theme.button, theme.active) : theme.button;
      let icon = children;

      if (wrapIcon) {
        icon = wrapIcon(icon, isActive);
      }

      return (
        <div
          className={theme.buttonWrapper}
          onMouseDown={this.preventBubblingUp}
        >
          <button
            className={className}
            onClick={this.toggleStyle}
            type="button"
            children={icon}
          />
        </div>
      );
    }
  }
);
