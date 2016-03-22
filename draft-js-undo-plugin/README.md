# History Plugin

*This is a plugin for the `draft-js-plugins-editor`.*

This plugin adds undo/redo functionality to your editor!

## Usage

First instantiate the plugin:

```js
import createUndoPlugin from 'draft-js-undo-plugin';

const undoPlugin = createUndoPlugin();
```

Now import the `UndoButton` and the `RedoButton` from the instance:

```JS
import { UndoButton, RedoButton } from undoPlugin;
```

Which take two props, `onChange` (a function that takes a new editor state as an argument and updates your editors state) and `editorState` (the current editor state). Render them with those props and your editor now has undo/redo functionality!

```HTML
<UndoButton onChange={ this.onChange } editorState={ this.state.editorState } />
<RedoButton onChange={ this.onChange } editorState={ this.state.editorState } />
```
