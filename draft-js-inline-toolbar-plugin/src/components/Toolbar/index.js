/* eslint-disable react/no-array-index-key */
import React from 'react';
import { getVisibleSelectionRect } from 'draft-js';

// TODO make toolbarHeight to be determined or a parameter
const toolbarHeight = 44;
const padding = 5;

const getRelativeParent = (element) => {
  if (!element) {
    return null;
  }

  const position = window.getComputedStyle(element).getPropertyValue('position');
  if (position !== 'static') {
    return element;
  }

  return getRelativeParent(element.parentElement);
};

export default class Toolbar extends React.Component {

  state = {
    isVisible: false,
    position: undefined,

    /**
     * If this is set, the toolbar will render this instead of the regular
     * structure and will also be shown when the editor loses focus.
     * @type {Component}
     */
    overrideContent: undefined
  }

  componentWillMount() {
    this.props.store.subscribeToItem('selection', this.onSelectionChanged);
  }

  componentWillUnmount() {
    this.props.store.unsubscribeFromItem('selection', this.onSelectionChanged);
  }

  /**
   * This can be called by a child in order to render custom content instead
   * of the regular structure. It's the responsibility of the callee to call
   * this function again with `undefined` in order to reset `overrideContent`.
   * @param {Component} overrideContent
   */
  onOverrideContent = (overrideContent) =>
    this.setState({ overrideContent });

  onSelectionChanged = () => {
    // need to wait a tick for window.getSelection() to be accurate
    // when focusing editor with already present selection
    setTimeout(() => {
      if (!this.toolbar) return;
      const relativeParent = getRelativeParent(this.toolbar.parentElement);
      const relativeRect = (relativeParent || document.body).getBoundingClientRect();
      const selectionRect = getVisibleSelectionRect(window);

      if (!selectionRect) return;

      const toolbarwidth = this.toolbar.clientWidth;

      let left = (selectionRect.left - relativeRect.left) + (selectionRect.width / 2) - (toolbarwidth / 2);

      if (left < padding) {
        left = padding;
      } else if (left > (document.documentElement.clientWidth - toolbarwidth + padding)) {
        left = document.documentElement.clientWidth - toolbarwidth - padding;
      }

      const position = {
        top: (selectionRect.top - relativeRect.top) - toolbarHeight,
        left
      };
      this.setState({ position });
    });
  };

  getStyle() {
    const { store } = this.props;
    const { overrideContent, position } = this.state;
    const selection = store.getItem('getEditorState')().getSelection();
    const isVisible = (!selection.isCollapsed() || overrideContent) && selection.getHasFocus();
    const style = { ...position };

    if (isVisible) {
      style.visibility = 'visible';
      style.transform = 'scale(1)';
      style.transition = 'transform 0.15s cubic-bezier(.3,1.2,.2,1)';
    } else {
      style.transform = 'scale(0)';
      style.visibility = 'hidden';
    }

    return style;
  }

  handleToolbarRef = (node) => {
    this.toolbar = node;
  };

  render() {
    const { theme, store, structure } = this.props;
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
        style={this.getStyle()}
        ref={this.handleToolbarRef}
      >
        {OverrideContent
          ? <OverrideContent {...childrenProps} />
          : structure.map((Component, index) =>
            <Component key={index} {...childrenProps} />)}
      </div>
    );
  }
}
