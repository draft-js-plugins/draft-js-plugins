import Mention from './Mention';
import MentionSearch from './MentionSearch';
import mentionStrategy from './mentionStrategy';
import mentionSearchStrategy from './mentionSearchStrategy';

const keyFunctions = {
  keyBindingFn: undefined,
  handleKeyCommand: undefined,
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
      component: MentionSearch(config.mentions, keyFunctions, ariaProps),
    },
  ],
  keyBindingFn: (keyboardEvent) => keyFunctions.keyBindingFn && keyFunctions.keyBindingFn(keyboardEvent), // standard plugin callback
  handleKeyCommand: (command) => keyFunctions.handleKeyCommand && keyFunctions.handleKeyCommand(command), // standard plugin callback
  onDownArrow: (keyboardEvent) => keyFunctions.onDownArrow && keyFunctions.onDownArrow(keyboardEvent), // standard plugin callback
  onUpArrow: (keyboardEvent) => keyFunctions.onUpArrow && keyFunctions.onUpArrow(keyboardEvent), // standard plugin callback
  onEscape: (keyboardEvent) => keyFunctions.onEscape && keyFunctions.onEscape(keyboardEvent), // standard plugin callback
  handleReturn: (keyboardEvent) => keyFunctions.handleReturn && keyFunctions.handleReturn(keyboardEvent), // standard plugin callback
  getEditorProps: () => ariaProps,
});

export default metionsPlugin;
