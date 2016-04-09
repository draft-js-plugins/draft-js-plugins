import React, { Component, PropTypes } from 'react';
import unionClassNames from 'union-class-names';
import { Map } from 'immutable';

class CharCounter extends Component {

  static propTypes = {
    editorState: PropTypes.any.isRequired,
    theme: PropTypes.any,
  };

  getCharCount(editorState) {
    const plainText = editorState.getCurrentContent().getPlainText('');
    const cleanString = plainText.replace(/(?:\r\n|\r|\n)/g, '').trim();
    return cleanString.length;
  }

  render() {
    const { theme = Map(), editorState, className, ...props } = this.props; // eslint-disable-line no-use-before-define
    const combinedClassName = unionClassNames(theme.get('charCounter'), className);
    const count = this.getCharCount(editorState);

    return <span className={ combinedClassName }>{count}</span>;
  }
}

export default CharCounter;
