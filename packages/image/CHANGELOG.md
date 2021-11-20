# Change Log

All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

## To be released

## 4.1.2

- add `sideEffects` for css files [#1833](https://github.com/draft-js-plugins/draft-js-plugins/issues/1833)

## 4.1.1

- add missing forwardRef for image component [#1977](https://github.com/draft-js-plugins/draft-js-plugins/issues/1977)

## 4.1.0

- add "sideEffects": false for tree shaking

## 4.0.0

- Migrate styles to linaria
- Hide internals in single bundle
- Add esm support
- convert to typescript

## 2.0.7

- Allow draft-js v0.11
- Remove unused dependencies
- Add typescript typings

## 2.0.6

- accept saved images with "image" as the entity type from old saved data for backwards compatibility

## 2.0.4 - 2.0.5

- use capitalised image entity type "IMAGE" for new images instead of "image"
- now works with convertFromHTML

## 2.0.3

- bumped find-with-regex

## 2.0.2

- don't assign blockStyleFn to img tag

## 2.0.0-rc9 - 2016-11-07

- fix addImage method (place cursor after inserted image)
- fixed critical bug in combination with focus plugin

## 2.0.0-rc8 - 2016-08-16

- added `extraData` parameter to addImage modifier, so additional parameters can be passed.
