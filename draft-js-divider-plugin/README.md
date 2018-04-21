# DraftJS Divider Plugin

*This is a plugin for the `draft-js-plugins-editor`.*

## Usage

```js
import createDividerPlugin from 'draft-js-divider-plugin';

const dividerPlugin = createDividerPlugin();
```

It exposes `addDivider` function and `DividerButton`.

You can use this plugin like below.

```js
/* eslint-disable  */

import React, { Component } from 'react';

import 'draft-js/dist/Draft.css';

import Editor, { createEditorStateWithText } from 'draft-js-plugins-editor';

import createSideToolbarPlugin from 'draft-js-side-toolbar-plugin';
import BlockTypeSelect from 'draft-js-side-toolbar-plugin/lib/components/BlockTypeSelect';
import 'draft-js-side-toolbar-plugin/lib/plugin.css';

import createDividerPlugin from 'draft-js-divider-plugin';
import 'draft-js-divider-plugin/lib/plugin.css';

const dividerPlugin = createDividerPlugin();

const DefaultBlockTypeSelect = ({ getEditorState, setEditorState, theme }) => (
  <BlockTypeSelect
    getEditorState={getEditorState}
    setEditorState={setEditorState}
    theme={theme}
    structure={[dividerPlugin.DividerButton]}
  />
);

const sideToolbarPlugin = createSideToolbarPlugin({
  structure: [DefaultBlockTypeSelect],
});

import './Editor.css';

const plugins = [sideToolbarPlugin, dividerPlugin];
const { SideToolbar } = sideToolbarPlugin;

class CustomEditor extends Component {
  state = {
    editorState: createEditorStateWithText(''),
  };

  onChange = editorState => {
    this.setState({
      editorState,
    });
  };

  render() {
    return (
      <div className="App">
        <div className="editor">
          <Editor
            placeholder="placeholder ..."
            readOnly={false}
            editorState={this.state.editorState}
            onChange={this.onChange}
            plugins={plugins}
            ref={element => {
              this.editor = element;
            }}
          />

          <SideToolbar />
        </div>
      </div>
    );
  }
}

export default CustomEditor;
```

### Importing the default styles

The plugin ships with a default styling available at this location in the installed package:
`draft-js-divider-plugin/lib/plugin.css`.

If you want to use the default styles, you can include this stylesheet.
Otherwise you can supply your own styles via the `theme` config option.
