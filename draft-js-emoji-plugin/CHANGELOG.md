# Change Log

All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

## To Be Released

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
