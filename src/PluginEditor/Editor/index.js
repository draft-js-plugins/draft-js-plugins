/**
 * The main editor component
 */

import React, { Component } from 'react';
import { Editor } from 'draft-js';

export default class PluginEditor extends Component {

  // TODO add flow types & propTypes - since it's a library and people might not use flow we want to have both

  constructor(props) {
    super(props);
    this.initializeProps(props);
  }

  componentWillReceiveProps(props) {
    this.initializeProps(props);
  }

  // Cycle through the plugins, changing the editor state with what the plugins
  // changed (or didn't)
  onChange = (editorState) => {
    let newEditorState = editorState;
    this.plugins.forEach((plugin) => {
      if (plugin.onChange) {
        newEditorState = plugin.onChange(newEditorState);
      }
    });

    if (this.propsOnChange) {
      this.propsOnChange(newEditorState);
    }
  };

  blockRendererFn = (contentBlock) => {
    if (this.propsBlockRendererFn) {
      const result = this.propsBlockRendererFn(contentBlock);
      if (result) {
        return result;
      }
    }

    return this.plugins
      .map((plugin) => {
        if (plugin.blockRendererFn) {
          const result = plugin.blockRendererFn(contentBlock, this);
          if (result) {
            return result;
          }
        }

        return undefined;
      })
      .find((result) => result !== undefined);
  };

  // Put the keyboard focus on the editor
  focus = () => {
    this.refs.editor.focus();
  };

  // Initialize the props and save some component-specific data
  initializeProps(properties) {
    const {
      blockRendererFn, // eslint-disable-line
      editorState, // eslint-disable-line
      plugins, // eslint-disable-line
      onChange, // eslint-disable-line
      ...editorProps, // eslint-disable-line
    } = properties;
    this.plugins = plugins;
    this.editorState = editorState;
    this.propsOnChange = onChange;
    this.propsBlockRendererFn = blockRendererFn;
    this.editorProps = editorProps;
  }

  render() {
    return (
      <Editor
        {...this.editorProps}
        onChange={ this.onChange }
        editorState={ this.editorState }
        blockRendererFn={ this.blockRendererFn }
        ref="editor"
      />
    );
  }
}
