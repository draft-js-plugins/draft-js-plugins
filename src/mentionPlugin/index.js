import Mention from './Mention';
import MentionSearch from './MentionSearch';
import mentionStrategy from './mentionStrategy';
import mentionSearchStrategy from './mentionSearchStrategy';

// TODO init form passed data
// TODO allow to take a promise for mentions data as well
const mentions = [
  { handle: 'mjrussell', link: 'https://twitter.com/mrussell247' },
  { handle: 'nikgraf', link: 'https://twitter.com/nikgraf' },
  { handle: 'dan_abramov', link: 'https://twitter.com/dan_abramov' },
];

const metionsPlugin = () => ({
  // standard plugin property
  decorators: [
    {
      strategy: mentionStrategy,
      component: Mention,
    },
    {
      strategy: mentionSearchStrategy,
      component: MentionSearch(mentions),
    },
  ],
});

export default metionsPlugin;
