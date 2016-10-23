import decorateComponentWithProps from 'decorate-component-with-props';
import createStore from './utils/createStore';
import Toolbar from './components/Toolbar';

const createSideToolbarPlugin = (config = {}) => {
  const store = createStore({
    isVisisble: false,
  });

  const {
    structure = []
  } = config;

  const toolbarProps = {
    store,
    structure,
  };

  return {
    initialize: ({ setEditorState, getEditorState }) => {
      store.updateItem('setEditorState', setEditorState, getEditorState);
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
