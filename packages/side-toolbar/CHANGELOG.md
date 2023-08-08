# Change Log

All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

## To be released

## 5.0.2

- adjust react peer dependency

## 5.0.1

- support react 18 in peer dependencies [#2701](https://github.com/draft-js-plugins/draft-js-plugins/issues/2701)

## 5.0.0

- add `createBlockTypeSelectPopperOptions` option to control `popper.js` for BlockTypeSelect popup [#2182](https://github.com/draft-js-plugins/draft-js-plugins/issues/2182)
- css class `spacer` removed and `popupFrame` and `arrow` added
- refactor components to functional components
- add `sideToolbarButtonComponent` option for custom button component [#2179](https://github.com/draft-js-plugins/draft-js-plugins/issues/2179)

## 4.2.1

- add `sideEffects` for css files [#1833](https://github.com/draft-js-plugins/draft-js-plugins/issues/1833)

## 4.2.0

- change overlay to `popper.js`, add option `popperOptions` [#2054](https://github.com/draft-js-plugins/draft-js-plugins/issues/2054)

## 4.1.0

- add "sideEffects": false for tree shaking

## 4.0.0

- Migrate styles to linaria
- Hide internals in single bundle
- Add esm support
- Added TS definitions
- convert to typescript

## 3.0.2

- Allow draft-js v0.11
- Remove unused dependencies

## 3.0.1

- fixed onMouseDown handler

### 3.0.0

- Swap structure prop in side toolbar for render prop
- Add `position` configuration for positioning left side or right side.

## 2.0.4 - 2.0.5

- bumped find-with-regex

### 2.0.3

- Fixed positioning when the editor has a parent node that is positioned (i.e. `relative`, `absolute` or `fixed`).

### 2.0.2

- accomodate editor dom reference for both react 0.15 and 0.16

### Released the first working of DraftJS Side Toolbar Plugin
