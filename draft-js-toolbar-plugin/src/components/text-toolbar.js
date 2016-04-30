import React, { Component } from 'react';
import { RichUtils } from 'draft-js';
import Toolbar, { renderToolbar } from './toolbar';
import defaultInlineStyles from '../actions/inlineStyles';
import defaultActions from '../actions/custom';
import getSelection from '../utils/getSelection';
import getSelectionRect from '../utils/getSelectionRect';

// Helper function, is toolbar necessary / is a text selected?
const shouldRenderToolbar = props => {
  const { editorState } = props;
  const selected = getSelection();
  const selectionState = editorState.getSelection();
  return selected.rangeCount && !selectionState.isCollapsed();
};

export default class DraftToolbar extends Component {
  // Toggle custom actions, like make selected text a link
  toggleAction(action) {
    const { editorState, setEditorState } = this.props;
    if (action.toggle) {
      action.toggle(action, editorState, setEditorState);
    }
  }

  // Toggle the block type
  toggleBlockType(blockType) {
    const { editorState, setEditorState } = this.props;
    setEditorState(RichUtils.toggleBlockType(
      editorState,
      blockType
    ));
  }

  // Toggle the inline style
  toggleInlineStyle(inlineStyle) {
    const { editorState, setEditorState } = this.props;
    setEditorState(RichUtils.toggleInlineStyle(
      editorState,
      inlineStyle
    ));
  }

  render() {
    const { editorState } = this.props;
    const inlineStyles = this.props.inlineStyles || defaultInlineStyles;
    const customActions = this.props.actions || defaultActions;

    // Get current style to check what actions are toggled
    const currentStyle = editorState.getCurrentInlineStyle();
    // Get current block
    const block = editorState
      .getCurrentContent()
      .getBlockForKey(editorState.getSelection().getStartKey());

    // Compose final actions
    const actions = [
      ...inlineStyles.map(action => ({
        icon: action.icon,
        button: action.button,
        label: action.label,
        active: currentStyle.has(action.style),
        toggle: () => this.toggleInlineStyle(action.style),
      })),
      ...customActions.map(action => ({
        icon: action.icon,
        button: action.button,
        label: action.label,
        active: typeof action.active === 'function'
          ? action.active(block, editorState)
          : action.active,
        toggle: state => this.toggleAction(action, state),
      })),
    ];

    // Nothing selected? No toolbar please.
    if (!shouldRenderToolbar(this.props)) {
      return (
        <Toolbar {...this.props} actions={actions} />
      );
    }

    return (
      <Toolbar {...this.props} actions={actions} />
    );
  }
}

// Export renderTextToolbar function to allow rendering the toolbar
export const renderTextToolbar = props => {
  renderToolbar({
    ...props,
    uid: 'text-toolbar',
    rectGetter: () => getSelectionRect(getSelection()),
    active: shouldRenderToolbar(props)
  }, DraftToolbar);
};
