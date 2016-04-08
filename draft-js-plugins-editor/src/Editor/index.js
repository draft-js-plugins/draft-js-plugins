import React, { Component } from 'react';
import {
  Editor,
  EditorState,
} from 'draft-js';

import createCompositeDecorator from './createCompositeDecorator';
import moveSelectionToEnd from './moveSelectionToEnd';
import proxies from './proxies';
import * as defaultKeyBindingPlugin from './defaultKeyBindingPlugin';

/**
 * The main editor component
 */
class PluginEditor extends Component {

  static propTypes = {
    editorState: React.PropTypes.object.isRequired,
    onChange: React.PropTypes.func.isRequired,
    plugins: React.PropTypes.array,
    defaultKeyBindings: React.PropTypes.bool,
  };

  static defaultProps = {
    defaultKeyBindings: true,
    plugins: [],
  };

  constructor(props) {
    super(props);

    // attach proxy methods like `focus` or `blur`
    for (const method of proxies) {
      this[method] = (...args) => (
        this.refs.editor[method](...args)
      );
    }
  }

  componentWillMount() {
    const compositeDecorator = createCompositeDecorator(this.props.plugins, this.getEditorState, this.onChange);
    const editorState = EditorState.set(this.props.editorState, { decorator: compositeDecorator });
    this.onChange(moveSelectionToEnd(editorState));
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

  getEditorState = () => this.props.editorState;

  createEventHooks = (methodName, plugins) => (...args) => {
    const newArgs = [].slice.apply(args);
    newArgs.push({
      getEditorState: this.getEditorState,
      setEditorState: this.onChange,
    });
    for (const plugin of plugins) {
      if (typeof plugin[methodName] !== 'function') continue;
      const result = plugin[methodName](...newArgs);
      if (result === true) return true;
    }

    return false;
  };

  createFnHooks = (methodName, plugins) => (...args) => {
    const newArgs = [].slice.apply(args);
    newArgs.push({
      getEditorState: this.getEditorState,
      setEditorState: this.onChange,
    });
    if (methodName === 'blockRendererFn') {
      let block = { props: {} };
      let decorators = [];
      for (const plugin of plugins) {
        if (typeof plugin[methodName] !== 'function') continue;
        const result = plugin[methodName](...newArgs);
        if (result !== undefined) {
          const { decorators: pluginDecorators, props: pluginProps, ...pluginRest } = result; // eslint-disable-line no-use-before-define
          const { props, ...rest } = block; // eslint-disable-line no-use-before-define
          if (pluginDecorators) decorators = [...decorators, ...pluginDecorators];
          block = { ...rest, ...pluginRest, props: { ...props, ...pluginProps } };
        }
      }

      if (block.component) {
        decorators.forEach(decorator => { block.component = decorator(block.component); });
        return block;
      }

      return false;
    } else if (methodName === 'blockStyleFn') {
      let styles;
      for (const plugin of plugins) {
        if (typeof plugin[methodName] !== 'function') continue;
        const result = plugin[methodName](...newArgs);
        if (result !== undefined) {
          styles = (styles ? (`${styles} `) : '') + result;
        }
      } return styles || false;
    }

    for (const plugin of plugins) {
      if (typeof plugin[methodName] !== 'function') continue;
      const result = plugin[methodName](...newArgs);
      if (result !== undefined) {
        return result;
      }
    }

    return false;
  };

  createPluginHooks = () => {
    const pluginHooks = {};
    const eventHookKeys = [];
    const fnHookKeys = [];
    const plugins = [this.props, ...this.resolvePlugins()];

    plugins.forEach((plugin) => {
      Object.keys(plugin).forEach((attrName) => {
        if (attrName === 'onChange') return;

        // if `attrName` has been added as a hook key already, ignore this one
        if (eventHookKeys.indexOf(attrName) !== -1 || fnHookKeys.indexOf(attrName) !== -1) return;

        const isEventHookKey = attrName.indexOf('on') === 0 || attrName.indexOf('handle') === 0;
        if (isEventHookKey) {
          eventHookKeys.push(attrName);
          return;
        }

        // checks if `attrName` ends with 'Fn'
        const isFnHookKey = (attrName.length - 2 === attrName.indexOf('Fn'));
        if (isFnHookKey) {
          fnHookKeys.push(attrName);
        }
      });
    });

    eventHookKeys.forEach((attrName) => {
      pluginHooks[attrName] = this.createEventHooks(attrName, plugins);
    });
    fnHookKeys.forEach((attrName) => {
      pluginHooks[attrName] = this.createFnHooks(attrName, plugins);
    });

    return pluginHooks;
  };

  resolvePlugins = () => {
    const plugins = this.props.plugins.slice(0);
    if (this.props.defaultKeyBindings) {
      plugins.push(defaultKeyBindingPlugin);
    }

    return plugins;
  };

  resolveCustomStyleMap = () => {
    let styles = {};
    for (const plugin of this.props.plugins) {
      if (!plugin.customStyleMap) continue;
      styles = {
        ...styles,
        ...plugin.customStyleMap,
      };
    }

    return styles;
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
    const customStyleMap = this.resolveCustomStyleMap();
    return (
      <Editor
        { ...this.props }
        { ...pluginProps }
        { ...pluginHooks }
        customStyleMap={ customStyleMap }
        onChange={ this.onChange }
        editorState={ this.props.editorState }
        ref="editor"
      />
    );
  }
}

export default PluginEditor;
