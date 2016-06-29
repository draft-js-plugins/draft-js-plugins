# DraftJS Alignment Plugin

*This is a plugin for the `draft-js-plugins-editor`.*

This plugin is used in conjunction with "draft-js-toolbar-plugin".
It provides a decorator to align the given selection left, center or right.

Usage:

```js
import createAlignmentPlugin from 'draft-js-alignment-plugin';

const alignmentPlugin = createAlignmentPlugin();
```

Dependencies:

This plugin requires that the `draft-js-entity-props-plugin` is also applied to the `Editor`;
