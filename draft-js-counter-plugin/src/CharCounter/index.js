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

  getClassNames(count, limit) {
    const { theme = Map(), className } = this.props;
    const defaultStyle = unionClassNames(theme.get('counter'), className);
    const overLimitStyle = unionClassNames(theme.get('overLimit'), className);
    return count > limit ? overLimitStyle : defaultStyle;
  }

  render() {
    const { editorState, limit, ...props } = this.props; // eslint-disable-line no-use-before-define
    const count = this.getCharCount(editorState);
    const classNames = this.getClassNames(count, limit);

    return <span className={ classNames }>{count}</span>;
  }
}

export default CharCounter;
