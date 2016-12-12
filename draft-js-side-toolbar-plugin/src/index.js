import decorateComponentWithProps from 'decorate-component-with-props';
import createStore from './utils/createStore';
import Toolbar from './components/Toolbar';
import DefaultBlockTypeSelect from './components/DefaultBlockTypeSelect';
import buttonStyles from './buttonStyles.css';
import blockTypeSelectStyles from './blockTypeSelectStyles.css';
import toolbarStyles from './toolbarStyles.css';

const createSideToolbarPlugin = (config = {}) => {
  const defaultTheme = { buttonStyles, blockTypeSelectStyles, toolbarStyles };

  const defaultAddImageFile = undefined;

  const {
    theme = defaultTheme,
    addImageFile = defaultAddImageFile,
    structure = [
      DefaultBlockTypeSelect
    ]
  } = config;

  const store = createStore({
    addImageFile
  });

  const toolbarProps = {
    store,
    structure,
    theme,
  };

  return {
    initialize: ({ setEditorState, getEditorState, getEditorRef }) => {
      store.updateItem('getEditorState', getEditorState);
      store.updateItem('setEditorState', setEditorState);
      store.updateItem('getEditorRef', getEditorRef);
    },
    // Re-Render the toolbar on every change
    onChange: (editorState) => {
      store.updateItem('editorState', editorState);
      return editorState;
    },
    SideToolbar: decorateComponentWithProps(Toolbar, toolbarProps),
  };
};

export default createSideToolbarPlugin;
