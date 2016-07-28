import React, { Component } from 'react';
import { RichUtils } from 'draft-js';
import styles from './styles.css';
import unionClassNames from 'union-class-names';

const style = 'ITALIC';

export default class ItalicButton extends Component {

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

  styleIsActive = () => this.props.getEditorState().getCurrentInlineStyle().has(style);

  render() {
    const className = this.styleIsActive() ? unionClassNames(styles.button, styles.active) : styles.button;
    return (
      <div onMouseDown={this.preventBubblingUp}>
        <button
          className={className}
          onClick={this.toggleStyle}
          type="button"
        >
          I
        </button>
      </div>
    );
  }
}
