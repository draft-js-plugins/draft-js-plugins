import { css } from 'linaria';

export interface EmojiPluginTheme {
  emoji?: string;

  emojiSuggestions?: string;

  emojiSuggestionsEntry?: string;
  emojiSuggestionsEntryFocused?: string;
  emojiSuggestionsEntryText?: string;
  emojiSuggestionsEntryIcon?: string;

  emojiSelect?: string;

  emojiSelectButton?: string;
  emojiSelectButtonPressed?: string;

  emojiSelectPopover?: string;
  emojiSelectPopoverClosed?: string;
  emojiSelectPopoverTitle?: string;
  emojiSelectPopoverGroups?: string;

  emojiSelectPopoverGroup?: string;
  emojiSelectPopoverGroupTitle?: string;
  emojiSelectPopoverGroupList?: string;
  emojiSelectPopoverGroupItem?: string;

  emojiSelectPopoverToneSelect?: string;
  emojiSelectPopoverToneSelectList?: string;
  emojiSelectPopoverToneSelectItem?: string;

  emojiSelectPopoverEntry?: string;
  emojiSelectPopoverEntryFocused?: string;
  emojiSelectPopoverEntryIcon?: string;

  emojiSelectPopoverNav?: string;
  emojiSelectPopoverNavItem?: string;
  emojiSelectPopoverNavEntry?: string;
  emojiSelectPopoverNavEntryActive?: string;

  emojiSelectPopoverScrollbar?: string;
  emojiSelectPopoverScrollbarOuter?: string;
  emojiSelectPopoverScrollbarThumb?: string;
}

const suggestionsEntryShared = `
  padding: 5px 10px 1px 10px;
  transition: background-color 0.4s cubic-bezier(.27,1.27,.48,.56);
  &:active {
    background-color: #cce7ff;
  }
`;

const selectButtonSharedStyle = `
  margin: 0;
  padding: 0;
  width: 2.5em;
  height: 1.5em;
  box-sizing: border-box;
  line-height: 1.2em;
  font-size: 1.5em;
  color: #888;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 1.5em;
  cursor: pointer;
  &:focus {
    outline: 0;
    /* reset for :focus */
  }
  &:hover {
    background: #f3f3f3;
  }
  &:active {
    background: #e6e6e6;
  }
`;

const emojiSelectPopoverScrollbar = css`
  position: absolute;
  right: 0;
  top: 0.3em;
  bottom: 0.3em;
  width: 0.25em;
  background-color: #e0e0e0;
  border-radius: 0.125em;
  opacity: 0.1;
  transition: opacity 0.4s;
`;

const emojiSelectPopoverGroupTitle = css`
  margin: 1em 0;
  padding-left: 0.5em;
  font-weight: normal;
  font-size: 1em;
  color: #9e9e9e;
`;

const selectPopoverEntryShared = `
  padding: 0;
  width: 100%;
  height: 100%;
  background: none;
  border: none;
  outline: none;
  transition: background-color 0.4s cubic-bezier(0.27, 1.27, 0.48, 0.56);
`;

const selectPopoverNavEntryShared = `
  padding: 0;
  width: 100%;
  height: 100%;
  font-size: 1.2em;
  color: #bdbdbd;
  background: none;
  border: none;
  outline: none;
`;

