import decorateComponentWithProps from 'decorate-component-with-props';
import createStore from './utils/createStore';
import Toolbar from './components/Toolbar';
import ItalicButton from './components/ItalicButton';
import BoldButton from './components/BoldButton';
import CodeButton from './components/CodeButton';
import UnderlineButton from './components/UnderlineButton';

const createAirToolbarPlugin = (config = {}) => {
  const store = createStore({
    isVisisble: false,
  });

  const {
    structure = [
      ItalicButton,
      BoldButton,
      CodeButton,
      UnderlineButton,
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
  ItalicButton,
  BoldButton,
  CodeButton,
  UnderlineButton,
};
