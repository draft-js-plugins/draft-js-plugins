// Get the first 5 suggestions that match
const size = (list) => (list.constructor.name === 'List'
  ? list.size
  : list.length);

const get = (obj, attr) => (obj.get
  ? obj.get(attr)
  : obj[attr]);

const defaultSuggestionsFilter = (searchValue, suggestions) => {
  const value = searchValue.toLowerCase();
  const filteredSuggestions = suggestions.filter((suggestion) => (
    !value || get(suggestion, 'name').toLowerCase().indexOf(value) > -1
  ));
  const length = size(filteredSuggestions) < 5 ? size(filteredSuggestions) : 5;
  return filteredSuggestions.slice(0, length);
};

export default defaultSuggestionsFilter;
