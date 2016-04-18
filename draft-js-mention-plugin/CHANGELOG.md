# Change Log

All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

## To Be Released

### Changed

- Instead of the popover inline it is now exported as `SearchSuggestions` and can be placed anywhere in the DOM. It's recommended to place it right after the Editor. This change was important to avoid selection issues trigged by `contentEditable={false}`.
- `mentions` has been renamed to `suggestions` and now has to be directly provided to the `SearchSuggestions` component as property.
- Moved to a flat configuration. Instead of plugin properties (decorators & hooks) being stored within pluginProps they now moved to the root object. See the changes here [#150](https://github.com/draft-js-plugins/draft-js-plugins/pull/150/files) as well as the initial discussion here [#143](https://github.com/draft-js-plugins/draft-js-plugins/issues/143)
- Improved the regex and now test for a whitespace in front of the `@` to make sure it doesn't match on normal text like an email [#104](https://github.com/draft-js-plugins/draft-js-plugins/issues/104)
- Moved the option `theme` from an Immutable Map to a JavaScript object. This is more likely to become a standard.

### Fixed

- Fix using backspace to close the autocomplete suggestions after typing an `@` [#110](https://github.com/draft-js-plugins/draft-js-plugins/issues/110)

### Added

- The config now takes a property entityMutability. A developer can choose between 'IMMUTABLE', 'SEGMENTED' & 'MUTABLE'. Read in detail about it [here](https://facebook.github.io/draft-js/docs/advanced-topics-entities.html#mutability).

```
const mentionPlugin = createMentionPlugin({ entityMutability: 'IMMUTABLE' });
```

- The `SearchSuggestions` component now takes a property `onSearchChange` which will trigger whenever the search value of changes.
- The module now exports `defaultSuggestionsFilter` for convenience. As first argument it takes the search term as a String. The second argument is the Immutable list of mentions. The function returns the filter list based on substring matches.

## 0.0.4 - 2016-03-29

### Fixed
- Fix issue with showing two menus at the same time [#132](https://github.com/draft-js-plugins/draft-js-plugins/issues/132)
- When typing ahead to 0 results and then back the first item must be still selected. [#149](https://github.com/draft-js-plugins/draft-js-plugins/pull/149)

## 0.0.3 - 2016-03-25
### Released the first working version of DraftJS Mention Plugin

It's not recommended to use the version 0.0.0 - 0.0.2
