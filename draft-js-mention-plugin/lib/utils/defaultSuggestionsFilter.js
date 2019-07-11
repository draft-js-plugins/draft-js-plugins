"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

// Get the first 5 suggestions that match
var defaultSuggestionsFilter = function defaultSuggestionsFilter(searchValue, suggestions) {
  var value = searchValue.toLowerCase();
  var filteredSuggestions = suggestions.filter(function (suggestion) {
    return !value || suggestion.name.toLowerCase().indexOf(value) > -1;
  });
  var length = filteredSuggestions.length < 5 ? filteredSuggestions.length : 5;
  return filteredSuggestions.slice(0, length);
};

var _default = defaultSuggestionsFilter;
exports["default"] = _default;