import Mention from './Mention';
import MentionSearch from './MentionSearch';
import mentionStrategy from './mentionStrategy';
import mentionSearchStrategy from './mentionSearchStrategy';

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
});

export default metionsPlugin;
