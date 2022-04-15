# Change Log

All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

## To be released

## 4.1.2

- support react 18 in peer dependencies [#2701](https://github.com/draft-js-plugins/draft-js-plugins/issues/2701)

## 4.1.1

- add `sideEffects` for css files [#1833](https://github.com/draft-js-plugins/draft-js-plugins/issues/1833)

## 4.1.0

- add "sideEffects": false for tree shaking

## 4.0.0

- Migrate styles to linaria
- Hide internals in single bundle
- Add esm support
- convert to typescript

## 2.0.3

- Allow draft-js v0.11
- Remove unused dependencies

## 2.0.2

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
