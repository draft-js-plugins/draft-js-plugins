import Mention from './Mention';
import MentionSearch from './MentionSearch';
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
  autocompletePopover: autocompleteStyles.autocompletePopover,

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
  role: 'combobox',
  ariaAutoComplete: 'list',
  ariaHasPopup: 'false',
  ariaExpanded: 'false',
  ariaOwneeID: 'mentions-select', // optional
  ariaActiveDescendantID: undefined, // optional
};

const mentionPlugin = (config = {}) => {
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
  };
  return {
    pluginProps: {
      decorators: [
        {
          strategy: mentionStrategy,
          component: decorateComponentWithProps(Mention, { theme }),
        },
        {
          strategy: mentionSearchStrategy,
          component: decorateComponentWithProps(MentionSearch, mentionSearchProps),
        },
      ],
      getEditorProps: () => ariaProps,
      keyBindingFn: (keyboardEvent) => callbacks.keyBindingFn && callbacks.keyBindingFn(keyboardEvent),
      handleKeyCommand: (command) => callbacks.handleKeyCommand && callbacks.handleKeyCommand(command),
      onDownArrow: (keyboardEvent) => callbacks.onDownArrow && callbacks.onDownArrow(keyboardEvent),
      onTab: (keyboardEvent) => callbacks.onTab && callbacks.onTab(keyboardEvent),
      onUpArrow: (keyboardEvent) => callbacks.onUpArrow && callbacks.onUpArrow(keyboardEvent),
      onEscape: (keyboardEvent) => callbacks.onEscape && callbacks.onEscape(keyboardEvent),
      handleReturn: (keyboardEvent) => callbacks.handleReturn && callbacks.handleReturn(keyboardEvent),
      onChange: (editorState) => {
        if (callbacks.onChange) return callbacks.onChange(editorState);
        return editorState;
      },
    },
  };
};

export default mentionPlugin;
