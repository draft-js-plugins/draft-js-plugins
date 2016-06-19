# DraftJS Plugins

![Draft JS Plugins Logo](https://dl.dropboxusercontent.com/u/40735/draft-js-plugins.svg)

High quality plugins with great UX on top of [DraftJS](https://github.com/facebook/draft-js).

[![Build Status](https://travis-ci.org/draft-js-plugins/draft-js-plugins.svg?branch=master)](https://travis-ci.org/draft-js-plugins/draft-js-plugins)

## Important Note

We currently prepare for a 2.0 beta. The `master` branch already contains unpublished features & plugins.

## Available Plugins

- [Emoji](https://www.draft-js-plugins.com/plugin/emoji)
- [Stickers](https://www.draft-js-plugins.com/plugin/sticker)
- [Hashtags](https://www.draft-js-plugins.com/plugin/hashtag)
- [Linkify](https://www.draft-js-plugins.com/plugin/linkify)
- [Mentions](https://www.draft-js-plugins.com/plugin/mention)
- [Counter](https://www.draft-js-plugins.com/plugin/counter)
- [Undo](https://www.draft-js-plugins.com/plugin/undo)
- or build your own … :)

### Built by the community

- [Autolist](https://github.com/icelab/draft-js-autolist-plugin) by [Max Wheeler/Icelab](https://github.com/makenosound)
- [Block Breakout](https://github.com/icelab/draft-js-block-breakout-plugin) by [Max Wheeler/Icelab](https://github.com/makenosound)
- [Single Line](https://github.com/icelab/draft-js-single-line-plugin) by [Max Wheeler/Icelab](https://github.com/makenosound)
- [RichButtons](https://github.com/jasonphillips/draft-js-richbuttons-plugin) by [jasonphillips](https://github.com/jasonphillips)

## Live Example & Documentation

Checkout [the website](https://www.draft-js-plugins.com/)!

## Usage

First, install the editor with `npm`:

```
$ npm install draft-js-plugins-editor --save
```

and then import it somewhere in your code and you're ready to go!

```js
import Editor from 'draft-js-plugins-editor';
```

## Documentation

### draft-js-plugins-editor

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
import Editor from 'draft-js-plugins-editor';
import createHashtagPlugin from 'draft-js-hashtag-plugin';
import createLinkifyPlugin from 'draft-js-linkify-plugin';
import { EditorState } from 'draft-js';

const hashtagPlugin = createHashtagPlugin();
const linkifyPlugin = createLinkifyPlugin();

const plugins = [
  hashtagPlugin,
  linkifyPlugin,
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
        ref="editor"
      />
    );
  }
}
```

#### How to write a Plugin

Feel free to copy any of the existing plugins as a starting point. Feel free to directly contact [@nikgraf](https://github.com/nikgraf) in case you need help or open a Github Issue!

More documentation is coming soon…

## Discussion and Support
Join the channel #draft-js-plugins after signing into the DraftJS [Slack organization](https://draftjs.herokuapp.com) or check out or collection of frequently asked questions here: [FAQ](https://github.com/draft-js-plugins/draft-js-plugins/blob/master/FAQ.md).

## Development

Check out our [Contribution Guide](https://github.com/draft-js-plugins/draft-js-plugins/blob/master/CONTRIBUTING.md).

## License

MIT
