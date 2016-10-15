# Change Log

All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

## To Be Released

### Added

- `onChange` & and all handlers now also receive: `getPlugins`, `getProps`, `getReadOnly`, `setReadOnly`.
- 'defaultBlockRenderMap' option, by default it set to true. If set to false the defaultBlockRenderMap from Draft.js is not used as base for the generated blockRenderMap.

### Removed

- `decorators` don't decorate plugins anymore.

### Changed

- *Breaking change* The `plugins` and `decorators` editor props need to be an Immutable.List()
- When `plugins` and `decorators` props change the editor will re-apply them on editorState, this means the client can now add and remove plugins and decorators while the plugin editor is still mounteB and the editor will act as expected.
- When the editorState prop has no decorators set the editor will re-apply them on editorState, this means that the client can now load new editorState even after the plugin editor has already been mounted.

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
