import React, { Component, PropTypes } from 'react';
import unionClassNames from 'union-class-names';
import insertTeXBlock from '../modifiers/insertTeXBlock';

export default class InsertKatexButton extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    theme: PropTypes.any,
  };

  onClick = () => {
    const { store } = this.props;
    const editorState = store.getEditorState();
    store.setEditorState(insertTeXBlock(editorState));
  };

  render() {
    const { theme = {}, className, children } = this.props;
    const combinedClassName = unionClassNames(theme.insertButton, className);

    return (
      <button
        className={combinedClassName}
        onClick={this.onClick}
      >
        {children}
      </button>
    );
  }
}
