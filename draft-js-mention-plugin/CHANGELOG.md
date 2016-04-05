# Change Log

All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

## To Be Released

### Changed

- Move to a flat configuration. Instead of plugin properties (decorators & hooks) being stored within pluginProps they now moved to the root object. See the changes here [#150](https://github.com/draft-js-plugins/draft-js-plugins/pull/150/files) as well as the initial discussion here [#143](https://github.com/draft-js-plugins/draft-js-plugins/issues/143)
- Improved the regex and now test for a whitespace in front of the `@` to make sure it doesn't match on normal text like an email [#104](https://github.com/draft-js-plugins/draft-js-plugins/issues/104)

### Fixed

- Fix using backspace to close the autocomplete suggestions after typing an `@` [#110](https://github.com/draft-js-plugins/draft-js-plugins/issues/110)

## 0.0.4 - 2016-03-29

### Fixed
- Fix issue with showing two menus at the same time [#132](https://github.com/draft-js-plugins/draft-js-plugins/issues/132)
- When typing ahead to 0 results and then back the first item must be still selected. [#149](https://github.com/draft-js-plugins/draft-js-plugins/pull/149)

## 0.0.3 - 2016-03-25
### Released the first working of DraftJS Mention Plugin

It's not recommended to use the version 0.0.0 - 0.0.2