export const defaultTheme: EmojiPluginTheme = {
  emoji: css`
    background-position: center;
    /* make sure the background the image is only shown once */
    background-repeat: no-repeat;
    background-size: contain;
    /* move it a bit further down to align it nicer with the text */
    vertical-align: middle;

    /*
    We need to limit the emoji width because it can be multiple characters
    long if it is a 32bit unicode. Since the proper width depends on the font and
    it's relationship between 0 and other characters it's not ideal. 1.95ch is not
    the best value, but hopefully a good enough approximation for most fonts.
    */
    display: inline-block;
    overflow: hidden;
    max-width: 1.95ch;
    /*
    Needed for iOS rendering to avoid some icons using a lot of height without
    actually needing it.
    */
    max-height: 1em;
    line-height: inherit;
    margin: -0.2ex 0em 0.2ex;
    /*
    In the past we used opacity: 0 to hide the original Emoji icon no matter what
    system it is. Recently we switched to color: transparent since it started to
    work in recent iOS version.
    */
    color: transparent;

    /*
    Some SVG files (say 2764 for :heart:) don't have default width/height, thus
    may not be rendered properly on some platforms/browsers (e.g., Windows 10 +
    Chrome 61).
    */
    min-width: 1em;
  `,

  emojiSuggestions: css`
    border: 1px solid #eee;
    margin-top: 1.75em;
    position: absolute;
    min-width: 220px;
    max-width: 440px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0px 4px 30px 0px rgba(220, 220, 220, 1);
    cursor: pointer;
    padding-top: 8px;
    padding-bottom: 8px;
    z-index: 2;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    transform: scale(0);
  `,

  emojiSuggestionsEntry: css`
    ${suggestionsEntryShared}
  `,
  emojiSuggestionsEntryFocused: css`
    ${suggestionsEntryShared}
    background-color: #e6f3ff;
  `,
  emojiSuggestionsEntryText: css`
    display: inline-block;
    margin-left: 8px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 368px;
    font-size: 0.9em;
  `,
  emojiSuggestionsEntryIcon: css`
    width: 1em;
    height: 1em;
    margin-left: 0.25em;
    margin-right: 0.25em;
    display: inline-block;
  `,

  emojiSelect: css`
    display: inline-block;
  `,

  emojiSelectButton: css`
    ${selectButtonSharedStyle}
  `,
  emojiSelectButtonPressed: css`
    ${selectButtonSharedStyle}
    background: #ededed;
  `,

  emojiSelectPopoverScrollbarOuter: css`
    & > div {
      overscroll-behavior: contain;
    }
  `,

  emojiSelectPopover: css`
    margin-top: 10px;
    padding: 0 0.3em;
    position: absolute;
    z-index: 1000;
    box-sizing: content-box;
    background: #fff;
    border: 1px solid #e0e0e0;
    box-shadow: 0 4px 30px 0 gainsboro;
  `,
  emojiSelectPopoverClosed: css`
    display: none;
  `,
  emojiSelectPopoverTitle: css`
    margin: 0 0 0.3em;
    padding-left: 1em;
    height: 2.5em;
    line-height: 2.5em;
    font-weight: normal;
    font-size: 1em;
    color: #9e9e9e;
  `,
  emojiSelectPopoverGroups: css`
    margin: 0 0 0.3em;
    position: relative;
    z-index: 0;
    width: 21em;
    height: 20em;
    &:hover .${emojiSelectPopoverScrollbar} {
      opacity: 0.3;
    }

    .${emojiSelectPopoverScrollbar}:hover,
      .${emojiSelectPopoverScrollbar}:active {
      opacity: 0.6;
    }
  `,

  emojiSelectPopoverGroup: css`
    padding: 0 0.5em;

    &:first-child .${emojiSelectPopoverGroupTitle} {
      display: none;
    }
  `,
  emojiSelectPopoverGroupTitle,
  emojiSelectPopoverGroupList: css`
    margin: 0;
    padding: 0;
    display: flex;
    list-style: none;
    flex-wrap: wrap;
  `,
  emojiSelectPopoverGroupItem: css`
    width: 2.5em;
    height: 2.5em;
  `,

  emojiSelectPopoverToneSelect: css`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 2;
  `,
  emojiSelectPopoverToneSelectList: css`
    margin: 0.3em;
    padding: 0.3em;
    position: absolute;
    display: flex;
    list-style: none;
    border: 1px solid #e0e0e0;
    border-radius: 0.5em;
    background: #fff;
    box-shadow: 0 0 0.3em rgba(0, 0, 0, 0.1);
  `,
  emojiSelectPopoverToneSelectItem: css`
    width: 2.5em;
    height: 2.5em;

    &:first-child {
      border-right: 1px solid #e0e0e0;
    }
  `,

  emojiSelectPopoverEntry: css`
    ${selectPopoverEntryShared}
  `,
  emojiSelectPopoverEntryFocused: css`
    ${selectPopoverEntryShared}
    background-color: #efefef;
  `,
  emojiSelectPopoverEntryIcon: css`
    width: 1.5em;
    height: 1.5em;
    vertical-align: middle;
  `,

  emojiSelectPopoverNav: css`
    margin: 0;
    padding: 0 0.5em;
    display: flex;
    width: 20em;
    list-style: none;
  `,
  emojiSelectPopoverNavItem: css`
    width: 2.5em;
    height: 2.5em;
  `,
  emojiSelectPopoverNavEntry: css`
    ${selectPopoverNavEntryShared}
  `,
  emojiSelectPopoverNavEntryActive: css`
    ${selectPopoverNavEntryShared}
    color: #42a5f5;
  `,

  emojiSelectPopoverScrollbar,
  emojiSelectPopoverScrollbarThumb: css`
    background-color: #000;
    border-radius: 0.125em;
    cursor: pointer;
  `,
};
