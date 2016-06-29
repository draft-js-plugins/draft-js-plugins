# DraftJS Inline Plugin

*This is a plugin for the `draft-js-plugins-editor`.*
It exposes buttons to toggle bold, italic and to underline

Usage:

```js
import createInlinePlugin from 'draft-js-inline-plugin';

const inlinePlugin = createInlinePlugin(options);

const { BoldButton, ItalicButton, UnderlineButton } = inlinePlugin

```
