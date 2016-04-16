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
    const regex = /(?:\r\n|\r|\n)/g;  // new line, carriage return, line feed
    const cleanString = plainText.replace(regex, ' ').trim(); // replace above characters w/ space
    const wordArray = cleanString.match(/\S+/g);  // matches words according to whitespace
    return wordArray ? wordArray.length : 0;
  }

  getClassNames(count, limit) {
    const { theme = Map(), className } = this.props;
    const defaultStyle = unionClassNames(theme.get('counter'), className);
    const overLimitStyle = unionClassNames(theme.get('overLimit'), className);
    return count > limit ? overLimitStyle : defaultStyle;
  }

  render() {
    const { editorState, limit } = this.props;
    const count = this.getWordCount(editorState);
    const classNames = this.getClassNames(count, limit);

    return <span className={ classNames }>{count}</span>;
  }
}

export default WordCounter;
