import React from 'react'
import linkStrategy from './linkStrategy';
import Link from './Link';
import LinkButton from './LinkButton'
import styles from './styles.css';

import decorateComponentWithProps from 'decorate-component-with-props';

const linkPlugin = (config = {}) => {
  const theme = config.theme || styles;

  // TODO: Can we somehow avoid global variables like these? this is pretty ugly - 2016-06-28
  var store = {
    getEditorState: undefined,
    setEditorState: undefined,
    active: false,
  };

  return {
    onChange: (editorState) => {
      /*
       * Determine active state of the current selection
      */
     console.log('called onChange');
      const selection = editorState.getSelection();
      const block = editorState
        .getCurrentContent()
        .getBlockForKey(editorState.getSelection().getStartKey());

      block.findEntityRanges(
        (character) => {
          const entityKey = character.getEntity();
          console.log("value");
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

      return editorState
    },
    initialize: ({getEditorState, setEditorState}) => {
      console.log("initialize called...");
      store.getEditorState = getEditorState;
      store.setEditorState = setEditorState;

      console.log(store);
    },
    decorators: [{
      strategy: linkStrategy,
      component: (props) => <Link {...props} theme={theme} />,
    }],
    // LinkButton: (props) => (
    //     <LinkButton {...props} theme={theme} store={store}/>
    //   ),
    LinkButton: decorateComponentWithProps(LinkButton, { theme, store }),
  };
};

export default linkPlugin;
