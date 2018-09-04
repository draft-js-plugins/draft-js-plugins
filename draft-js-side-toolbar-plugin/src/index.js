import decorateComponentWithProps from 'decorate-component-with-props';
import createStore from './utils/createStore';
import Toolbar from './components/Toolbar';
import buttonStyles from './buttonStyles.css';
import blockTypeSelectStyles from './blockTypeSelectStyles.css';
import toolbarStyles from './toolbarStyles.css';

export default (config = {}) => {
  const defaultPostion = 'left';

  const defaultTheme = { buttonStyles, blockTypeSelectStyles, toolbarStyles };

  const store = createStore({
    isVisible: false,
  });

  const {
    position = defaultPostion,
    theme = defaultTheme,
  } = config;

  const toolbarProps = {
    store,
    theme,
    position,
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
