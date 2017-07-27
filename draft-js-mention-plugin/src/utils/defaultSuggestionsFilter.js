// Get the first 5 suggestions that match
const defaultSuggestionsFilter = (searchValue, suggestions, limit = 5) => {
  const value = searchValue.toLowerCase();
  const filteredSuggestions = suggestions.filter((suggestion) => (
    !value || suggestion.get('name').toLowerCase().indexOf(value) > -1
  ));
  const size = filteredSuggestions.size < limit ? filteredSuggestions.size : limit;
  return filteredSuggestions.setSize(size);
};

export default defaultSuggestionsFilter;
