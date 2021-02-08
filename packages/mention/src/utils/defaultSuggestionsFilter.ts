// Get the first 5 suggestions that match

import { MentionData, MultiMentionData } from '..';

const defaultSuggestionsFilter = (
  searchValue: string,
  suggestions: MultiMentionData | MentionData[],
  trigger?: string
): MentionData[] => {
  const value = searchValue.toLowerCase();
  const triggerSuggestions: MentionData[] =
    trigger && !Array.isArray(suggestions)
      ? suggestions[trigger]
      : suggestions as MentionData[];
  const filteredSuggestions = triggerSuggestions.filter(
    (suggestion) => !value || suggestion.name.toLowerCase().indexOf(value) > -1
  );
  const length =
    filteredSuggestions.length < 5 ? filteredSuggestions.length : 5;
  return filteredSuggestions.slice(0, length);
};

export default defaultSuggestionsFilter;
