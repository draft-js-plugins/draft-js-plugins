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

  onTab = (keyboardEvent) => {
    // TODO allow to provide a custom onTab

    this.plugins.map((plugin) => {
      if (plugin.onTab) {
        plugin.onTab(keyboardEvent);
      }

      return undefined;
    });
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

  // Inject props into blockRendererFn blocks
  injectBlockProps(b) {
    let props = {};
    const block = b;

    if (this.props.injectBlockProps) {
      const result = this.props.injectBlockProps(block, this.getEditorState, this.onChange);
      if (result) {
        props = { ...result, ...props };
      }
    }

    this.plugins
        .forEach((plugin) => {
          if (plugin.injectBlockProps) {
            const result = plugin.injectBlockProps(block, this.getEditorState, this.onChange);
            if (result) {
              props = { ...result, ...props };
            }
          }

          return undefined;
        });

    if (block.props) block.props = { ...block.props, ...props };
    else block.props = props;
    return block;
  }

  blockRendererFn = (contentBlock) => {
    // TODO optimize to break after the first one
    if (this.props.blockRendererFn) {
      const result = this.props.blockRendererFn(contentBlock);
      if (result) {
        return this.injectBlockProps(result);
      }
    }

    return this.plugins
      .map((plugin) => {
        if (plugin.blockRendererFn) {
          const result = plugin.blockRendererFn(contentBlock, this.getEditorState, this.onChange);
          if (result) {
            return this.injectBlockProps(result);
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
        editorState: this.getEditorState,
        onChange: this.onChange,
        props: this.props
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
              editorState: this.getEditorState,
              onChange: this.onChange,
              props: this.props
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
        editorState: this.getEditorState,
        onChange: this.onChange,
        props: this.props
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
              editorState: this.getEditorState,
              onChange: this.onChange,
              props: this.props
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
        handleDroppedFiles={ this.handleDroppedFiles }
        handleDrop={ this.handleDrop }
        editorState={ this.editorState }
        blockRendererFn={ this.blockRendererFn }
        handleKeyCommand={ this.handleKeyCommand }
        keyBindingFn={ this.keyBindingFn }
        onDownArrow={ this.onDownArrow }
        onTab={ this.onTab }
        onUpArrow={ this.onUpArrow }
        onEscape={ this.onEscape }
        handleReturn={ this.handleReturn }
        ref="editor"
      />
    );
  }
}
