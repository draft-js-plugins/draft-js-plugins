# Change Log

All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

## To be released

## 5.0.2

- set `visibleBlock` to null on decorator destructing [#2277](https://github.com/draft-js-plugins/draft-js-plugins/issues/2277)

## 5.0.1

- add `sideEffects` for css files [#1833](https://github.com/draft-js-plugins/draft-js-plugins/issues/1833)

## 5.0.0

- Update to hooks and remove `ReactDOM.findDOMNode`, the required react version is 16.8 [#1979](https://github.com/draft-js-plugins/draft-js-plugins/issues/1979)

## 4.1.0

- add "sideEffects": false for tree shaking

## 4.0.0

- Replace legacy lifecycle hooks with UNSAFE aliases; the required react version is 16.3
- Migrate styles to linaria
- Hide internals in single bundle
- Add esm support
- convert to typescript

## 2.0.6

- Allow draft-js v0.11
- Remove unused dependencies

## 2.0.5

- Fixed bug that would have shared stores between multiple editor instances. [#1176](https://github.com/draft-js-plugins/draft-js-plugins/issues/1176)

## 2.0.3 - 2.0.4

- bumped find-with-regex

## 2.0.2

- added options to configure styling of alignment buttons

### Released the first working of DraftJS Alignment Plugin
