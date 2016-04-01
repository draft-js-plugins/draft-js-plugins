import React, { Component } from 'react';
import {
  Editor,
  EditorState,
} from 'draft-js';

import createCompositeDecorator from './createCompositeDecorator';
import moveSelectionToEnd from './moveSelectionToEnd';
import * as defaultKeyBindingPlugin from './defaultKeyBindingPlugin';

/**
 * The main editor component
 */
export default class PluginEditor extends Component {

  static propTypes = {
    editorState: React.PropTypes.object.isRequired,
    onChange: React.PropTypes.func.isRequired,
    plugins: React.PropTypes.array,
  };

  constructor(props) {
    super(props);
    const compositeDecorator = createCompositeDecorator(props.plugins, this.getEditorState, this.onChange);

    // TODO consider triggering an onChange here to make sure the editorState is in sync
    // with the outer Editor context
    const editorState = EditorState.set(props.editorState, { decorator: compositeDecorator });
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
    this.props.plugins.forEach((plugin) => {
      if (plugin.onChange) {
        newEditorState = plugin.onChange(newEditorState);
      }
    });

    if (this.props.onChange) {
      this.props.onChange(newEditorState);
    }
  };

  getEditorState = () => this.editorState;

  // Put the keyboard focus on the editor
  focus = () => {
    this.refs.editor.focus();
  };

  createHandleHooks = (name, plugins) => (...args) => {
    const newArgs = [].slice.apply(args);
    newArgs.push(this.getEditorState);
    newArgs.push(this.onChange);
    return plugins
      .filter((plugin) => typeof plugin[name] === 'function')
      .map((plugin) => plugin[name](...newArgs))
      .find((result) => result === true) === true;
  };

  createOnHooks = (name, plugins) => (event) => (
    plugins
      .filter((plugin) => typeof plugin[name] === 'function')
      .forEach((plugin) => plugin[name](event))
  );

  createFnHooks = (name, plugins) => (...args) => {
    const newArgs = [].slice.apply(args);
    newArgs.push(this.getEditorState);
    newArgs.push(this.onChange);
    return plugins
      .filter((plugin) => typeof plugin[name] === 'function')
      .map((plugin) => plugin[name](...newArgs))
      .find((result) => result !== undefined);
  };

  createPluginHooks = () => {
    const pluginHooks = {};
    const plugins = this.props.plugins.slice(0);
    plugins.push(defaultKeyBindingPlugin);
    plugins.forEach((plugin) => {
      Object.keys(plugin).forEach((attrName) => {
        if (attrName === 'onChange') return;

        if (attrName.indexOf('on') === 0) {
          pluginHooks[attrName] = this.createOnHooks(attrName, plugins);
        }

        if (attrName.indexOf('handle') === 0) {
          pluginHooks[attrName] = this.createHandleHooks(attrName, plugins);
        }

        // checks if the function ends with Fn
        if (attrName.length - 2 === attrName.indexOf('Fn')) {
          pluginHooks[attrName] = this.createFnHooks(attrName, plugins);
        }
      });
    });
    return pluginHooks;
  };

  render() {
    let pluginProps = {};

    // This puts pluginProps and the object inside getEditorProps
    // on the Editor component (main use case is for aria props right now)
    // Last plugin wins right now (not ideal)
    this.props.plugins.forEach((plugin) => {
      if (plugin.getEditorProps) {
        pluginProps = {
          ...pluginProps,
          ...plugin.getEditorProps(),
        };
      }
    });

    const pluginHooks = this.createPluginHooks();
    return (
      <Editor
        {...pluginProps}
        {...this.props}
        {...pluginHooks}
        onChange={ this.onChange }
        editorState={this.editorState}
        ref="editor"
      />
    );
  }
}
