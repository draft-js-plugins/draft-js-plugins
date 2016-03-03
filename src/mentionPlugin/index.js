import Mention from './Mention';
import MentionSearch from './MentionSearch';
import mentionStrategy from './mentionStrategy';
import mentionSearchStrategy from './mentionSearchStrategy';

// TODO init form unicorn editor
const mentions = [
  { handle: 'mjrussell', link: 'https://twitter.com/mrussell247' },
  { handle: 'nikgraf', link: 'https://twitter.com/nikgraf' },
  { handle: 'dan_abramov', link: 'https://twitter.com/dan_abramov' },
];

export default (editorContext) => ({
  compositeDecorators: [
    {
      strategy: mentionStrategy,
      component: Mention,
    },
    {
      strategy: mentionSearchStrategy(editorContext),
      component: MentionSearch(editorContext, mentions),
    }
  ],
});
