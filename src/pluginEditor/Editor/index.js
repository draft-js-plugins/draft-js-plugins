/**
 * The main editor component
 */

import React, { Component } from 'react';
import {
  Editor,
  EditorState,
  getDefaultKeyBinding,
  KeyBindingUtil,
} from 'draft-js';
import createCompositeDecorator from '../utils/createCompositeDecorator';
import moveToEndOfSelectedBlock from '../modifiers/moveToEndOfSelectedBlock';
import moveToStartOfSelectedBlock from '../modifiers/moveToStartOfSelectedBlock';
import { List } from 'immutable';

export default class PluginEditor extends Component {

  // TODO add flow types & propTypes - since it's a library and people might not use flow we want to have both

  constructor(props) {
    super(props);
    this.plugins = List(props.plugins)
      .filter((plugin) => plugin.pluginProps !== undefined)
      .map((plugin) => plugin.pluginProps)
      .toArray();
    const compositeDecorator = createCompositeDecorator(this.plugins, this);

    // TODO consider triggering an onChange here to make sure the editorState is in sync
    // with the outer Editor context
    const editorState = EditorState.set(this.props.editorState, { decorator: compositeDecorator });
    this.editorState = EditorState.moveFocusToEnd(editorState);
  }

  componentWillMount() {
    // Makes sure the editorState of the wrapping component is in sync with the
    // internal one, because we added the decorator in the constructor.
    if (this.props.onChange) {
      this.props.onChange(this.editorState);
    }
  }

  componentWillReceiveProps(props) {
    this.editorState = props.editorState;
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

    if (this.props.onChange) {
      this.props.onChange(newEditorState);
    }
  };

  onDownArrow = (keyboardEvent) => {
    // TODO allow to provide a custom onDownArrow

    this.plugins.map((plugin) => {
      if (plugin.onDownArrow) {
        plugin.onDownArrow(keyboardEvent);
      }

      return undefined;
    });
  };

  onUpArrow = (keyboardEvent) => {
    // TODO allow to provide a custom onUpArrow

    this.plugins.map((plugin) => {
      if (plugin.onUpArrow) {
        plugin.onUpArrow(keyboardEvent);
      }

      return undefined;
    });
  };

  onEscape = (keyboardEvent) => {
    // TODO allow to provide a custom onEscape

    this.plugins.map((plugin) => {
      if (plugin.onEscape) {
        plugin.onEscape(keyboardEvent);
      }

      return undefined;
    });
  };

  handleKeyCommand = (command) => {
    // TODO optimize to break after the first one
    let preventDefaultBehaviour = this.plugins
      .map((plugin) => {
        if (plugin.handleKeyCommand) {
          const handled = plugin.handleKeyCommand(command);
          if (handled === true) {
            return handled;
          }
        }

        return undefined;
      })
      .find((result) => result === true);

    if (command === 'plugin-editor-move-to-start') {
      moveToStartOfSelectedBlock(this.editorState, this.props.onChange);
      preventDefaultBehaviour = true;
    } else if (command === 'plugin-editor-move-to-end') {
      moveToEndOfSelectedBlock(this.editorState, this.props.onChange);
      preventDefaultBehaviour = true;
    }

    // TODO allow to provide a custom handleKeyCommand
    return preventDefaultBehaviour === true;
  };

  handleReturn = (keyboardEvent) => {
    // TODO optimize to break after the first one
    const preventDefaultBehaviour = this.plugins
      .map((plugin) => {
        if (plugin.handleReturn) {
          const handled = plugin.handleReturn(keyboardEvent);
          if (handled === true) {
            return handled;
          }
        }

        return undefined;
      })
      .find((result) => result === true);

    // TODO allow to provide a custom handleReturn
    return preventDefaultBehaviour === true;
  };

  keyBindingFn = (keyboardEvent) => {
    // TODO optimize to break after the first one
    let command = this.plugins
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

    if (command === undefined) {
      if (keyboardEvent.keyCode === 37 && KeyBindingUtil.hasCommandModifier(keyboardEvent)) {
        command = 'plugin-editor-move-to-start';
      } else if (keyboardEvent.keyCode === 39 && KeyBindingUtil.hasCommandModifier(keyboardEvent)) {
        command = 'plugin-editor-move-to-end';
      }
    }

    // TODO allow to provide a custom handleKeyCommand

    return command !== undefined ? command : getDefaultKeyBinding(keyboardEvent);
  };

  blockRendererFn = (contentBlock) => {
    // TODO optimize to break after the first one
    if (this.props.blockRendererFn) {
      const result = this.props.blockRendererFn(contentBlock);
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

  render() {
    let pluginProps = {};
    this.plugins.forEach((plugin) => {
      if (plugin.getEditorProps) {
        pluginProps = {
          ...pluginProps,
          ...plugin.getEditorProps(),
        };
      }
    });

    return (
      <Editor
        {...pluginProps}
        {...this.props}
        onChange={ this.onChange }
        editorState={ this.editorState }
        blockRendererFn={ this.blockRendererFn }
        handleKeyCommand={ this.handleKeyCommand }
        keyBindingFn={ this.keyBindingFn }
        onDownArrow={ this.onDownArrow }
        onUpArrow={ this.onUpArrow }
        onEscape={ this.onEscape }
        handleReturn={ this.handleReturn }
        ref="editor"
      />
    );
  }
}
