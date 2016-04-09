import React, { Component, PropTypes } from 'react';
import unionClassNames from 'union-class-names';
import { Map } from 'immutable';

class WordCounter extends Component {

  static propTypes = {
    editorState: PropTypes.any.isRequired,
    theme: PropTypes.any,
  };

  getWordCount(editorState) {
    const plainText = editorState.getCurrentContent().getPlainText('');
    const cleanString = plainText.replace(/(?:\r\n|\r|\n)/g, '').trim();
    const wordArray = cleanString.match(/\S+/g);
    return wordArray ? wordArray.length : 0;
  }

  render() {
    const { theme = Map(), editorState, className, ...props } = this.props; // eslint-disable-line no-use-before-define
    const combinedClassName = unionClassNames(theme.get('charCounter'), className);
    const count = this.getWordCount(editorState);

    return <span className={ combinedClassName }>{count}</span>;
  }
}

export default WordCounter;
