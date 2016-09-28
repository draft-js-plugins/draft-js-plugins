import decorateComponentWithProps from 'decorate-component-with-props';
import createStore from './utils/createStore';
import Toolbar from './components/Toolbar';
import ItalicButton from './components/ItalicButton';
import BoldButton from './components/BoldButton';
import CodeButton from './components/CodeButton';
import UnderlineButton from './components/UnderlineButton';
import LinkButton from './components/LinkButton';
import LinkInput from './components/LinkInput';
import linkStrategy from './linkStrategy';
import createTooltipedLink from './utils/createTooltipedLink';
import Link from './components/Link';

const createAirToolbarPlugin = (config = {}) => {
  const store = createStore({
    isVisisble: false,
    showInput: false,
  });

  const {
    structure = [
      ItalicButton,
      BoldButton,
      CodeButton,
      UnderlineButton,
      LinkButton,
    ],
    link = Link,
  } = config;

  const toolbarProps = {
    store,
    structure,
  };

  return {
    initialize: ({ getEditorState, setEditorState, setReadOnly }) => {
      store.updateItem('getEditorState', getEditorState);
      store.updateItem('setEditorState', setEditorState);
      store.updateItem('setReadOnly', setReadOnly);
    },
    // Re-Render the text-toolbar on selection change
    onChange: (editorState) => {
      const selection = editorState.getSelection();

      if (selection.getHasFocus() && !selection.isCollapsed() && !store.getItem('linkSelection')) {
        store.updateItem('isVisible', true);
      } else {
        store.updateItem('isVisible', false);
      }
      return editorState;
    },
    AirToolbar: decorateComponentWithProps(Toolbar, toolbarProps),
    LinkInput: decorateComponentWithProps(LinkInput, { store }),
    decorators: [{
      strategy: linkStrategy,
      component: decorateComponentWithProps(createTooltipedLink(link), { store }),
    }]
  };
};

export default createAirToolbarPlugin;

export {
  ItalicButton,
  BoldButton,
  CodeButton,
  UnderlineButton,
  LinkButton,
};
