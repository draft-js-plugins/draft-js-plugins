import decorateComponentWithProps from 'decorate-component-with-props';
import createStore from './utils/createStore';
import Toolbar from './components/Toolbar';
import DefaultBlockTypeSelect from './components/DefaultBlockTypeSelect';
import BlockTypeSelect from './components/BlockTypeSelect';
import HeadlineOneButton from './components/HeadlineOneButton';
import HeadlineTwoButton from './components/HeadlineTwoButton';
import HeadlineThreeButton from './components/HeadlineThreeButton';
import UnorderedListButton from './components/UnorderedListButton';
import OrderedListButton from './components/OrderedListButton';
import BlockquoteButton from './components/BlockquoteButton';
import CodeBlockButton from './components/CodeBlockButton';

const createSideToolbarPlugin = (config = {}) => {
  const store = createStore({
    isVisisble: false,
  });

  const {
    structure = [
      DefaultBlockTypeSelect
    ]
  } = config;

  const toolbarProps = {
    store,
    structure,
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

export {
  HeadlineOneButton,
  HeadlineTwoButton,
  HeadlineThreeButton,
  UnorderedListButton,
  OrderedListButton,
  BlockquoteButton,
  CodeBlockButton,
  DefaultBlockTypeSelect,
  BlockTypeSelect,
};
