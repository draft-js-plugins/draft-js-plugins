/* eslint-disable react/no-array-index-key */
import React from 'react';
import { getVisibleSelectionRect } from 'draft-js';

// TODO make toolbarHeight to be determined or a parameter
const toolbarHeight = 44;

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

      const position = {
        top: (selectionRect.top - relativeRect.top) - toolbarHeight,
        left: this.calculateToolbarLeft(selectionRect, relativeRect)
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
      style.transform = 'translate(-50%) scale(1)';
      style.transition = 'transform 0.15s cubic-bezier(.3,1.2,.2,1)';
    } else {
      style.transform = 'translate(-50%) scale(0)';
      style.visibility = 'hidden';
    }

    return style;
  }

  calculateToolbarLeft(selectionRect, relativeRect) {
    const toolbarWidth = this.toolbar.offsetWidth + 4;
    const defualtToolbarLeft = (selectionRect.left - relativeRect.left) + (selectionRect.width / 2);
    const outOfWindowPixlesLeft = defualtToolbarLeft - (toolbarWidth / 2);
    const outOfWindowPixlesRight = relativeRect.width - (defualtToolbarLeft + (toolbarWidth / 2));

    if (outOfWindowPixlesLeft < 0) {
      this.adjustToolbarPointer(outOfWindowPixlesLeft + (toolbarWidth / 2));
      return defualtToolbarLeft + Math.abs(outOfWindowPixlesLeft);
    } else if (outOfWindowPixlesRight < 0) {
      this.adjustToolbarPointer((toolbarWidth / 2) - outOfWindowPixlesRight);
      return defualtToolbarLeft + outOfWindowPixlesRight;
    }

    this.adjustToolbarPointer(toolbarWidth / 2);
    return defualtToolbarLeft;
  }

  handleToolbarRef = (node) => {
    this.toolbar = node;
  };

  adjustToolbarPointer(leftAttribute) {
    const { theme } = this.props;
    const toolbarPointerNode = document.querySelector('.toolbar-pointer');
    const wordPointerStyle = document.createElement('style');

    if (toolbarPointerNode) {
      toolbarPointerNode.remove();
    }

    wordPointerStyle.className = 'toolbar-pointer';

    document.head.appendChild(wordPointerStyle);
    wordPointerStyle.sheet.insertRule(`.${theme.toolbarStyles.toolbar}::after { left: ${leftAttribute}px}`, 0);
    wordPointerStyle.sheet.insertRule(`.${theme.toolbarStyles.toolbar}::before { left: ${leftAttribute}px}`, 0);
  }

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
