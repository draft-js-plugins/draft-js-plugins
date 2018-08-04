# Change Log

All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

## To Be Released

### 2.0.2

- button not working while it's in the same container with editor [#1139](https://github.com/draft-js-plugins/draft-js-plugins/issues/1139)

### Fixed

- Fixed an issue during initialization [#740](https://github.com/draft-js-plugins/draft-js-plugins/pull/740). Thanks to @terryoy

## 1.0.0 - 2016-04-20

### Changed

- Moved the option `theme` from an Immutable Map to a JavaScript object. This is more likely to become a standard.
- Instead of passing in the `editorState` and the `onChange` function is not necessary anymore. This is now handled by the plugin itself via a shared reference passed to the components.

## 0.0.5 - 2016-03-25
### Released the first working version of DraftJS Undo Plugin

It's not recommended to use the version 0.0.0 - 0.0.4
