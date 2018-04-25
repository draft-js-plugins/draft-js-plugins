/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
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
  static propTypes = {
    /**
     * An indents from the left / right window borders
     */
    toolbarMargin: PropTypes.number
  };

  static defaultProps = {
    toolbarMargin: 5
  };

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
       * We are holding default toolbar width to prevent geometry changing, that
       * happens very often
       */
      width: null,
      /**
       * this is an additional unique toolbar class that will be used to
       * manipulate css arrow position
       * @type {string}
       */
      pointerClassName: '',
      /**
       * pointerClassName internals here. It could look like: "{ left: 1px; }"
       * @type {number|string}
       */
      shift: 0
    };

    // we need to flush toolbar styles on each appearance (especially its width)
    this.toolbar = null;
  }

  componentWillMount() {
    this.props.store.subscribeToItem('selection', this.onSelectionChanged);
    this.setState({ pointerClassName: `draft-js-inline-toolbar-pointer-${genKey()}` });
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
  };

  onSelectionChanged = () => {
    // need to wait a tick for window.getSelection() to be accurate
    // when focusing editor with already present selection
    setTimeout(() => {
      if (!this.toolbar) return;

      if (typeof this.state.width !== 'number') {
        this.setState({ width: this.toolbar.offsetWidth });
      }

      const newState = {};
      const metrics = {
        rule: 'left',
        ruleValue: 0,
        shift: null,
        shiftValue: 0
      };
      // boundings of the selected text
      const selectionRect = getVisibleSelectionRect(window);
      const selection = this.props.store.getItem('getEditorState')().getSelection();
      if (!selectionRect || selection.isCollapsed()) return;

      const relativeParent = getRelativeParent(this.toolbar.parentElement);
      const relativeRect = (relativeParent || document.body).getBoundingClientRect();
      const windowWidth = document.documentElement.clientWidth;

      // if parent block width is wider than the toolbar, we must forcibly set its
      // height to prevent unexpected geometry changes
      if (windowWidth > this.toolbar.offsetWidth) {
        this.toolbar.style.width = `${this.state.width}px`;
      }

      const toolbarHalfWidth = this.toolbar.offsetWidth / 2;
      // calculating the middle of the text selection
      const fromBeginningToMiddle = (selectionRect.left + (selectionRect.width / 2));
      // the same but against editor right side
      const beforeWindowEnd = windowWidth - fromBeginningToMiddle;

      // the selection is closer to parent beginning than half of the toolbar
      // +-----------------------------------------------+
      // |          vv toolbar                           |
      // | +------------------+                          |
      // | +------------------+                          |
      // |                                               |
      // |  +--+                                         |
      // |   ^^ selection                                |
      // +-----------------------------------------------+
      if (fromBeginningToMiddle < toolbarHalfWidth) {
        // shift computations are different for relative editor and body
        const leftShift = relativeParent
          ? relativeRect.left
          : 0;
        metrics.ruleValue = (toolbarHalfWidth - leftShift) + this.props.toolbarMargin;
        metrics.shift = 'left';
      } else if (beforeWindowEnd < toolbarHalfWidth) {
        // the same, but relative to the parent end
        // +-----------------------------------------------+
        // |                                 vvv toolbar   |
        // |                            +---------------+  |
        // |                            +---------------+  |
        // |                                               |
        // |                                      +--+     |
        // |                             selection ^^      |
        // |                                               |
        // +-----------------------------------------------+
        // shift computations are different for relative editor and body
        const rightShift = relativeParent
          ? windowWidth - relativeRect.right
          : 0;
        metrics.ruleValue = (-toolbarHalfWidth - rightShift) + this.props.toolbarMargin;
        metrics.rule = 'right';
        metrics.shift = 'right';
      } else {
        // selection somewhere in the middle within the parent and there is a
        // free place for toolbar
        metrics.ruleValue = (selectionRect.left - relativeRect.left)
          + (selectionRect.width / 2);
      }

      if (typeof metrics.shift === 'string') {
        if (metrics.shift === 'left') {
          metrics.shiftValue = fromBeginningToMiddle - this.props.toolbarMargin;
        } else {
          metrics.shiftValue = this.toolbar.offsetWidth -
            (windowWidth - (selectionRect.right - (selectionRect.width / 2)) -
            this.props.toolbarMargin);
        }

        newState.shift = `{ left: ${metrics.shiftValue}px; }`;
      } else {
        // explicitly set to zero, because it may already be mutated
        newState.shift = 0;
      }

      const position = {
        top: (selectionRect.top - relativeRect.top) - this.toolbar.offsetHeight - 10,
        [metrics.rule]: metrics.ruleValue
      };
      this.setState({
        position,
        ...newState
      });
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
    const { overrideContent: OverrideContent, pointerClassName, shift } = this.state;
    const childrenProps = {
      theme: theme.buttonStyles,
      getEditorState: store.getItem('getEditorState'),
      setEditorState: store.getItem('setEditorState'),
      onOverrideContent: this.onOverrideContent
    };

    return (
      <div
        className={[theme.toolbarStyles.toolbar, pointerClassName].join(' ')}
        style={this.getStyle()}
        ref={this.handleToolbarRef}
      >
        {shift !== 0 &&
          <style>{`.${pointerClassName}::before, .${pointerClassName}::after${shift};`}</style>}
        {OverrideContent
          ? <OverrideContent {...childrenProps} />
          : structure.map((Component, index) =>
            <Component key={index} {...childrenProps} />)}
      </div>
    );
  }
}
