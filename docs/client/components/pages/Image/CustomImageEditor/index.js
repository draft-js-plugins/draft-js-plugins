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
// eslint-disable-next-line import/no-unresolved
import createDndPlugin from 'draft-js-dnd-plugin';
import editorStyles from './editorStyles.css';

const focusPlugin = createFocusPlugin();
const resizeablePlugin = createResizeablePlugin();
const entityPropsPlugin = createEntityPropsPlugin();
const dndPlugin = createDndPlugin();
const decorator = composeDecorators(
  resizeablePlugin.decorator,
  focusPlugin.decorator,
  dndPlugin.decorator
);

const imagePlugin = createImagePlugin({ decorator });
const plugins = [entityPropsPlugin, dndPlugin, focusPlugin, resizeablePlugin, imagePlugin];
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
