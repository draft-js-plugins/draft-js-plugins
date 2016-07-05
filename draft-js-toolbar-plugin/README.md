# DraftJS Toolbar Plugin

*This is a plugin for the `draft-js-plugins-editor`.*

Usage:

```js
import createToolbarPlugin from 'draft-js-toolbar-plugin';

const toolbarPlugin = createToolbarPlugin(options);
```

## Options

| Key | Description | Accepted Value(s) | Default Value |
|---|---|---|---|
| clearTextActions | clear the default menu items | *Boolean* | `false` |
| textActions | An array of objects describing a text action. | *Array* | `null` |

## Example

```js
import createToolbarPlugin from 'draft-js-toolbar-plugin';

const toolbarPlugin = createToolbarPlugin(options);
  createToolbarPlugin({
    textActions: [{
      button: <span>H1</span>,
      key: 'H1',
      label: 'Header 1',
      active: (block, editorState) => block.get('type') === 'header-1',
      toggle: (block, action, editorState, setEditorState) => setEditorState(RichUtils.toggleBlockType(
        editorState,
        'header-1'
      )),
    }, {
      button: <span>H2</span>,
      key: 'H2',
      label: 'Header 2',
      active: (block, editorState) => block.get('type') === 'header-2',
      toggle: (block, action, editorState, setEditorState) => setEditorState(RichUtils.toggleBlockType(
        editorState,
        'header-2'
      )),
    }]
  })
```
