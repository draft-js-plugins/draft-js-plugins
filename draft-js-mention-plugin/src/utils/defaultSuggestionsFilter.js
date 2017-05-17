// Get the first 50 suggestions that match
const defaultSuggestionsFilter = (searchValue, suggestions) => {
  const value = searchValue.toLowerCase();
  const filteredSuggestions = suggestions.filter((suggestion) => (
    !value || suggestion.get('name').toLowerCase().indexOf(value) > -1
  ));
  const size = filteredSuggestions.size < 50 ? filteredSuggestions.size : 50;
  return filteredSuggestions.setSize(size);
};

export default defaultSuggestionsFilter;
