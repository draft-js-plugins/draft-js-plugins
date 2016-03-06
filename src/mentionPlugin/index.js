import Mention from './Mention';
import MentionSearch from './MentionSearch';
import mentionStrategy from './mentionStrategy';
import mentionSearchStrategy from './mentionSearchStrategy';

const keyBindingFn = (keyboardEvent) => {
  if (keyboardEvent.keyCode === 83) {
    return 'myeditor-save';
  }

  return undefined;
};

const handleKeyCommand = (command) => {
  console.log('handled the S press', command);
  if (command === 'myeditor-save') {
    return true;
  }

  return false;
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
      component: MentionSearch(config.mentions),
    },
  ],
  keyBindingFn, // standard plugin callback
  handleKeyCommand, // standard plugin callback
});

export default metionsPlugin;
