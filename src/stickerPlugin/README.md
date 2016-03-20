# Sticker Plugin

*This is a plugin for the `draft-js-plugins-editor`.*

This plugin allows you to add stickers to your editor!

Usage:

```js
import createStickerPlugin from 'draft-js-sticker-plugin';

const stickerPlugin = createStickerPlugin({ stickers });
const { StickerSelect } = stickerPlugin;
```

#### Exported functions

| Props                                          | Description
| -----------------------------------------------|------------:|
| add(editorState: Object, stickerId: any) | add a Sticker ContentBlock after the current Selection|
| remove(editorState: Object, blockKey: String) | removes a Sticker ContentBlock|
| Sticker | the default Sticker Component |
| StickerSelect | a basic StickerSelector |
