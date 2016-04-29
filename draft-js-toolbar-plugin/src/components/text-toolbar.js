import React, { Component } from 'react';
import { RichUtils, Entity } from 'draft-js';
import Toolbar, { renderToolbar } from './toolbar';
import defaultInlineStyles from '../actions/inlineStyles';
import defaultActions from '../actions/custom';
import getSelection from '../utils/getSelection';
import getSelectionRect from '../utils/getSelectionRect';

export default class DraftToolbar extends Component {
  constructor() {
    super();
    this.state = { active: true };
  }

  toggleAction(action, state) {
    if (action.toggle) {
      action.toggle(action, state, this.props.editorState, this.props.setEditorState);
    }
  }

  toggleBlockType(blockType) {
    this.props.setEditorState(
      RichUtils.toggleBlockType(
        this.props.editorState,
        blockType
      )
    );
  }

  toggleInlineStyle(inlineStyle) {
    this.props.setEditorState(
      RichUtils.toggleInlineStyle(
        this.props.editorState,
        inlineStyle
      )
    );
  }

  render() {
    const { editorState } = this.props;
    const inlineStyles = this.props.inlineStyles || defaultInlineStyles;
    const actions = this.props.actions || defaultActions;
    const selectionState = editorState.getSelection();

    // Get current selection (natively)
    const selected = getSelection();

    // Nothing selected? No toolbar please.
    if (!shouldRenderToolbar(this.props)) {
      return null;
    }

    const block = editorState
      .getCurrentContent()
      .getBlockForKey(editorState.getSelection().getStartKey());
    const currentStyle = editorState.getCurrentInlineStyle();

    const items = [
      ...inlineStyles.map(x => ({
        icon: x.icon,
        button: x.button,
        label: x.label,
        active: currentStyle.has(x.style),
        toggle: () => this.toggleInlineStyle(x.style),
      })),
      ...actions.map(x => ({
        icon: x.icon, button: x.button, label: x.label,
        active: typeof x.active === 'function' ? x.active(block, this.state, this.props.editorState) : x.active,
        toggle: (state) => this.toggleAction(x, state),
      })),
    ];

    return (
      <Toolbar
        uid={'text-toolbar'}
        rectGetter={()=>getSelectionRect(selected)}
        {...this.props}
        actions={items}
        active={true}
      />
    );
  }
}

export const renderTextToolbar = function (props) {
  renderToolbar({
    ...props,
    uid: 'text-toolbar',
    active: shouldRenderToolbar(props)
  }, DraftToolbar);
};

const shouldRenderToolbar = props => {
  const { editorState } = props;
  const selected = getSelection();
  const selectionState = editorState.getSelection();
  return selected.rangeCount && !selectionState.isCollapsed();
}
