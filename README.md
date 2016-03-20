# DraftJS Plugins

![Draft JS Plugins Logo](https://dl.dropboxusercontent.com/u/40735/draft-js-plugins.svg)

High quality plugins with great UX on to of [DraftJS](https://github.com/facebook/draft-js).

## Available Plugins

- Stickers
- Hashtags
- Linkify
- Mentions

[![Build Status](https://travis-ci.org/nikgraf/draft-js-plugins.svg?branch=master)](https://travis-ci.org/nikgraf/draft-js-plugins)

## Live Example

Checkout [the website](https://www.draft-js-plugins.com/)!

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
import Editor from 'draft-js-plugin-editor';
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
    editorState: EditorState.createEmpty(),
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

#### `createWithText`

Function to creates an EditorState with some text.

Usage:

```js
import { createWithText } from 'draft-js-plugin-editor';

const editorState = createWithText('Hello World!', plugins);
```

### Plugins

- `draft-js-sticker-plugin`
- `draft-js-hastag-plugin`
- `draft-js-linkify-plugin`

#### How to write a Plugin

Feel free to copy any of the existing plugins as a starting point. Feel free to directly contact @nikgraf in case you need help or open a Github Issue!

You can also join the development team at #plugin-editor channel in the draftJS Slack. Sign up here: [https://draftjs.herokuapp.com/](https://draftjs.herokuapp.com/).

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
