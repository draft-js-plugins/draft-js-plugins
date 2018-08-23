/* eslint-disable react/no-array-index-key */
import React from 'react';
import {
  ItalicButton,
  BoldButton,
  UnderlineButton,
  CodeButton,
} from 'draft-js-buttons';
import PropTypes from 'prop-types';

class Toolbar extends React.Component {

  state = {
    /**
     * If this is set, the toolbar will render this instead of the regular
     * structure and will also be shown when the editor loses focus.
     * @type {Component}
     */
    overrideContent: undefined
  }

  // componentWillMount() {
  //   this.props.store.subscribeToItem('selection', () => this.forceUpdate());
  // }

  // componentWillUnmount() {
  //   this.props.store.unsubscribeFromItem('selection', () => this.forceUpdate());
  // }

  /**
   * This can be called by a child in order to render custom content instead
   * of the regular structure. It's the responsibility of the callee to call
   * this function again with `undefined` in order to reset `overrideContent`.
   * @param {Component} overrideContent
   */
  onOverrideContent = (overrideContent) => this.setState({ overrideContent });

  renderDefaultButtons = (externalProps) => (
    <div>
      <ItalicButton {...externalProps} />
      <BoldButton {...externalProps} />
      <UnderlineButton {...externalProps} />
      <CodeButton {...externalProps} />
    </div>
  );

  render() {
    const { theme, store } = this.props;
    const { overrideContent: OverrideContent } = this.state;
    const childrenProps = {
      theme: theme.buttonStyles,
      getEditorState: store.getItem('getEditorState'),
      setEditorState: store.getItem('setEditorState'),
      onOverrideContent: this.onOverrideContent
    };

    return (
      <div
        className={theme.toolbarStyles.toolbar}
      >
        {OverrideContent
          ? <OverrideContent {...childrenProps} />
          : (this.props.children || this.renderDefaultButtons)(childrenProps)}
      </div>
    );
  }
}

Toolbar.propTypes = {
  children: PropTypes.func
};

export default Toolbar;
