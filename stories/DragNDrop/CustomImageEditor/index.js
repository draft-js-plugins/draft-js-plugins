import React, { Component } from 'react';
import {
  convertFromRaw,
  EditorState,
} from 'draft-js';
import Editor, { composeDecorators } from 'draft-js-plugins-editor';
import createImagePlugin from 'draft-js-image-plugin';
import createFocusPlugin from 'draft-js-focus-plugin';
import createBlockDndPlugin from 'draft-js-drag-n-drop-plugin';
import editorStyles from './editorStyles.css';

const focusPlugin = createFocusPlugin();
const blockDndPlugin = createBlockDndPlugin();

const decorator = composeDecorators(
  focusPlugin.decorator,
  blockDndPlugin.decorator
);
const imagePlugin = createImagePlugin({ decorator });

const plugins = [
  blockDndPlugin,
  focusPlugin,
  imagePlugin
];

/* eslint-disable */
const initialState = {
    "entityMap": {
        "0": {
            "type": "IMAGE",
            "mutability": "IMMUTABLE",
            "data": {
                "src": "/images/canada-landscape-small.jpg"
            }
        }
    },
    "blocks": [{
        "key": "9gm3s",
        "text": "You can have images in your text field which are draggable. Hover over the image press down your mouse button and drag it to another position inside the editor.",
        "type": "unstyled",
        "depth": 0,
        "inlineStyleRanges": [],
        "entityRanges": [],
        "data": {}
    }, {
        "key": "ov7r",
        "text": " ",
        "type": "atomic",
        "depth": 0,
        "inlineStyleRanges": [],
        "entityRanges": [{
            "offset": 0,
            "length": 1,
            "key": 0
        }],
        "data": {}
    }, {
        "key": "e23a8",
        "text": "You can checkout the alignment tool plugin documentation to see how to build a compatible block plugin …",
        "type": "unstyled",
        "depth": 0,
        "inlineStyleRanges": [],
        "entityRanges": [],
        "data": {}
    }]
};
/* eslint-enable */

export default class CustomImageEditor extends Component {

  state = {
    editorState: EditorState.createWithContent(convertFromRaw(initialState)),
  };

  onChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  focus = () => {
    this.editor.focus();
  };

  render() {
    return (
      <div>
        <div className={editorStyles.editor} onClick={this.focus}>
          <Editor
            editorState={this.state.editorState}
            onChange={this.onChange}
            plugins={plugins}
            ref={(element) => { this.editor = element; }}
          />
        </div>
      </div>
    );
  }
}
