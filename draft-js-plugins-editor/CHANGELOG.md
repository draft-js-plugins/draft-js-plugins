# Change Log

All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

## To Be Released

## 1.0.1 - 2016-05-03

### Fixed

- Properly handle the property `decorators` in case it's value is `null` [#233](https://github.com/draft-js-plugins/draft-js-plugins/issues/233)

## 1.0.0 - 2016-04-20

### Changed

- Moved to a flat configuration. Instead of plugin properties (decorators & hooks) being stored within pluginProps they now moved to the root object. See the changes here [#150](https://github.com/draft-js-plugins/draft-js-plugins/pull/150/files) as well as the initial discussion here [#143](https://github.com/draft-js-plugins/draft-js-plugins/issues/143)

### Added

- Added propTypes to the Editor
- Added `initialize` hook. This hook receives one object as argument. The object contains `getEditorState` & `setEditorState`.

## 0.2.0 - 2016-03-25

### Changed

- Move DraftJS & ImmutableJS to peerDependencies instead of dependencies.

## 0.1.0 - 2016-03-25

### Added
- Allow to provide a custom handleKeyCommand to the Editor.

## 0.0.0 - 2016-03-23
### Released the first working version of DraftJS Plugins Editor
