import Mention from './Mention';
import MentionSearch from './MentionSearch';
import MentionSearchPortal from './MentionSearchPortal';
import mentionStrategy from './mentionStrategy';
import mentionSearchStrategy from './mentionSearchStrategy';
import decorateComponentWithProps from 'decorate-component-with-props';
import { Map } from 'immutable';
import mentionStyles from './mentionStyles.css';
import autocompleteStyles from './autocompleteStyles.css';
import autocompleteEntryStyles from './autocompleteEntryStyles.css';

const defaultTheme = Map({
  mention: mentionStyles.mention,

  autocomplete: autocompleteStyles.autocomplete,

  autocompleteEntry: autocompleteEntryStyles.autocompleteEntry,
  autocompleteEntryFocused: autocompleteEntryStyles.autocompleteEntryFocused,
  autocompleteEntryText: autocompleteEntryStyles.autocompleteEntryText,
  autocompleteEntryAvatar: autocompleteEntryStyles.autocompleteEntryAvatar,
});

const callbacks = {
  keyBindingFn: undefined,
  handleKeyCommand: undefined,
  onDownArrow: undefined,
  onUpArrow: undefined,
  onTab: undefined,
  onEscape: undefined,
  handleReturn: undefined,
  onChange: undefined,
};

const ariaProps = {
  ariaHasPopup: 'false',
  ariaExpanded: 'false',
  ariaOwneeID: undefined,
  ariaActiveDescendantID: undefined,
};

let searches = Map();
let escapedSearch = undefined;

const store = {
  getEditorState: undefined,
  setEditorState: undefined,
  getAllSearches: () => searches,
  isEscaped: (offsetKey) => escapedSearch === offsetKey,
  escapeSearch: (offsetKey) => {
    escapedSearch = offsetKey;
  },

  resetEscapedSearch: () => {
    escapedSearch = undefined;
  },

  register: (offsetKey) => {
    searches = searches.set(offsetKey, offsetKey);
  },

  unregister: (offsetKey) => {
    searches = searches.delete(offsetKey);
  },
};

const createMentionPlugin = (config = {}) => {
  // Styles are overwritten instead of merged as merging causes a lot of confusion.
  //
  // Why? Because when merging a developer needs to know all of the underlying
  // styles which needs a deep dive into the code. Merging also makes it prone to
  // errors when upgrading as basically every styling change would become a major
  // breaking change. 1px of an increased padding can break a whole layout.
  const theme = config.theme ? config.theme : defaultTheme;
  const mentionSearchProps = {
    ariaProps,
    callbacks,
    mentions: config.mentions,
    theme,
    store,
  };
  return {
    MentionSearch: decorateComponentWithProps(MentionSearch, mentionSearchProps),
    decorators: [
      {
        strategy: mentionStrategy,
        component: decorateComponentWithProps(Mention, { theme }),
      },
      {
        strategy: mentionSearchStrategy,
        component: decorateComponentWithProps(MentionSearchPortal, { store, callbacks, ariaProps }),
      },
    ],
    getEditorProps: () => (
      {
        role: 'combobox',
        ariaAutoComplete: 'list',
        ariaHasPopup: ariaProps.ariaHasPopup,
        ariaExpanded: ariaProps.ariaExpanded,
        ariaActiveDescendantID: ariaProps.ariaActiveDescendantID,
        ariaOwneeID: ariaProps.ariaOwneeID,
      }
    ),

    onDownArrow: (keyboardEvent) => callbacks.onDownArrow && callbacks.onDownArrow(keyboardEvent),
    onTab: (keyboardEvent) => callbacks.onTab && callbacks.onTab(keyboardEvent),
    onUpArrow: (keyboardEvent) => callbacks.onUpArrow && callbacks.onUpArrow(keyboardEvent),
    onEscape: (keyboardEvent) => callbacks.onEscape && callbacks.onEscape(keyboardEvent),
    handleReturn: (keyboardEvent) => callbacks.handleReturn && callbacks.handleReturn(keyboardEvent),
    onChange: (editorState) => {
      if (callbacks.onChange) return callbacks.onChange(editorState);
      return editorState;
    },
  };
};

export default createMentionPlugin;
