import React, { Component, PropTypes } from 'react';
import unionClassNames from 'union-class-names';
import { Map } from 'immutable';
import punycode from 'punycode';

class CharCounter extends Component {

  static propTypes = {
    editorState: PropTypes.any.isRequired,
    theme: PropTypes.any,
  };

  getCharCount(editorState) {
    const decodeUnicode = str => punycode.ucs2.decode(str); // func to handle unicode characters
    const plainText = editorState.getCurrentContent().getPlainText('');
    const regex = /(?:\r\n|\r|\n)/g;  // new line, carriage return, line feed
    const cleanString = plainText.replace(regex, '').trim();  // replace above characters w/ nothing
    return decodeUnicode(cleanString).length;
  }

  getClassNames(count, limit) {
    const { theme = Map(), className } = this.props;
    const defaultStyle = unionClassNames(theme.get('counter'), className);
    const overLimitStyle = unionClassNames(theme.get('overLimit'), className);
    return count > limit ? overLimitStyle : defaultStyle;
  }

  render() {
    const { editorState, limit } = this.props;
    const count = this.getCharCount(editorState);
    const classNames = this.getClassNames(count, limit);

    return <span className={ classNames }>{count}</span>;
  }
}

export default CharCounter;
