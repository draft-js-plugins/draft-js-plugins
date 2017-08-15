import decorateComponentWithProps from 'decorate-component-with-props';
import {
  ItalicButton,
  BoldButton,
  UnderlineButton,
  CodeButton,
} from 'draft-js-buttons'; // eslint-disable-line import/no-unresolved
import createStore from './utils/createStore';
import Toolbar from './components/Toolbar';
import Separator from './components/Separator';
import buttonStyles from './buttonStyles.css';
import toolbarStyles from './toolbarStyles.css';

export default (config = {}) => {
  const defaultTheme = { buttonStyles, toolbarStyles };

  const store = createStore({});

  const {
    theme = defaultTheme,
    structure = [
      BoldButton,
      ItalicButton,
      UnderlineButton,
      CodeButton,
    ]
  } = config;

  const toolbarProps = {
    store,
    structure,
    theme,
  };

  return {
    initialize: ({ getEditorState, setEditorState }) => {
      store.updateItem('getEditorState', getEditorState);
      store.updateItem('setEditorState', setEditorState);
    },

    // Re-Render the text-toolbar on selection change
    onChange: (editorState) => {
      store.updateItem('selection', editorState.getSelection());

      // we update the getEditorState function to enable getting the current state
      // otherwise the component has to wait until the PluginEditor is rendered...
      // TODO: Enable plugin authors to get the new editorstate before the editor
      // has rendered
      store.updateItem('getEditorState', () => editorState);
      return editorState;
    },
    Toolbar: decorateComponentWithProps(Toolbar, toolbarProps),
  };
};

export {
  Separator,
};
