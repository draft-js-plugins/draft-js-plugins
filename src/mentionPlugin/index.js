import Mention from './Mention';
import MentionSearch from './MentionSearch';
import mentionStrategy from './mentionStrategy';
import mentionSearchStrategy from './mentionSearchStrategy';

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

const metionsPlugin = (config) => ({
  // standard plugin property
  decorators: [
    {
      strategy: mentionStrategy,
      component: Mention,
    },
    {
      strategy: mentionSearchStrategy,
      component: MentionSearch(config.mentions, callbacks, ariaProps),
    },
  ],
  getEditorProps: () => ariaProps,
  keyBindingFn: (keyboardEvent) => callbacks.keyBindingFn && callbacks.keyBindingFn(keyboardEvent), // standard plugin callback
  handleKeyCommand: (command) => callbacks.handleKeyCommand && callbacks.handleKeyCommand(command), // standard plugin callback
  onDownArrow: (keyboardEvent) => callbacks.onDownArrow && callbacks.onDownArrow(keyboardEvent), // standard plugin callback
  onUpArrow: (keyboardEvent) => callbacks.onUpArrow && callbacks.onUpArrow(keyboardEvent), // standard plugin callback
  onEscape: (keyboardEvent) => callbacks.onEscape && callbacks.onEscape(keyboardEvent), // standard plugin callback
  handleReturn: (keyboardEvent) => callbacks.handleReturn && callbacks.handleReturn(keyboardEvent), // standard plugin callback
  onChange: (editorState) => {
    if (callbacks.onChange) return callbacks.onChange(editorState);
    return editorState;
  },
});

export default metionsPlugin;
