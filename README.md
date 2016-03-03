# DraftJS Plugin Editor

This a playground to explore a plugin architecture on top of draft-js.

## Available Plugins

- Stickers
- Hashtags
- Linkify
- @-mentions (coming soon …)

## Live Example

Checkout [http://nikgraf.github.io/draft-js-plugin-editor/](http://nikgraf.github.io/draft-js-plugin-editor/)

## Install

```
npm install
cd site
npm install
npm start
```

## Documentation

### draft-js-plugin-editor

#### createEmpty

Function to creates an empty EditorState leveraging the decorators of the provided plugins.

Usage:
```js
import { createEmpty } from 'draft-js-plugin-editor';

const editorState = createEmpty(plugins);
```

#### createWithText

Function to creates an EditorState with some text.

Usage:
```js
import { createWithText } from 'draft-js-plugin-editor';

const editorState = createWithText('Hello World!', plugins);
```

#### createWithContent

Function to creates an EditorState with provided pre-used data.

Usage:
```js
import { createWithContent } from 'draft-js-plugin-editor';

const editorState = createWithContent(content, plugins);
```

#### Editor

An editor component accepting plugins.

| Props                                          | Description  | Required
| -----------------------------------------------|:------------:| -------:|
| editorState                                    | [see here](https://facebook.github.io/draft-js/docs/api-reference-editor-state.html#content)| * |
| onChange                                       | [see here](https://facebook.github.io/draft-js/docs/api-reference-editor.html#onchange)| * |
| plugins                                        | an immutable List of plugins |  |
| all other props accepted by the DraftJS Editor | [see here](https://facebook.github.io/draft-js/docs/api-reference-editor.html#props) |  |

Usage:
```js
import React, { Component } from 'react';
import Editor, { createEmpty } from 'draft-js-plugin-editor';
import hashtagPlugin from 'draft-js-hashtag-plugin';
import linkifyPlugin from 'draft-js-linkify-plugin';
import { EditorState } from 'draft-js';

const hashtagPluginInstance = hashtagPlugin();
const linkifyPluginInstance = linkifyPlugin();

const plugins = [
  hashtagPluginInstance,
  linkifyPluginInstance,
];

export default class UnicornEditor extends Component {

  state = {
    editorState: createEmpty(plugins),
  };

  onChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  render() {
    return (
      <Editor
        editorState={this.state.editorState}
        onChange={this.onChange}
        plugins={plugins}
        spellCheck
        readOnly={ this.state.readOnly }
        ref="editor"
      />
    );
  }
}
```

### draft-js-sticker-plugin

The Sticker Plugin allows users to place ContentBlocks of the type `sticker`.

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

### draft-js-hastag-plugin

The Hashtag Plugin allows users to write Hashtags which are styled in a different color.

```js
import hashtagPlugin from 'draft-js-hashtag-plugin';

const hashtagPluginInstance = hashtagPlugin();
```

### draft-js-linkify-plugin

The Linkify Plugin wraps every link in an Anchor-Tag which then is clickable in the `readOnly` mode.

```js
import linkifyPlugin from 'draft-js-linkify-plugin';

const linkifyPluginInstance = linkifyPlugin();
```

## How to write a Plugin

Feel free to copy any of the existing plugins as a starting point. Feel free to directly contact @nikgraf in case you need help or open a Github Issue.

More documentation is coming soon …

## License

MIT
