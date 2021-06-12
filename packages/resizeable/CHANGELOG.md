# Change Log

All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

## To be released

## 5.0.2

- add `sideEffects` for css files [#1833](https://github.com/draft-js-plugins/draft-js-plugins/issues/1833)

## 5.0.1

- Fixing issue with incorrect sizes [#2105](https://github.com/draft-js-plugins/draft-js-plugins/issues/2105)

## 5.0.0

- Update to hooks and remove `ReactDOM.findDOMNode`, the required react version is 16.8 [#1979](https://github.com/draft-js-plugins/draft-js-plugins/issues/1979)

## 4.1.0

- add "sideEffects": false for tree shaking

## 4.0.0

- Hide internals in single bundle
- Add esm support
- Add support of optional initialWidth and initialHeight parameters when creating decorator [#1166](https://github.com/draft-js-plugins/draft-js-plugins/issues/1166)
- Add typescript type for createResizeablePlugin optional parameter
- convert to typescript

## 2.0.9

- Allow draft-js v0.11
- Remove unused dependencies
- Add typescript typings

## 2.0.8

- Fixed creator method.

## 2.0.7

- fixed a potential bug with shared state [#1176](https://github.com/draft-js-plugins/draft-js-plugins/issues/1176)

## 2.0.5 - 2.0.6

- bumped find-with-regex

### 2.0.4

- fixed image resizing bugs in Firefox [#1020](https://github.com/draft-js-plugins/draft-js-plugins/issues/1020)

### 2.0.3

- fixed incorrect behavior when resized from the left edge [#582](https://github.com/draft-js-plugins/draft-js-plugins/issues/582)

### 2.0.2

- accomodate editor dom reference for both react 0.15 and 0.16

### Released the first working of DraftJS Resizeable Plugin
