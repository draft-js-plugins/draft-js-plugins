import Emoji from './Emoji';
import EmojiSearch from './EmojiSearch';
import emojiStrategy from './emojiStrategy';
import emojiSearchStrategy from './emojiSearchStrategy';
import decorateComponentWithProps from 'decorate-component-with-props';
import { Map } from 'immutable';
import emojiStyles from './emojiStyles.css';
import autocompleteStyles from './autocompleteStyles.css';
import autocompleteEntryStyles from './autocompleteEntryStyles.css';

// TODO provide an imagePath url via config
// TODO activate/deactivate different the conversion or search part

const defaultTheme = Map({
  emoji: emojiStyles.emoji,

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

const emojiPlugin = (config = {}) => {
  // Styles are overwritten instead of merged as merging causes a lot of confusion.
  //
  // Why? Because when merging a developer needs to know all of the underlying
  // styles which needs a deep dive into the code. Merging also makes it prone to
  // errors when upgrading as basically every styling change would become a major
  // breaking change. 1px of an increased padding can break a whole layout.
  const theme = config.theme ? config.theme : defaultTheme;
  const emojiSearchProps = {
    ariaProps,
    callbacks,
    theme,
  };
  return {
    pluginProps: {
      decorators: [
        {
          strategy: emojiStrategy,
          component: decorateComponentWithProps(Emoji, { theme }),
        },
        {
          strategy: emojiSearchStrategy,
          component: decorateComponentWithProps(EmojiSearch, emojiSearchProps),
        },
      ],
      getEditorProps: () => ariaProps,
      keyBindingFn: (keyboardEvent) => callbacks.keyBindingFn && callbacks.keyBindingFn(keyboardEvent),
      handleKeyCommand: (command) => callbacks.handleKeyCommand && callbacks.handleKeyCommand(command),
      onDownArrow: (keyboardEvent) => callbacks.onDownArrow && callbacks.onDownArrow(keyboardEvent),
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

export default emojiPlugin;
