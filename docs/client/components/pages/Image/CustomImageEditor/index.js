import React, { Component } from 'react';
import { EditorState } from 'draft-js';
// eslint-disable-next-line import/no-unresolved
import Editor, { composeDecorators } from 'draft-js-plugins-editor';
// eslint-disable-next-line import/no-unresolved
import createImagePlugin from 'draft-js-image-plugin';
// eslint-disable-next-line import/no-unresolved
import createFocusPlugin from 'draft-js-focus-plugin';
// eslint-disable-next-line import/no-unresolved
import createResizeablePlugin from 'draft-js-resizeable-plugin';
// eslint-disable-next-line import/no-unresolved
import createEntityPropsPlugin from 'draft-js-entity-props-plugin';
import editorStyles from './editorStyles.css';

const focusPlugin = createFocusPlugin();
const resizeablePlugin = createResizeablePlugin();
const entityPropsPlugin = createEntityPropsPlugin();
const decorator = composeDecorators(
  resizeablePlugin.Decorator,
  focusPlugin.Decorator
);
// const imagePlugin = createImagePlugin({ decorator: resizeablePlugin.Decorator });
// const imagePlugin = createImagePlugin({ decorator: focusPlugin.Decorator });
const imagePlugin = createImagePlugin({ decorator });
const plugins = [entityPropsPlugin, focusPlugin, resizeablePlugin, imagePlugin];
const { ImageAdd } = imagePlugin;

export default class CustomImageEditor extends Component {

  state = {
    editorState: EditorState.createEmpty(),
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
        <ImageAdd
          editorState={this.state.editorState}
          onChange={this.onChange}
        />
      </div>
    );
  }
}
