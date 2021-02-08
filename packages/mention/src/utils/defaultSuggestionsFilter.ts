// Get the first 5 suggestions that match

import { MentionData, MultiMentionData } from '..';

const defaultSuggestionsFilter = (
  searchValue: string,
  suggestions: MultiMentionData | MentionData[],
  trigger?: string
): MentionData[] => {
  const value = searchValue.toLowerCase();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const triggerSuggestions =
    trigger && !Array.isArray(suggestions) ? suggestions[trigger] : suggestions;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const filteredSuggestions = triggerSuggestions.filter(
    (suggestion) => !value || suggestion.name.toLowerCase().indexOf(value) > -1
  );
  const length =
    filteredSuggestions.length < 5 ? filteredSuggestions.length : 5;
  return filteredSuggestions.slice(0, length);
};

export default defaultSuggestionsFilter;
