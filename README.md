# Unicorn Editor

This a playground to explore a plugin architecture on top of draft-js.

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
```
import { createEmpty } from 'draft-js-plugin-editor';

const editorState = createEmpty(plugins);
```

#### createWithContent (coming soon …)

Function to creates an EditorState based on leveraging the decorators of the provided plugins.

Usage:
```
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
```
import React, { Component } from 'react';
import Editor, { createEmpty } from 'draft-js-plugin-editor';
import hashtagPlugin from 'draft-js-hashtag-plugin';
import linkPlugin from 'draft-js-link-plugin';
import { EditorState } from 'draft-js';
import { List } from 'immutable';

const hashtagPluginInstance = hashtagPlugin();
const linkPluginInstance = linkPlugin();

const plugins = List([
  hashtagPluginInstance,
  linkPluginInstance,
]);

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

## License

MIT
