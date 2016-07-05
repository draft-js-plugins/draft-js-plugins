import React from 'react';
import linkStrategy from './linkStrategy';
import Link from './Link';
import LinkButton from './LinkButton';
import styles from './styles.css';
import { Entity } from 'draft-js';

const linkPlugin = (config = {}) => {
  const theme = config.theme || styles;

  // TODO: Can we somehow avoid global variables like these? this is pretty ugly - 2016-06-28
  const store = {
    getEditorState: undefined,
    setEditorState: undefined,
    active: false,
  };

  return {
    onChange: (editorState) => {
      /*
       * Determine active state of the current selection
      */
      const selection = editorState.getSelection();
      const block = editorState
        .getCurrentContent()
        .getBlockForKey(editorState.getSelection().getStartKey());

      block.findEntityRanges(
        (character) => {
          const entityKey = character.getEntity();
          store.active = entityKey !== null && Entity.get(entityKey).getType() === 'LINK';
        },

        (start, end) => {
          if (block.getKey() === selection.anchorKey && selection.anchorKey === selection.focusKey) {
            if (selection.anchorOffset >= start && selection.focusOffset <= end) {
              store.active = true;
            }
          }
        }
      );

      return editorState;
    },
    initialize: ({ getEditorState, setEditorState }) => {
      store.getEditorState = getEditorState;
      store.setEditorState = setEditorState;
    },
    decorators: [{
      strategy: linkStrategy,
      component: (props) => <Link {...props} theme={theme} />,
    }],
    LinkButton: (props) => (
        <LinkButton {...props} theme={theme} store={store} />
      ),
    // LinkButton: decorateComponentWithProps(LinkButton, { theme, store }),
  };
};

export default linkPlugin;
