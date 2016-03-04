# DraftJS Plugin Editor

This a playground to explore a plugin architecture on top of draft-js.

## Available Plugins

- Stickers
- Hashtags
- Linkify
- @mentions (coming soon…)

[![Build Status](https://travis-ci.org/nikgraf/draft-js-plugin-editor.svg?branch=master)](https://travis-ci.org/nikgraf/draft-js-plugin-editor)

## Live Example

Checkout [the website](http://nikgraf.github.io/draft-js-plugin-editor/)!

## Usage

First, install the editor with `npm`:

```
$ npm install draft-js-plugin-editor --save
```

and then import it somewhere in your code and you're ready to go!

```js
import Editor from 'draft-js-plugin-editor';
```

## Documentation

### draft-js-plugin-editor

#### Editor

An editor component accepting plugins.

| Props                                          | Description  | Required
| -----------------------------------------------|:------------:| -------:|
| editorState                                    | [see here](https://facebook.github.io/draft-js/docs/api-reference-editor-state.html#content)| * |
| onChange                                       | [see here](https://facebook.github.io/draft-js/docs/api-reference-editor.html#onchange)| * |
| plugins                                        | an array of plugins |  |
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

#### `createEmpty`

Function to creates an empty EditorState leveraging the decorators of the provided plugins.

Usage:

```js
import { createEmpty } from 'draft-js-plugin-editor';

const editorState = createEmpty(plugins);
```

#### `createWithText`

Function to creates an EditorState with some text.

Usage:

```js
import { createWithText } from 'draft-js-plugin-editor';

const editorState = createWithText('Hello World!', plugins);
```

#### `createWithContent`

Function to creates an EditorState with provided pre-used data.

Usage:

```js
import { createWithContent } from 'draft-js-plugin-editor';

const editorState = createWithContent(content, plugins);
```

### Plugins

- `draft-js-sticker-plugin`
- `draft-js-hastag-plugin`
- `draft-js-linkify-plugin`

#### How to write a Plugin

Feel free to copy any of the existing plugins as a starting point. Feel free to directly contact @nikgraf in case you need help or open a Github Issue!

More documentation is coming soon…

## Development

```
npm install
cd site
npm install
npm start
```

## License

MIT
