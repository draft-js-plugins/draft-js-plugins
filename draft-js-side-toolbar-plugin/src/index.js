import decorateComponentWithProps from 'decorate-component-with-props';
import createStore from './utils/createStore';
import Toolbar from './components/Toolbar';
import DefaultBlockTypeSelect from './components/DefaultBlockTypeSelect';
import buttonTheme from './buttonStyles.css';

const createSideToolbarPlugin = (config = {}) => {
  const store = createStore({
    isVisible: false,
  });

  const {
    structure = [
      DefaultBlockTypeSelect
    ]
  } = config;

  const toolbarProps = {
    store,
    structure,
    buttonTheme,
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
