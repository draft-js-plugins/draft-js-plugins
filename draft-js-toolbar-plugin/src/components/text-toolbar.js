import React, { Component } from 'react';
import { RichUtils, Entity } from 'draft-js';
import Toolbar from './toolbar';

function getSelection() {
  if (window.getSelection) {
    return window.getSelection();
  } else if (document.getSelection) {
    return document.getSelection();
  } else if (document.selection) {
    return document.selection.createRange().text;
  } return undefined;
}

function getSelectionRect(selected) {
  if (!selected || !selected.rangeCount || selected.isCollapsed) return null;

  const _rect = selected.getRangeAt(0).getBoundingClientRect();
  let rect = _rect && _rect.top ? _rect : selected.getRangeAt(0).getClientRects()[0];// selected.getRangeAt(0).getBoundingClientRect()
  if (!rect) {
    if (selected.anchorNode && selected.anchorNode.getBoundingClientRect) {
      rect = selected.anchorNode.getBoundingClientRect();
      rect.isEmptyline = true;
    } else {
      return null;
    }
  }

  return rect;
}

export default class DraftToolbar extends Component {
  shouldComponentUpdate(props) {
    this.browserSelection = getSelection();
    this.editorSelection = props.editorState.getSelection();
    return this.browserSelection.isCollapsed === this.editorSelection.isCollapsed();
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
    const { editorState, blockTypes, inlineStyles, actions } = this.props;

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
      ...inlineStyles.map(x => ({ icon: x.icon, button: x.button, label: x.label, active: currentStyle.has(x.style), toggle: () => this.toggleInlineStyle(x.style) })),
      ...actions.map(x => ({
        icon: x.icon, button: x.button, label: x.label,
        active: typeof x.active === 'function' ? x.active(block, this.state, this.props.editorState) : x.active,
        toggle: (state) => this.toggleAction(x, state),
      })),
    ];

    return (
        <Toolbar {...info} {...this.props} actions={items} />
     );
  }
}

DraftToolbar.defaultProps = {
  editorState: null,
  actions: [
      { label: 'Link', button: <span>Link</span>, style: 'link', active: (block, state, editorState) => {
        let active;
        const selection = editorState.getSelection();
        block.findEntityRanges(
             (character) => {
               const entityKey = character.getEntity();
               return entityKey !== null && Entity.get(entityKey).getType() === 'link';
             },

             (start, end) => {
               if (block.getKey() === selection.anchorKey && selection.anchorKey === selection.focusKey) {
                 if (selection.anchorOffset >= start && selection.focusOffset <= end) {
                   active = true;
                 }
               }
             }
         );
        return active;
      },
      toggle: (action, state, editorState, onChange) => {
        const selection = editorState.getSelection();
        if (selection.isCollapsed()) {
          return;
        }

        if (state.active) {
          onChange(RichUtils.toggleLink(editorState, selection, null));
        } else {
          const href = window.prompt('Enter a URL'); // eslint-disable-line no-alert
          const entityKey = Entity.create('link', 'MUTABLE', { href });
          onChange(RichUtils.toggleLink(editorState, selection, entityKey));
        }
      },
      },
  ],
  inlineStyles: [
     { label: 'Bold', button: <b>B</b>, style: 'BOLD' },
     { label: 'Italic', button: <i>I</i>, style: 'ITALIC' },
     { label: 'Underline', button: <u>U</u>, style: 'UNDERLINE' },
  ],
  blockTypes: [
     { label: 'H1', button: <span>H1</span>, style: 'header-1' },
     { label: 'H2', button: <span>H2</span>, style: 'header-2' },
     { label: 'H3', button: <span>H3</span>, style: 'header-3' },
     { label: 'H4', button: <span>H4</span>, style: 'header-4' },
     { label: 'Blockquote', button: <i>"</i>, style: 'blockquote' },
     { label: 'UL', button: <span>UL</span>, style: 'unordered-list-item' },
     { label: 'OL', button: <span>OL</span>, style: 'ordered-list-item' },
     { label: 'Code Block', button: <span>#</span>, style: 'code-block' },
  ],
};

