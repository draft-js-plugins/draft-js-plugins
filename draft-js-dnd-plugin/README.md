# DraftJS Drag&Drop Plugin

*This is a plugin for the `draft-js-plugins-editor`.*

This plugin adds drag and drop functionality to your editor!

- Drop files
- Move blocks that are wrapped by `DraggableDecorator`
- Drop a text like 'type:image' to create a new block of type image

Usage:

```js
import createDndPlugin from 'draft-js-dnd-plugin';

const dndPlugin = createDndPlugin();
```
