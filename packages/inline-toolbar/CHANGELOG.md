# Change Log

All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

## To be released

## 4.1.5

- Account for scroll offsets of 0 in parent elements of DraftEditor-root

- Account for scroll offsets in parent elements of DraftEditor-root [#2766](https://github.com/draft-js-plugins/draft-js-plugins/issues/2766)
## 4.1.4

- Account for scroll offsets in parent elements of DraftEditor-root [#2766](https://github.com/draft-js-plugins/draft-js-plugins/issues/2766)

## 4.1.3

- support react 18 in peer dependencies [#2701](https://github.com/draft-js-plugins/draft-js-plugins/issues/2701)

## 4.1.2

- add `sideEffects` for css files [#1833](https://github.com/draft-js-plugins/draft-js-plugins/issues/1833)

## 4.1.1

- adjust types to fix issue with anchor plugin [#1802](https://github.com/draft-js-plugins/draft-js-plugins/issues/1802)

## 4.1.0

- add "sideEffects": false for tree shaking

## 4.0.0

- Replace legacy lifecycle hooks with UNSAFE aliases; the required react version is 16.3
- Migrate styles to linaria
- Hide internals in single bundle
- Add esm support
- Fixed ts definition in order to be able to include the component without childs
- convert to typescript

## 3.0.1

- Allow draft-js v0.11
- Remove unused dependencies
- Add typescript typings

## 3.0.0

- Swap structure prop in static toolbar for render prop

## 2.0.3 - 2.0.4

- bumped find-with-regex

## 2.0.2

- Fixed positioning when the editor has a parent node that is positioned (i.e. `relative`, `absolute` or `fixed`).
