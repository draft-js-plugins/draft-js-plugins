import { EditorState } from 'draft-js';
import decorateComponentWithProps from 'decorate-component-with-props';
import createDecorator from './createDecorator';
import AlignmentTool from './AlignmentTool';
import createStore from './utils/createStore';
import buttonStyles from './buttonStyles.css';
import alignmentToolStyles from './alignmentToolStyles.css';

const store = createStore({
  isVisible: false,
});

const createSetAlignment = (contentBlock, { getEditorState, setEditorState }) => (data) => {
  const entityKey = contentBlock.getEntityAt(0);
  if (entityKey) {
    const editorState = getEditorState();
    const contentState = editorState.getCurrentContent();
    contentState.mergeEntityData(entityKey, { ...data });
    setEditorState(EditorState.forceSelection(editorState, editorState.getSelection()));
  }
};

export default (config = {}) => {
  const defaultAlignmentToolTheme = {
    buttonStyles,
    alignmentToolStyles,
  };

  const {
    theme = defaultAlignmentToolTheme,
  } = config;

  const alignmentToolProps = {
    store,
    theme,
  };

  return {
    initialize: ({ getReadOnly, getEditorState, setEditorState }) => {
      store.updateItem('getReadOnly', getReadOnly);
      store.updateItem('getEditorState', getEditorState);
      store.updateItem('setEditorState', setEditorState);
    },
    decorator: createDecorator({ config, store }),
    blockRendererFn: (contentBlock, { getEditorState, setEditorState }) => {
      const entityKey = contentBlock.getEntityAt(0);
      const contentState = getEditorState().getCurrentContent();
      const alignmentData = entityKey ? contentState.getEntity(entityKey).data : {};
      return {
        props: {
          alignment: alignmentData.alignment || 'default',
          setAlignment: createSetAlignment(contentBlock, { getEditorState, setEditorState }),
        },
      };
    },
    AlignmentTool: decorateComponentWithProps(AlignmentTool, alignmentToolProps),
  };
};
