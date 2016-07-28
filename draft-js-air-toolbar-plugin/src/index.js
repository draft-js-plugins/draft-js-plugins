import decorateComponentWithProps from 'decorate-component-with-props';
import createStore from './utils/createStore';
import Toolbar from './components/Toolbar';
import ItalicButton from './components/ItalicButton';

const createAirToolbarPlugin = (config = {}) => {
  const store = createStore({
    isVisisble: false,
  });

  const {
    structure = [
      ItalicButton,
    ]
  } = config;

  const toolbarProps = {
    store,
    structure,
  };

  return {
    initialize: ({ getEditorState, setEditorState }) => {
      store.updateItem('getEditorState', getEditorState);
      store.updateItem('setEditorState', setEditorState);
    },
    // Re-Render the text-toolbar on selection change
    onChange: (editorState) => {
      const selection = editorState.getSelection();
      if (selection.getHasFocus() && !selection.isCollapsed()) {
        store.updateItem('isVisible', true);
      } else {
        store.updateItem('isVisible', false);
      }
      return editorState;
    },
    AirToolbar: decorateComponentWithProps(Toolbar, toolbarProps),
  };
};

export default createAirToolbarPlugin;

export {
  ItalicButton
};
