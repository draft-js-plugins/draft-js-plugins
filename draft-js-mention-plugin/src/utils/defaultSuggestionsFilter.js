// Get the first 5 suggestions that match
const _size = (list) => list.constructor.name === 'List'
  ? list.size
  : list.length;

const _get = (obj, attr) => obj.get
  ? obj.get(attr)
  : obj[attr];

const defaultSuggestionsFilter = (searchValue, suggestions) => {
  const value = searchValue.toLowerCase();
  const filteredSuggestions = suggestions.filter((suggestion) => (
    !value || _get(suggestion, 'name').toLowerCase().indexOf(value) > -1
  ));
  const size = _size(filteredSuggestions) < 5 ? _size(filteredSuggestions) : 5;
  return filteredSuggestions.slice(0, size);
};

export default defaultSuggestionsFilter;
