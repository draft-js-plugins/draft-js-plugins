/* eslint-disable react/no-children-prop */
import React, { Component } from 'react';
import { RichUtils } from 'draft-js';
import unionClassNames from 'union-class-names';

export default ({ style, children }) => (
  class InlineStyleButton extends Component {

    toggleStyle = (event) => {
      event.preventDefault();
      this.props.setEditorState(
        RichUtils.toggleInlineStyle(
          this.props.getEditorState(),
          style
        )
      );
    }

    preventBubblingUp = (event) => { event.preventDefault(); }

    // we check if this.props.getEditorstate is undefined first in case the button is rendered before the editor
    styleIsActive = () => this.props.getEditorState && this.props.getEditorState().getCurrentInlineStyle().has(style);

    render() {
      const { theme, wrapIcon } = this.props;
      const isActive = this.styleIsActive();
      const className = isActive ? unionClassNames(theme.button, theme.active) : theme.button;
      let icon = children;

      if (wrapIcon) {
        icon = wrapIcon('inline', style, icon, isActive);
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
