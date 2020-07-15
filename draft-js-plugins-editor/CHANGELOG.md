# Change Log

All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

## To be released

- Replace legacy lifecycle hooks with UNSAFE aliases; the required react version is 16.3
- Hide internals in single bundle
- Add esm support
- Apply decorators and set selection after initial rendering to prevent `onChange` to trigger during the render cycle

## 3.0.0

- Upgrade to draft-js v0.11; the new version is incompatible with v0.10
- Add typescript typings
- Remove unused dependencies

## 2.1.1

- Use only part of RichUtils.handleKeyCommand, since we don't want to automatically assume that code, bold, italic and the likes are included in an editor

## 2.1.0

- Add defaultKeyCommands
- This fixes removing atomic block entities on backspace and also automatically adds richutils keycommand behaviour as detailed here https://draftjs.org/docs/quickstart-rich-styling.html#richutils-and-key-commands

## 2.0.8

- fix decorator resolution for custom decorators - "size" of undefined error #1034

## 2.0.6 - 2.0.7

- bumped find-with-regex

## 2.0.5

- Fix decorator resolution in componentWillReceiveProps

## 2.0.4

- Tighten Immutable.js dependency requirements to ~3.7.4 to match draft-js and other plugins

## 2.0.3

- Bugfix - componentWillReceiveProps causes infite update loop in some circumstances

## 2.0.2

- Automatically update decoratorless editorState upon props update

## 2.0.1

- blockStyleFn returns '' instead of false
- `handleKeyCommand` now receives the arguments `(command, editorState, pluginFunctions)`
- `handlePastedText` now receives the arguments `(text, html, editorState, pluginFunctions)`
- `handleBeforeInput` now receives the arguments `(chars, editorState, pluginFunctions)`
- `handleReturn` now receives the arguments `(event, editorState, pluginFunctions)`
- `onChange` & and all handlers now also receive: `getPlugins`, `getProps`, `getReadOnly`, `setReadOnly`, `getEditorRef`.
- `defaultBlockRenderMap` option, by default is set to true. If set to false the defaultBlockRenderMap from Draft.js is not used as base for the generated blockRenderMap.
- `decorators` option now allows custom implementations the [DraftDecoratorType](https://github.com/facebook/draft-js/blob/master/src/model/decorators/DraftDecoratorType.js) interface to be passed into the array along with the traditional CompositeDecorator objects
- added the utility function `composeDecorators` as a named export.
- Ignore handle `blockStyleFn` in case its value is `null` . [#596](https://github.com/draft-js-plugins/draft-js-plugins/pull/596)

### Removed

- `decorators` don't decorate plugins anymore.

## 1.1.0 - 2016-05-30

### Added

- Added `willUnmount` hook. This hook receives one object as argument, which contains `getEditorState` & `setEditorState`. The hook will be executed once the Editor component is about to be unmounted.

## 1.0.1 - 2016-05-03

### Fixed

- Properly handle the property `decorators` in case it's value is `null` [#233](https://github.com/draft-js-plugins/draft-js-plugins/issues/233)

## 1.0.0 - 2016-04-20

### Changed

- Moved to a flat configuration. Instead of plugin properties (decorators & hooks) being stored within pluginProps they now moved to the root object. See the changes here [#150](https://github.com/draft-js-plugins/draft-js-plugins/pull/150/files) as well as the initial discussion here [#143](https://github.com/draft-js-plugins/draft-js-plugins/issues/143)

### Added

- Added propTypes to the Editor
- Added `initialize` hook. This hook receives one object as argument, which contains `getEditorState` & `setEditorState`.

## 0.2.0 - 2016-03-25

### Changed

- Move DraftJS & ImmutableJS to peerDependencies instead of dependencies.

## 0.1.0 - 2016-03-25

### Added

- Allow to provide a custom handleKeyCommand to the Editor.

## 0.0.0 - 2016-03-23

### Released the first working version of DraftJS Plugins Editor
