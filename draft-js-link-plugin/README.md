# DraftJS Toolbar Plugin

*This is a plugin for the `draft-js-plugins-editor`.*
It exposes a LinkButton which toggles a link for the current selection

Usage:

```js
import createToolbarPlugin from 'draft-js-toolbar-plugin';

const toolbarPlugin = createToolbarPlugin(options);

const { LinkButton } = toolbarPlugin

```

## Options

| Key | Description | Accepted Value(s) | Default Value |
|---|---|---|---|
| clearTextActions | clear the default menu items | *Boolean* | `false` |
| textActions | An array of objects describing a text action. | *Array* | `null` |

