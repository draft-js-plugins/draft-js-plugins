# History Plugin

*This is a plugin for the `draft-js-plugin-editor`.*

This plugin adds undo/redo functionality to your editor!

## Usage

First instantiate the plugin:

```js
import historyPlugin from 'draft-js-history-plugin';

const historyPluginInstance = historyPlugin();
```

Now import the `UndoButton` and the `RedoButton` from the instance:

```JS
import { UndoButton, RedoButton } from historyPluginInstance;
```

Which take two props, `onChange` (a function that takes a new editor state as an argument and updates your editors state) and `editorState` (the current editor state). Render them with those props and your editor now has undo/redo functionality!

```HTML
<UndoButton onChange={ this.onChange } editorState={ this.state.editorState } />
<RedoButton onChange={ this.onChange } editorState={ this.state.editorState } />
```

## Visualization

You can visualize your history with the `History` component, used like this:

```JS
import { History } from historyPluginInstance;
```

```HTML
<History editorState={ this.state.editorState } />
```
