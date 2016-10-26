import decorateComponentWithProps from 'decorate-component-with-props';
import createStore from './utils/createStore';
import Toolbar from './components/Toolbar';
import ItalicButton from './components/ItalicButton';
import BoldButton from './components/BoldButton';
import CodeButton from './components/CodeButton';
import UnderlineButton from './components/UnderlineButton';
import HeaderOneButton from './components/HeaderOneButton';
import HeaderTwoButton from './components/HeaderTwoButton';
import HeaderThreeButton from './components/HeaderThreeButton';
import UnorderedListButton from './components/UnorderedListButton';
import OrderedListButton from './components/OrderedListButton';
import BlockquoteButton from './components/BlockquoteButton';
import CodeBlockButton from './components/CodeBlockButton';
import Separator from './components/Separator';

const createInlineToolbarPlugin = (config = {}) => {
  const store = createStore({
    isVisible: false,
  });

  const {
    structure = [
      BoldButton,
      ItalicButton,
      UnderlineButton,
      CodeButton,
      // Separator,
      // HeaderOneButton,
      // HeaderTwoButton,
      // HeaderThreeButton,
      // UnorderedListButton,
      // OrderedListButton,
      // BlockquoteButton,
      // CodeBlockButton,
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
    InlineToolbar: decorateComponentWithProps(Toolbar, toolbarProps),
  };
};

export default createInlineToolbarPlugin;

export {
  ItalicButton,
  BoldButton,
  CodeButton,
  UnderlineButton,
  HeaderOneButton,
  HeaderTwoButton,
  HeaderThreeButton,
  UnorderedListButton,
  OrderedListButton,
  BlockquoteButton,
  CodeBlockButton,
  Separator,
};
