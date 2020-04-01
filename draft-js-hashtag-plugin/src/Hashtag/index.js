import React, { Component } from 'react';
import clsx from 'clsx';

export default class Hashtag extends Component {
  render() {
    const {
      theme = {},
      className,
      decoratedText, // eslint-disable-line no-unused-vars
      dir, // eslint-disable-line no-unused-vars
      entityKey, // eslint-disable-line no-unused-vars
      getEditorState, // eslint-disable-line no-unused-vars
      offsetKey, // eslint-disable-line no-unused-vars
      setEditorState, // eslint-disable-line no-unused-vars
      contentState, // eslint-disable-line no-unused-vars
      blockKey, // eslint-disable-line no-unused-vars
      ...otherProps
    } = this.props; // eslint-disable-line no-use-before-define
    const combinedClassName = clsx(theme.hashtag, className);
    return <span {...otherProps} className={combinedClassName} />;
  }
}
