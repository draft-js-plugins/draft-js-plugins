/* eslint-disable react/no-children-prop */
import React, { Component } from 'react';
import unionClassNames from 'union-class-names';

export default ({ children }) => (
  class OnClickButton extends Component {

    activate = (event) => {
      event.preventDefault();
      this.props.onClick({
        getEditorState: this.props.getEditorState,
        setEditorState: this.props.setEditorState
      });
    }

    preventBubblingUp = (event) => { event.preventDefault(); }

    // we check if this.props.getEditorState is undefined first in case the button is rendered before the editor
    styleIsActive = () => false;

    render() {
      const { theme } = this.props;
      const className = this.styleIsActive() ? unionClassNames(theme.button, theme.active) : theme.button;
      return (
        <div
          className={theme.buttonWrapper}
          onMouseDown={this.preventBubblingUp}
        >
          <button
            className={className}
            onClick={this.activate}
            type="button"
            children={children}
          />
        </div>
      );
    }
  }
);
