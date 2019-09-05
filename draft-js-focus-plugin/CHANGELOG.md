# Change Log

All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

## To Be Released

- Migrate styles to linaria
- Hide internals in single bundle
- Add esm support

## 3.0.1

- removed deprecated draft-js hooks (onUpArrow, onDownArrow) usage

## 3.0.0

- Upgrade to draft-js v0.11; the new version is incompatible with v0.10
- Remove unused dependencies
- Add typescript typings

## 2.2.0

- Fix blockKeyStore behaviour so it is not accidentally deleted before the component has finished mounting.

## 2.1.0

- Fix removeBlock behaviour (replace with unstyled block when no previous block...)

## 2.0.6

- Include all delete commands when handling deleting atomic blocks

## 2.0.5

- Delete block entities when deleting content

## 2.0.3 - 2.0.4

- bumped find-with-regex

## 2.0.2

- fix newline linked to entity
