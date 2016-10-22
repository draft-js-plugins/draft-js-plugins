import React, { Component } from 'react';
import { EditorState } from 'draft-js';
// eslint-disable-next-line import/no-unresolved
import Editor from 'draft-js-plugins-editor';
// eslint-disable-next-line import/no-unresolved
import createImagePlugin from 'draft-js-image-plugin';
// eslint-disable-next-line import/no-unresolved
import createFocusPlugin from 'draft-js-focus-plugin';
// eslint-disable-next-line import/no-unresolved
// import createResizeablePlugin from 'draft-js-resizeable-plugin';
// eslint-disable-next-line import/no-unresolved
import createEntityPropsPlugin from 'draft-js-entity-props-plugin';
import editorStyles from './editorStyles.css';

const focusPlugin = createFocusPlugin();
// const resizeablePlugin = createResizeablePlugin();
const entityPropsPlugin = createEntityPropsPlugin();
// const imagePlugin = createImagePlugin({ decorator: resizeablePlugin.Decorator });
const imagePlugin = createImagePlugin({ decorator: focusPlugin.Decorator });
const plugins = [entityPropsPlugin, focusPlugin, imagePlugin];
const { ImageAdd } = imagePlugin;

const getSelectedBlocks = (editorState) => {
  const selection = editorState.getSelection();
  const startKey = selection.getStartKey();
  const endKey = selection.getEndKey();
  const blockArray = editorState.getCurrentContent().getBlocksAsArray();
  let inSelection = false;

  return blockArray.reduce((previous, current) => {
    if (current.getKey() === startKey) {
      inSelection = true;
    }
    if (inSelection) {
      previous.push(current.getKey());
    }
    if (current.getKey() === endKey) {
      inSelection = false;
    }
    return previous;
  }, []);
};

const blockIsInSelection = (editorState, block) => {
  const selection = editorState.getSelection();
  const selectedBlocks = getSelectedBlocks(editorState);

  // The selection is 0-width and in the block || the selection includes the block
  return selection.getEndKey() === block.getKey() ||
    selection.hasEdgeWithin(block.getKey(), 0, block.getLength()) ||
    selectedBlocks.includes(block.getKey());
};

export default class CustomImageEditor extends Component {

  state = {
    editorState: EditorState.createEmpty(),
  };

  onChange = (editorState) => {
    console.log(editorState);
    console.log(editorState.getCurrentContent().toJS());
    // const selection = editorState.getSelection();
    const selectedBlocks = getSelectedBlocks(editorState);
    console.log('selectedBlocks', selectedBlocks);

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
