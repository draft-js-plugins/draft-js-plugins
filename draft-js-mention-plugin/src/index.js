import Mention from './Mention';
import mentionStrategy from './mentionStrategy';
import mentionSuggestionsStrategy from './mentionSuggestionsStrategy';
import decorateComponentWithProps from 'decorate-component-with-props';
import mentionStyles from './mentionStyles.css';
import mentionSuggestionsStyles from './mentionSuggestionsStyles.css';
import mentionSuggestionsEntryStyles from './mentionSuggestionsEntryStyles.css';
import suggestionsFilter from './utils/defaultSuggestionsFilter';

import createCompletionPlugin from 'draft-js-complete-plugin-creator';
import addMention from './modifiers/addMention';
import Entry from './MentionSuggestions/Entry';

const createMentionPlugin = (config = {}) => {
  const defaultTheme = {
    mention: mentionStyles.mention,

    mentionSuggestions: mentionSuggestionsStyles.mentionSuggestions,

    mentionSuggestionsEntry: mentionSuggestionsEntryStyles.mentionSuggestionsEntry,
    mentionSuggestionsEntryFocused: mentionSuggestionsEntryStyles.mentionSuggestionsEntryFocused,
    mentionSuggestionsEntryText: mentionSuggestionsEntryStyles.mentionSuggestionsEntryText,
    mentionSuggestionsEntryAvatar: mentionSuggestionsEntryStyles.mentionSuggestionsEntryAvatar,
  };
  // Styles are overwritten instead of merged as merging causes a lot of confusion.
  //
  // Why? Because when merging a developer needs to know all of the underlying
  // styles which needs a deep dive into the code. Merging also makes it prone to
  // errors when upgrading as basically every styling change would become a major
  // breaking change. 1px of an increased padding can break a whole layout.
  const {
    mentionPrefix = '',
    theme = defaultTheme,
  } = config;
  const completionPlugin = createCompletionPlugin(
    mentionSuggestionsStrategy,
    addMention,
    Entry,
    'mentionSuggestions',
    [{
      strategy: mentionStrategy,
      component: decorateComponentWithProps(Mention, { theme, mentionPrefix }),
    }],
  );
  const configWithTheme = {
    theme: defaultTheme,
    ...config,
  };
  return completionPlugin(configWithTheme);
};

export default createMentionPlugin;

export const defaultSuggestionsFilter = suggestionsFilter;
