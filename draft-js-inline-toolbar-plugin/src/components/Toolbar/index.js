/* eslint-disable react/no-array-index-key */
import React from 'react';
import { getVisibleSelectionRect, genKey } from 'draft-js';

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
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      position: undefined,

      /**
       * If this is set, the toolbar will render this instead of the regular
       * structure and will also be shown when the editor loses focus.
       * @type {Component}
       */
      overrideContent: undefined,
      /**
       * We should use different classNames for toolbars within different Editor
       * instances
       */
      nonce: null,
      /**
       * We are holding default toolbar width to prevent geometry changing, that
       * happens very often
       */
      width: null
    };

    // we need to flush toolbar styles on each appearance (especially its width)
    this.toolbar = null;
  }

  componentWillMount() {
    this.props.store.subscribeToItem('selection', this.onSelectionChanged);
    this.setState({ nonce: genKey() });
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
  onOverrideContent = (overrideContent) => {
    this.setState({ overrideContent });
  }

  onSelectionChanged = () => {
    // need to wait a tick for window.getSelection() to be accurate
    // when focusing editor with already present selection
    setTimeout(() => {
      if (!this.toolbar) return;

      if (typeof this.state.width !== 'number') {
        this.setState({ width: this.toolbar.offsetWidth });
      }

      const metrics = {
        rule: 'left',
        ruleValue: 0,
        shift: null,
        shiftValue: 0
      };

      const selectionRect = getVisibleSelectionRect(window);
      if (!selectionRect) return;

      const relativeParent = getRelativeParent(this.toolbar.parentElement);
      const relativeRect = (relativeParent || document.body).getBoundingClientRect();

      // if parentWidth is wider than the toolbar, we must forcibly set its
      // height to prevent unexpected geometry changes
      if (relativeRect.width > this.toolbar.offsetWidth) {
        this.toolbar.style.width = `${this.state.width}px`;
      }

      const toolbarHalfWidth = this.toolbar.offsetWidth / 2;

      const fromBeginningToMiddle = (selectionRect.left + (selectionRect.width / 2));
      const fromParentBeginning = fromBeginningToMiddle - relativeRect.left;
      const beforeParentEnd = relativeRect.right - fromBeginningToMiddle;

      // the selection is closer to parent beginning than half of the toolbar
      if (fromParentBeginning < toolbarHalfWidth) {
        metrics.ruleValue = toolbarHalfWidth;
        metrics.shift = 'left';
      } else if (beforeParentEnd < toolbarHalfWidth) {
        // the same, but relative to the parent end
        metrics.ruleValue = -toolbarHalfWidth;
        metrics.rule = 'right';
        metrics.shift = 'right';
      } else {
        // selection somewhere in the middle within the parent and there is a
        // free place for toolbar
        metrics.ruleValue = (selectionRect.left - relativeRect.left)
          + (selectionRect.width / 2);
      }

      const pointerClassName = 'draft-js-inline-toolbar-pointer';
      const styleId = 'draft-js-inline-toolbar-pointer-pseudo';

      if (this.toolbar.classList.contains(pointerClassName)) {
        this.toolbar.classList.remove(pointerClassName);
      }
      // We are recreating style element on every toolbar appearance. It is
      // better for us to use individual style element rather than join new
      // styles to some of the existent elements, because we can easely remove
      // it next time
      if (document.getElementById(`${styleId}-${this.state.nonce}`)) {
        document.head.removeChild(
          document.getElementById(`${styleId}-${this.state.nonce}`)
        );
      }

      if (typeof metrics.shift === 'string') {
        const styleEl = document.createElement('style');
        styleEl.setAttribute('id', `${styleId}-${this.state.nonce}`);
        document.head.appendChild(styleEl);
        this.toolbar.classList.add(pointerClassName);

        if (metrics.shift === 'left') {
          metrics.shiftValue = toolbarHalfWidth - metrics.ruleValue -
            fromParentBeginning;
        } else {
          metrics.shiftValue = this.toolbar.offsetWidth -
            (relativeRect.right - (selectionRect.right + (selectionRect.width / 2)));
        }

        styleEl.sheet.insertRule(`.${pointerClassName}::after { left: ${metrics.shiftValue}px}`, 0);
        styleEl.sheet.insertRule(`.${pointerClassName}::before { left: ${metrics.shiftValue}px}`, 0);
      }

      const position = {
        top: (selectionRect.top - relativeRect.top) - this.toolbar.offsetHeight - 10,
        [metrics.rule]: metrics.ruleValue
      };
      this.setState({ position });
    });
  };

  getStyle() {
    const { store } = this.props;
    const { overrideContent, position } = this.state;
    const selection = store.getItem('getEditorState')().getSelection();
    // overrideContent could for example contain a text input, hence we always show overrideContent
    // TODO: Test readonly mode and possibly set isVisible to false if the editor is readonly
    const isVisible = (!selection.isCollapsed() && selection.getHasFocus()) || overrideContent;
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
