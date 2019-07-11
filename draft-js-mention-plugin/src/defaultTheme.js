import { css } from 'linaria';

const mention = css`
  &, &:visited {
    color: #575f67;
    cursor: pointer;
    display: inline-block;
    background: #e6f3ff;
    padding-left: 2px;
    padding-right: 2px;
    border-radius: 2px;
    text-decoration: none;
  }
  &:hover, &:focus {
    color: #677584;
    background: #edf5fd;
    outline: 0; /* reset for :focus */
  }
  &:active {
    color: #222;
    background: #455261;
  }
`;

const mentionSuggestions = css`
  border: 1px solid #eee;
  margin-top: 0.4em;
  position: absolute;
  min-width: 220px;
  max-width: 440px;
  background: #fff;
  border-radius: 2px;
  box-shadow: 0px 4px 30px 0px rgba(220,220,220,1);
  cursor: pointer;
  padding-top: 8px;
  padding-bottom: 8px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  transform: scale(0);
`;

const suggestionEntryShared = `
  padding: 7px 10px 3px 10px;
  transition: background-color 0.4s cubic-bezier(.27,1.27,.48,.56);
  &:active {
    background-color: #cce7ff;
  }
`;

const mentionSuggestionsEntry = css`
  ${suggestionEntryShared}
`;

const mentionSuggestionsEntryFocused = css`
  ${suggestionEntryShared}
  background-color: #e6f3ff;
`;

const mentionSuggestionsEntryText = css`
  display: inline-block;
  margin-left: 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 368px;
  font-size: 0.9em;
  margin-bottom: 0.2em;
`;

const mentionSuggestionsEntryAvatar = css`
  display: inline-block;
  width: 24px;
  height: 24px;
  border-radius: 12px;
`;

export const defaultTheme = {
  // CSS class for mention text
  mention,
  // CSS class for suggestions component
  mentionSuggestions,
  // CSS classes for an entry in the suggestions component
  mentionSuggestionsEntry,
  mentionSuggestionsEntryFocused,
  mentionSuggestionsEntryText,
  mentionSuggestionsEntryAvatar,
};
