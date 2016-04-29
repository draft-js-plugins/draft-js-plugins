import React from 'react';
import { RichUtils, Entity } from 'draft-js';

export default [
  {
    label: 'Link',
    button: <span>Link</span>,
    style: 'link',
    active: (block, editorState) => {
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
];
