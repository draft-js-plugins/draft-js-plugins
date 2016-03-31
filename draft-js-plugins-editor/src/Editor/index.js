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

  static propTypes = {
    editorState: React.PropTypes.object.isRequired,
    onChange: React.PropTypes.func.isRequired,
    plugins: React.PropTypes.array,
  };

  constructor(props) {
    super(props);
    this.plugins = List(props.plugins).toArray();
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
      .filter((plug) => plug.handleKeyCommand)
      .map((plugin) => plugin.handleKeyCommand(command, this.getEditorState, this.onChange))
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
          const pluginCommand = plugin.keyBindingFn(keyboardEvent, this.getEditorState, this.onChange);
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

  handleDroppedFiles = (selection, files) => {
    if (this.props.handleDroppedFiles) {
      const result = this.props.handleDroppedFiles({
        selection,
        files,
        getEditorState: this.getEditorState,
        updateEditorState: this.onChange,
        props: this.props,
      });
      if (result) {
        return result;
      }
    }

    return this.plugins
        .map((plugin) => {
          if (plugin.handleDroppedFiles) {
            const result = plugin.handleDroppedFiles({
              selection,
              files,
              getEditorState: this.getEditorState,
              updateEditorState: this.onChange,
              props: this.props,
            });
            if (result) {
              return result;
            }
          }

          return undefined;
        })
        .find((result) => result !== undefined);
  };

  handleDrop = (selection, dataTransfer, isInternal) => {
    if (this.props.handleDrop) {
      const result = this.props.handleDrop({
        selection,
        dataTransfer,
        isInternal,
        getEditorState: this.getEditorState,
        updateEditorState: this.onChange,
        props: this.props,
      });
      if (result) {
        return result;
      }
    }

    return this.plugins
        .map((plugin) => {
          if (plugin.handleDrop) {
            const result = plugin.handleDrop({
              selection,
              dataTransfer,
              isInternal,
              getEditorState: this.getEditorState,
              updateEditorState: this.onChange,
              props: this.props,
            });
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
        handleDroppedFiles={ this.handleDroppedFiles }
        handleDrop={ this.handleDrop }
        editorState={this.editorState}
        blockRendererFn={this.blockRendererFn}
        ref="editor"
      />
    );
  }
}
