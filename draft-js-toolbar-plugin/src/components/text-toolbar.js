import React, { Component } from 'react';
import { RichUtils, Entity } from 'draft-js';
import Toolbar from './toolbar';
import defaultInlineStyles from '../actions/inlineStyles';
import defaultActions from '../actions/custom';
import getSelection from '../utils/getSelection';
import getSelectionRect from '../utils/getSelectionRect';

export default class DraftToolbar extends Component {
  constructor() {
    super();
    this.state = { active: true };
  }

  componentDidMount() {
    const { plugin } = this.props;
    plugin.onBlur = () => this.setState({ active: false });
    plugin.onFocus = () => this.setState({ active: true });

    // I'm getting catched by shouldComponentUpdate
    // TODO find cleaner way
    setInterval(() => {
      this.setState({ });
    }, 200);
  }

  shouldComponentUpdate(props, state) {
    this.browserSelection = getSelection();
    this.editorSelection = props.editorState.getSelection();
    return this.browserSelection.isCollapsed === this.editorSelection.isCollapsed() || state.active !== this.state.active;
  }

  toggleAction(action, state) {
    if (action.toggle) {
      action.toggle(action, state, this.props.editorState, this.props.onChange);
    }
  }

  toggleBlockType(blockType) {
    this.props.onChange(
      RichUtils.toggleBlockType(
        this.props.editorState,
        blockType
      )
    );
  }

  toggleInlineStyle(inlineStyle) {
    this.props.onChange(
      RichUtils.toggleInlineStyle(
        this.props.editorState,
        inlineStyle
      )
    );
  }

  render() {
    const { active } = this.state;
    const { editorState, plugin } = this.props;
    const inlineStyles = this.props.inlineStyles || defaultInlineStyles;
    const actions = this.props.actions || defaultActions;

    if (!active) return null;

    const rect = getSelectionRect(this.browserSelection);

    if (!rect || this.editorSelection.isCollapsed()) return null;

    const info = { left: rect.left, top: rect.top, width: rect.width };
    const currentStyle = editorState.getCurrentInlineStyle();
    const block = editorState
      .getCurrentContent()
      .getBlockForKey(editorState.getSelection().getStartKey());

    // const blockType = block.getType();
    // ...blockTypes.map(x => ({ icon: x.icon, button: x.button, label: x.label, active: blockType === x.style, toggle: () => this.toggleBlockType(x.style) })),

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
        clearAll={true}
        {...info}
        {...this.props}
        actions={items}
        theme={plugin.theme}
        active={true}
      />
    );
  }
}
