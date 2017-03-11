import { EditorState, Entity } from 'draft-js';
import decorateComponentWithProps from 'decorate-component-with-props';
import TeXBlock from './components/TeXBlock';
import removeTeXBlock from './modifiers/removeTeXBlock';
import InsertButton from './components/InsertKatexButton';

import styles from './styles.css';

export default (config = {}) => {
  const theme = Object.assign(styles, config.theme || {});
  const insertContent = config.insertContent || 'Ω';
  const doneContent = config.doneContent || { valid: 'Done', invalid: 'Invalid TeX' };
  const removeContent = config.removeContent || 'Remove';

  const store = {
    getEditorState: undefined,
    setEditorState: undefined,
    getReadOnly: undefined,
    setReadOnly: undefined,
    onChange: undefined
  };

  const liveTeXEdits = new Map();

  return {
    initialize: ({ getEditorState, setEditorState, getReadOnly, setReadOnly }) => {
      store.getEditorState = getEditorState;
      store.setEditorState = setEditorState;
      store.getReadOnly = getReadOnly;
      store.setReadOnly = setReadOnly;
    },

    blockRendererFn: (block) => {
      if (block.getType() === 'atomic') {
        const entity = Entity.get(block.getEntityAt(0));
        const type = entity.getType();

        if (type === 'kateX') {
          return {
            component: decorateComponentWithProps(TeXBlock, { theme, store, doneContent, removeContent }),
            editable: false,
            props: {
              onStartEdit: (blockKey) => {
                liveTeXEdits.set(blockKey, true);
                store.setReadOnly(liveTeXEdits.size);
              },

              onFinishEdit: (blockKey, newEditorState) => {
                liveTeXEdits.delete(blockKey);
                store.setReadOnly(liveTeXEdits.size);
                store.setEditorState(EditorState.forceSelection(newEditorState, newEditorState.getSelection()));
              },

              onRemove: (blockKey) => {
                liveTeXEdits.delete(blockKey);
                const editorState = store.getEditorState();
                const newEditorState = removeTeXBlock(editorState, blockKey);
                store.setEditorState(newEditorState);
              },
            }
          };
        }
      }
      return null;
    },
    InsertButton: decorateComponentWithProps(InsertButton, { theme, store, children: insertContent })
  };
};
