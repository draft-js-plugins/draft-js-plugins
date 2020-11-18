// Get the first 5 suggestions that match

import { MentionData } from '..';

const defaultSuggestionsFilter = (
  searchValue: string,
  suggestions: MentionData[]
): MentionData[] => {
  const value = searchValue.toLowerCase();
  const filteredSuggestions = suggestions.filter(
    (suggestion) => !value || suggestion.name.toLowerCase().indexOf(value) > -1
  );
  const length =
    filteredSuggestions.length < 5 ? filteredSuggestions.length : 5;
  return filteredSuggestions.slice(0, length);
};

export default defaultSuggestionsFilter;
