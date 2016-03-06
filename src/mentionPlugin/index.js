import Mention from './Mention';
import MentionSearch from './MentionSearch';
import mentionStrategy from './mentionStrategy';
import mentionSearchStrategy from './mentionSearchStrategy';

// TODO init form passed data
// TODO allow to take a promise for mentions data as well
// TODO change handle to name?
// TODO add profilepics/icons
// TODO dedect if all have images to see of images should be used
// TODO use unicorns for the unicorn editor
const mentions = [
  { handle: 'Matthew Russell', link: 'https://twitter.com/mrussell247' },
  { handle: 'Jyoti Puri', link: 'https://twitter.com/jyopur' },
  { handle: 'Max Stoiber', link: 'https://twitter.com/mxstbr' },
  { handle: 'Nik Graf', link: 'https://twitter.com/nikgraf' },
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
