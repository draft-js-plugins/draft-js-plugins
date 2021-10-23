# Change Log

All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

## To Be Released

### Changed

- Instead of using a defualt object of Linkify-it, we can pass it as an optional arg for `extractLinks` & `createLinkifyPlugin`. This change was important to give the ability to customize the default configurations of Linkify-it object.

- Instead of using a object of Linkify-it, old behavior kept as it is and we can pass it as a custom funcation that return an array that contains the links index, lastIndex for `createLinkifyPlugin`. This change was important to give the ability to customize the default behaver.

- Rename customExtractLinksFun to customExtractLinks
- customExtractLinks return an array that contains the links index, lastIndex & url

## 4.1.1

- add `sideEffects` for css files [#1833](https://github.com/draft-js-plugins/draft-js-plugins/issues/1833)

## 4.1.0

- add "sideEffects": false for tree shaking

## 4.0.0

- Migrate styles to linaria
- Hide internals in single bundle
- Add esm support
- convert to typescript
- expose extractLinks function

## 2.0.2

- Allow draft-js v0.11
- Remove unused dependencies

## 2.0.0

- Added rel attribute
- The plugin now accepts a `component` config and if provided this component will be rendered instead of the default Anchor tag. Thanks to @antoinerey.

## 1.0.1 - 2016-04-29

### Fix

- Linkify link email addresses or websites when they are placed inside parenthesis [#244](https://github.com/draft-js-plugins/draft-js-plugins/issues/244)

## 1.0.0 - 2016-04-20

### Changed

- Moved to a flat configuration. Instead of plugin properties (decorators & hooks) being stored within pluginProps they now moved to the root object. See the changes here [#150](https://github.com/draft-js-plugins/draft-js-plugins/pull/150/files) as well as the initial discussion here [#143](https://github.com/draft-js-plugins/draft-js-plugins/issues/143)
- Moved the option `theme` from an Immutable Map to a JavaScript object. This is more likely to become a standard.

### Added

- Added the ability to set a target attribute through `config.target`. The default value is `_self`.

### Fix

- Utilize the [linkify-it](https://github.com/markdown-it/linkify-it) library to generate smart href values for the resulting component e.g. `www.draft-js-plugins.com` will result in `http://www.draft-js-plugins.com`.

## 0.0.3 - 2016-03-25

### Released the first working version of DraftJS Linkify Plugin

It's not recommended to use the version 0.0.0 - 0.0.2
