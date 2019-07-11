"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultTheme = void 0;
var mention = "m11k5wy5";
var mentionSuggestions = "m5r13ak";
var suggestionEntryShared = "\n  padding: 7px 10px 3px 10px;\n  transition: background-color 0.4s cubic-bezier(.27,1.27,.48,.56);\n  &:active {\n    background-color: #cce7ff;\n  }\n";
var mentionSuggestionsEntry = "m1bl3q11";
var mentionSuggestionsEntryFocused = "m3m4bwl";
var mentionSuggestionsEntryText = "m6vor7e";
var mentionSuggestionsEntryAvatar = "mrvnyvk";
var defaultTheme = {
  // CSS class for mention text
  mention: mention,
  // CSS class for suggestions component
  mentionSuggestions: mentionSuggestions,
  // CSS classes for an entry in the suggestions component
  mentionSuggestionsEntry: mentionSuggestionsEntry,
  mentionSuggestionsEntryFocused: mentionSuggestionsEntryFocused,
  mentionSuggestionsEntryText: mentionSuggestionsEntryText,
  mentionSuggestionsEntryAvatar: mentionSuggestionsEntryAvatar
};
exports.defaultTheme = defaultTheme;