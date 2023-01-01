# Change Log

All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

## To be released

## 4.6.4

- fix issue with shortname to unicode translation [#3045](https://github.com/draft-js-plugins/draft-js-plugins/issues/3045)

## 4.6.3

- fix performance issue with shortname to unicode translation [#2915](https://github.com/draft-js-plugins/draft-js-plugins/issues/2915)

## 4.6.2

- Autoclose emoji popover for multiple instance [#2875](https://github.com/draft-js-plugins/draft-js-plugins/issues/2875)

## 4.6.1

- support react 18 in peer dependencies [#2701](https://github.com/draft-js-plugins/draft-js-plugins/issues/2701)

## 4.6.0

- upgrade to `emojibase@6`
- escaping variation selector-16 character when splitting emojis into categories [#2599](https://github.com/draft-js-plugins/draft-js-plugins/issues/2599)
- added Support header-menu position customization for emoji picker to have "top/Bottom" position [#2433](https://github.com/draft-js-plugins/draft-js-plugins/pull/2433)

## 4.5.5

- add `sideEffects` for css files [#1833](https://github.com/draft-js-plugins/draft-js-plugins/issues/1833)

## 4.5.4

- add `disableInlineEmojis` to disable inline emoji suggestions [#2028](https://github.com/draft-js-plugins/draft-js-plugins/issues/2028)

## 4.5.2

- replace react-custom-scrollbars with react-custom-scrollbars-2 [#2032](https://github.com/draft-js-plugins/draft-js-plugins/issues/2032)

## 4.5.1

- add `findWithRegex` from `@draft-js-plugins/utils` to replace the package `find-with-regex` [#2006](https://github.com/draft-js-plugins/draft-js-plugins/issues/2006)

## 4.5.0

- fixing issue with build for commen js bundels [#1976](https://github.com/draft-js-plugins/draft-js-plugins/issues/1976)

## 4.4.0

- add closeOnEmojiSelect oprion to EmojiSelect to close popup after selection [#1924](https://github.com/draft-js-plugins/draft-js-plugins/issues/1924)

## 4.3.1

- render Emoji Select content only if popup is open [#855](https://github.com/draft-js-plugins/draft-js-plugins/issues/855)

## 4.3.0

- provide unicode for emoji image component [#1877](https://github.com/draft-js-plugins/draft-js-plugins/issues/1877)

## 4.2.0

- add onOpen and onClose callback props to EmojiSelect

## 4.1.0

- add "sideEffects": false for tree shaking

## 4.0.2

- fixing issue Failed to execute 'removeChild' on 'Node' [#1697](https://github.com/draft-js-plugins/draft-js-plugins/issues/1697)

## 4.0.1

- fixing issue clientRectFunctions.get(...) is not a function [#1694](https://github.com/draft-js-plugins/draft-js-plugins/issues/1694)

## 4.0.0

- Fix selection on insert
- Replace legacy lifecycle hooks with UNSAFE aliases; the required react version is 16.3
- Migrate styles to linaria
- Hide internals in single bundle
- Add esm support
- Use lodash-es in esm bundle
- convert to typescript
- use the setEditorState and getEditorState functions from props.store in EmojiSuggestionsPortal
- update emojione to emoji-toolkit
- remove defaultImagePath, defaultImageType and cacheBust to customize components
- fixing warning on scrolling in emoji select [#1635](https://github.com/draft-js-plugins/draft-js-plugins/issues/1635)
- fixing issue with detecting : at end of word for emoji select [#1645](https://github.com/draft-js-plugins/draft-js-plugins/issues/1645)

## 2.1.3

- removed deprecated draft-js hooks (onUpArrow, onDownArrow, onEscape, onTab) usage

## 2.1.2

- Allow draft-js v0.11
- Remove unused dependencies
- Add typescript typings

## 2.1.1

- Move searchPortal ref function to constructor

## 2.1.0

- Don't fetch all EmojiOne emoji as soon as the `<EmojiSelect />` is rendered. Fetch them on demand.

## 2.0.6

- Added an `id` attribute on the listbox options so the `aria-activedescendant` value refers to the focused option.

## 2.0.4 - 2.0.5

- bumped find-with-regex

## 2.0.3

- Added `aria-selected="true"` for the suggestions listbox focused option.
- Fix aria attributes to use booleans rather than strings (that was a draft-js update that we missed)

## 2.0.2

- Updated dependencies to support react 16
- Fixed rendering of emoji 'heart' on Windows 10 + Chrome. By @steven-qi
- Fixed [this](https://github.com/draft-js-plugins/draft-js-plugins/issues/1041)
- Fixed editing behavior for emoji-plugin

## 2.0.0-rc10

- fixed direct state assignment

## 2.0.0-rc9

### Fix native emojis

- render props.children instead, fixes editing behaviour

### Fixed

- Added type="button" to EmojiSelect button to prevent submitting forms, thanks to @alanwflood [for the pr](https://github.com/draft-js-plugins/draft-js-plugins/pull/829)

### Removed

- Removed sass support for this plugin. There was only one scss file.
- Removed wrapping span with emojiCharacter class [#668](https://github.com/draft-js-plugins/draft-js-plugins/pull/668)

### Changed

- Make the emoji highlightable. Thanks to @AndrewHamm [#635](https://github.com/draft-js-plugins/draft-js-plugins/pull/635)
- Update the list of Emojis from Emojione `2.1.2` to `2.2.7`. Thanks to @mzbac and @dineshvgp

### Added

- Add EmojiSelect component. Thanks to @bashkos
- Added {allowImageCache, imageType} properties to config object.
- Add `emojione` as a dependency.
- Add `lodash.keys` as a dependency.
- The config object will accept a property `priorityList` which should contain Emoji entries used by EmojiOne. These entries will be show first in the EmojiSuggestions dropdown after typing `:`. Thanks to @mzbac

### Fixed

- Fix EmojiSuggestions unknown props warning on for `onClose`, `onOpen` and `onSearchChange` callbacks. Thanks to @julianwa [#658](https://github.com/draft-js-plugins/draft-js-plugins/pull/658)

## 1.2.3 - 2016-07-06

[#309](https://github.com/draft-js-plugins/draft-js-plugins/commit/bac8c30f5e324f1fa13b11eeecbaec9172adeb58) Fix Emoji `positionSuggestions` as we introduced a bug in the last version. Thanks to @Zhouzi

## 1.2.2 - 2016-06-26

### Fixed

- `positionSuggestions` now works by default with non-static parents. Thanks to @Zhouzi
  [#309](https://github.com/draft-js-plugins/draft-js-plugins/pull/309)
  [#206](https://github.com/draft-js-plugins/draft-js-plugins/issues/206)
  [#283](https://github.com/draft-js-plugins/draft-js-plugins/issues/283)
  [#289](https://github.com/draft-js-plugins/draft-js-plugins/issues/289)

## 1.2.1 - 2016-06-05

### Fixed

- Emojis won't show up due broken background styles [#292](https://github.com/draft-js-plugins/draft-js-plugins/pull/292) [#293](https://github.com/draft-js-plugins/draft-js-plugins/issues/293) [#294](https://github.com/draft-js-plugins/draft-js-plugins/pull/294)

## 1.2.0 - 2016-05-27

### Added

- `EmojiSuggestions` now accepts `onOpen`and `onClose` props. These callbacks are triggered when the popover has opened or closed.

## 1.1.1 - 2016-05-24

### Fixed

- Fix rendering the MentionSuggestions in IE11 by avoiding to render an Immutable List [#266](https://github.com/draft-js-plugins/draft-js-plugins/issues/266) [#270](https://github.com/draft-js-plugins/draft-js-plugins/pull/270)
- Fix React 0.14.x support by returning `<noscript />` instead of `null` [#267](https://github.com/draft-js-plugins/draft-js-plugins/pull/267)

## 1.1.0 - 2016-05-08

### Added

- Extended configuration parameters to accept `imagePath`. The full path is constructed of multiple parts like this: `${imagePath}${unicode}.svg${cacheBustParam}` while the imagePath can be overwritten from now on. The default imagePath was and still is: '//cdn.jsdelivr.net/emojione/assets/svg/'. [#249](https://github.com/draft-js-plugins/draft-js-plugins/pull/249)

## 1.0.1 - 2016-04-29

### Fixed

- Make sure there is no autocomplete on tab after deleting an emoji [#234](https://github.com/draft-js-plugins/draft-js-plugins/issues/234)

## 1.0.0 - 2016-04-20

### Changed

- Instead of the popover inline it is now exported as `EmojiSuggestions` and can be placed anywhere in the DOM. It's recommended to place it right after the Editor. This change was important to avoid selection issues trigged by `contentEditable={false}`.
- Moved to a flat configuration. Instead of plugin properties (decorators & hooks) being stored within pluginProps they now moved to the root object. See the changes here [#150](https://github.com/draft-js-plugins/draft-js-plugins/pull/150/files) as well as the initial discussion here [#143](https://github.com/draft-js-plugins/draft-js-plugins/issues/143)
- Improved the regex and now test for a whitespace in front of the `:` to make sure it doesn't match on normal text like a link [#104](https://github.com/draft-js-plugins/draft-js-plugins/issues/104)
- Moved the option `theme` from an Immutable Map to a JavaScript object. This is more likely to become a standard.
- Improved styling and added animations for the Suggestions overlay as well as the hover on a single suggestion.
- Updated the theme properties.

### Fixed

- Fix using backspace to close the autocomplete suggestions after typing a `:` [#153](https://github.com/draft-js-plugins/draft-js-plugins/issues/153)
- Fix issues with hiding the real Emoji on iOS by introducing an extra span with opacity 0.

### Added

- The config now takes a property `positionSuggestions`. The function can be used to manipulate the position of the popover containing the suggestions. It receives one object as arguments containing the visible rectangle surrounding the decorated search string including the @. In addition the object contains prevProps, prevState, state, props & filteredEmojs. An object should be returned which can contain all sorts of styles. The defined properties will be applied as inline-styles.
- The `EmojiSuggestions` component now takes a property `onSearchChange` which will trigger whenever the search value of changes.

## 0.0.4 - 2016-03-29

### Fixed

- Fix issue with showing two menus at the same time [#132](https://github.com/draft-js-plugins/draft-js-plugins/issues/132)
- When typing ahead to 0 results and then back the first item must be still selected. [#149](https://github.com/draft-js-plugins/draft-js-plugins/pull/149)

## 0.0.3 - 2016-03-25

### Released the first working version of DraftJS Emoji Plugin

It's not recommended to use the version 0.0.0 - 0.0.2
