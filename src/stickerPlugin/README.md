# Sticker Plugin

*This is a plugin for the `draft-js-plugin-editor`.*

This plugin allows you to add stickers to your editor!

Usage:

```js
import stickerPlugin from 'draft-js-sticker-plugin';

const stickerPluginInstance = stickerPlugin({ stickers });
const { StickerSelect } = stickerPluginInstance;
```

#### Exported functions

| Props                                          | Description
| -----------------------------------------------|------------:|
| add(editorState: Object, stickerId: any) | add a Sticker ContentBlock after the current Selection|
| remove(editorState: Object, blockKey: String) | removes a Sticker ContentBlock|
| Sticker | the default Sticker Component |
| StickerSelect | a basic StickerSelector |
