/**
 * The main editor c;omponent
 */

import React, { Component } from 'react';
import {
  Editor,
  EditorState,
} from 'draft-js';

import createCompositeDecorator from '../utils/createCompositeDecorator';
import moveSelectionToEnd from '../utils/moveSelectionToEnd';
import * as defaultKeyBindingPlugin from '../utils/defaultKeyBindingPlugin';
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

  // Put the keyboard focus on the editor
  focus = () => {
    this.refs.editor.focus();
  };

  createHandleListener = (name) => (...args) => {
    const newArgs = [].slice.apply(args);
    newArgs.push(this.getEditorState);
    newArgs.push(this.onChange);
    return this.plugins
      .filter((plugin) => plugin[name])
      .map((plugin) => plugin[name](...newArgs))
      .find((result) => result === true) === true;
  };

  createOnListener = (name) => (event) => (
    this.plugins
      .filter((plugin) => typeof plugin[name] === 'function')
      .forEach((plugin) => plugin[name](event))
  );

  createFnListener = (name) => (...args) => {
    const newArgs = [].slice.apply(args);
    newArgs.push(this.getEditorState);
    newArgs.push(this.onChange);
    return this.plugins
      .filter((plugin) => typeof plugin[name] === 'function')
      .map((plugin) => plugin[name](...newArgs))
      .find((result) => result !== undefined);
  };

  createEventListeners = () => {
    const listeners = {};
    const keepHandlers = ['onChange'];
    this.plugins.push(defaultKeyBindingPlugin);

    // bind random onListeners and handleListeners
    this.plugins.forEach((plugin) => {
      Object.keys(plugin).forEach((attrName) => {
        if (attrName.indexOf('on') === 0 && keepHandlers.indexOf(attrName !== -1)) {
          listeners[attrName] = this.createOnListener(attrName);
        }

        if (attrName.indexOf('handle') === 0 && keepHandlers.indexOf(attrName !== -1)) {
          listeners[attrName] = this.createHandleListener(attrName);
        }

        const endsWithFn = attrName.length - 2 === attrName.indexOf('Fn');
        if (endsWithFn && keepHandlers.indexOf(attrName !== -1)) {
          listeners[attrName] = this.createFnListener(attrName);
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
        onChange={ this.onChange }
        editorState={this.editorState}
        ref="editor"
      />
    );
  }
}
