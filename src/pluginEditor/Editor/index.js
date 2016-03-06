/**
 * The main editor component
 */

import React, { Component } from 'react';
import {
  Editor,
  EditorState,
  getDefaultKeyBinding,
} from 'draft-js-cutting-edge';
import createCompositeDecorator from '../utils/createCompositeDecorator';

export default class PluginEditor extends Component {

  // TODO add flow types & propTypes - since it's a library and people might not use flow we want to have both

  constructor(props) {
    super(props);
    this.initializeProps(props);
    const compositeDecorator = createCompositeDecorator(this.props.plugins, this);
    this.editorState = EditorState.set(this.editorState, { decorator: compositeDecorator });
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

  keyBindingFn = (keyboardEvent) => {
    // TODO optimize to break after the first one
    const command = this.plugins
      .map((plugin) => {
        if (plugin.keyBindingFn) {
          const pluginCommand = plugin.keyBindingFn(keyboardEvent);
          if (pluginCommand) {
            return pluginCommand;
          }
        }

        return undefined;
      })
      .find((result) => result !== undefined);

    // TODO allow to provide a custom handleKeyCommand

    return command !== undefined ? command : getDefaultKeyBinding(keyboardEvent);
  };

  handleKeyCommand = (command) => {
    // TODO optimize to break after the first one
    const preventDefaultBehaviour = this.plugins
      .map((plugin) => {
        if (plugin.handleKeyCommand) {
          const handled = plugin.handleKeyCommand(command);
          if (handled === true) {
            return handled;
          }
        }

        return undefined;
      })
      .find((result) => result !== false);

    // TODO allow to provide a custom handleKeyCommand

    return preventDefaultBehaviour === true ? preventDefaultBehaviour : false;
  };

  blockRendererFn = (contentBlock) => {
    // TODO optimize to break after the first one
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
    this.propsOnChange = onChange;
    this.propsBlockRendererFn = blockRendererFn;
    this.editorProps = editorProps;
    this.editorState = editorState;
  }

  render() {
    return (
      <Editor
        {...this.editorProps}
        onChange={ this.onChange }
        editorState={ this.editorState }
        blockRendererFn={ this.blockRendererFn }
        handleKeyCommand={ this.handleKeyCommand }
        keyBindingFn={ this.keyBindingFn }
        ref="editor"
      />
    );
  }
}
