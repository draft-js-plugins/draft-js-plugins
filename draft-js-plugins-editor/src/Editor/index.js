/**
 * The main editor c;omponent
 */

import React, { Component } from 'react';
import {
  Editor,
  EditorState,
  getDefaultKeyBinding,
  KeyBindingUtil,
} from 'draft-js';

import createCompositeDecorator from '../utils/createCompositeDecorator';
import moveSelectionToEnd from '../utils/moveSelectionToEnd';
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
    const compositeDecorator = createCompositeDecorator(this.plugins, this.getEditorState, this.onChange);

    // TODO consider triggering an onChange here to make sure the editorState is in sync
    // with the outer Editor context
    const editorState = EditorState.set(this.props.editorState, { decorator: compositeDecorator });
    this.editorState = moveSelectionToEnd(editorState);
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

  getEditorState = () => this.editorState;

  handleKeyCommand = (command) => {
    let preventDefaultBehaviour = false;
    if (this.props.handleKeyCommand) {
      const handled = this.props.handleKeyCommand(command);
      if (handled === true) {
        preventDefaultBehaviour = true;
      }
    }

    // TODO optimize to break after the first one
    preventDefaultBehaviour = this.plugins
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
          const result = plugin.blockRendererFn(contentBlock, this.getEditorState, this.onChange);
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

  createHandleListener = (name) => (event) => (
    this.plugins
      .filter((plug) => plug[name])
      .map((plugin) => plugin[name](event))
      .find((result) => result === true) === true
  );

  createOnListener = (name) => (event) => (
    this.plugins
      .filter(plug => typeof plug[name] === 'function')
      .forEach(plug => plug[name](event))
  );

  createEventListeners = () => {
    const listeners = {
      onChange: this.onChange,
      editorState: this.editorState,
      blockRendererFn: this.blockRendererFn,
      handleKeyCommand: this.handleKeyCommand,
      keyBindingFn: this.keyBindingFn,
      handleReturn: this.handleReturn,
    };

    const keepHandlers = ['onChange', 'handleKeyCommand'];

    // bind random onListeners and handleListeners
    this.plugins.forEach((plug) => {
      Object.keys(plug).forEach((attrName) => {
        if (attrName.indexOf('on') === 0 && !keepHandlers.includes(attrName)) {
          listeners[attrName] = this.createOnListener(attrName);
        }

        if (attrName.indexOf('handle') === 0 && !keepHandlers.includes(attrName)) {
          listeners[attrName] = this.createHandleListener(attrName);
        }
      });
    });

    return listeners;
  };

  render() {
    let pluginProps = {};

    // This puts pluginProps and the object inside getEditorProps
    // on the Editor component (main use case is for aria props right now)
    // Last plugin wins right now (not ideal)
    this.plugins.forEach((plugin) => {
      if (plugin.getEditorProps) {
        pluginProps = {
          ...pluginProps,
          ...plugin.getEditorProps(),
        };
      }
    });

    const listeners = this.createEventListeners();

    return (
      <Editor
        {...pluginProps}
        {...this.props}
        {...listeners}
        ref="editor"
      />
    );
  }
}
