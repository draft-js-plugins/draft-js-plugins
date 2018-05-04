// @flow

/* eslint-disable no-continue, no-restricted-syntax, no-undef */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  EditorState,
  Editor,
  DefaultDraftBlockRenderMap,
} from 'draft-js';
import shallowEqual from 'shallowequal';

import { type DraftBlockRenderMap } from 'draft-js/lib/DraftBlockRenderMap';
import { Map } from 'immutable';
import { type BlockNodeRecord } from 'draft-js/lib/BlockNodeRecord';

import proxies from './proxies';
import moveSelectionToEnd from './moveSelectionToEnd';
import resolveDecorators from './resolveDecorators';
import * as defaultKeyBindingPlugin from './defaultKeyBindingPlugin';
import { type Plugin, type EditorProps, type PluginMethods } from '../';

const hooks = {
  fn: [
    'blockRendererFn',
    'blockStyleFn',
    'customStyleFn',
    'keyBindingFn'
  ],
  handle: [
    'handleReturn',
    'handleKeyCommand',
    'handleBeforeInput',
    'handlePastedText',
    'handlePastedFiles',
    'handleDroppedFiles',
    'handleDrop',
  ],
  event: [
    'onEscape',
    'onTab',
    'onUpArrow',
    'onRightArrow',
    'onDownArrow',
    'onLeftArrow',
    'onBlur',
    'onFocus',
  ]
};

/**
 * The main editor component
 */

type State = {
  readOnly: boolean
}

class PluginEditor extends Component<EditorProps, State> {
  static propTypes = {
    editorState: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    plugins: PropTypes.array,
    defaultKeyBindings: PropTypes.bool,
    defaultBlockRenderMap: PropTypes.bool,
    customStyleMap: PropTypes.object,
    // eslint-disable-next-line react/no-unused-prop-types
    decorators: PropTypes.array,
  };

  static defaultProps = {
    defaultBlockRenderMap: true,
    defaultKeyBindings: true,
    customStyleMap: {},
    plugins: [],
    decorators: [],
  };

  constructor(props: EditorProps) {
    super(props);
    this.setupPlugins();
  }

  state = {
    readOnly: false
  }

  componentWillMount() {
    const decorator = resolveDecorators(this.props, this.getEditorState, this.onChange);

    const editorState = EditorState.set(this.props.editorState, { decorator });
    this.onChange(moveSelectionToEnd(editorState));
  }

  componentDidUpdate(prev: EditorProps) {
    const curr = this.props;

    // check if props.plugins or props.decorators are still the same, only then reset
    if (!shallowEqual(curr.plugins, prev.plugins) ||
        !shallowEqual(curr.decorators, prev.decorators)
    ) {
      const editorState = EditorState.set(
        curr.editorState,
        { decorator: resolveDecorators(curr, this.getEditorState, this.onChange) }
      );

      this.onChange(editorState);
      this.setupPlugins();
    }
  }

  componentWillUnmount() {
    const pluginMethods = this.getPluginMethods();
    [this.props, ...this.resolvePlugins()].forEach((plugin) => {
      if (plugin.willUnmount != null) {
        plugin.willUnmount(pluginMethods);
      }
    });
  }

  // Cycle through the plugins, changing the editor state with what the plugins
  // changed (or didn't)
  onChange = (editorState: EditorState) => {
    let newEditorState = editorState;
    const pluginMethods = this.getPluginMethods();
    this.resolvePlugins().forEach((plugin) => {
      if (plugin.onChange != null && newEditorState != null) {
        newEditorState = plugin.onChange(newEditorState, pluginMethods);
      }
    });

    if (this.props.onChange) {
      this.props.onChange(newEditorState, pluginMethods);
    }
  };

  setupPlugins = () => {
    const plugins = [this.props, ...this.resolvePlugins()];
    const pluginMethods = this.getPluginMethods();

    plugins.forEach((plugin) => {
      if (plugin.initialize != null) {
        plugin.initialize(pluginMethods);
      }
    });

    // attach proxy methods like `focus` or `blur`
    proxies.forEach((method) => {
      // $FlowFixMe
      this[method] = (...args) => (
        // $FlowFixMe
        this.editor[method](...args)
      );
    });
  }

  getPlugins = (): Array<Plugin> => {
    if (this.props.plugins != null) {
      return this.props.plugins.slice(0);
    }
    return [];
  }

  getProps = (): EditorProps => ({ ...this.props });

  // TODO further down in render we use readOnly={this.props.readOnly || this.state.readOnly}. Ask Ben why readOnly is here just from the props? Why would plugins use this instead of just taking it from getProps?
  getReadOnly = (): boolean => this.props.readOnly === true
  setReadOnly = (readOnly: boolean) => {
    if (readOnly !== this.state.readOnly) this.setState({ readOnly });
  };

  getEditorRef = () => this.editor;

  getEditorState = () => this.props.editorState;

  getPluginMethods = (): PluginMethods => ({
    getPlugins: this.getPlugins,
    getProps: this.getProps,
    setEditorState: this.onChange,
    getEditorState: this.getEditorState,
    getReadOnly: this.getReadOnly,
    setReadOnly: this.setReadOnly,
    getEditorRef: this.getEditorRef,
  });

  editor: ?HTMLElement

  createEventHooks = (methodName: string, plugins: Array<Plugin|EditorProps>) => (event: SyntheticKeyboardEvent<> | SyntheticEvent<>) => {
    const pluginMethods = this.getPluginMethods();

    // eslint-disable-next-line array-callback-return, consistent-return
    return plugins.some((plugin) => {
      const method = plugin[methodName];
      if (method != null) {
        return method(event, pluginMethods) === true;
      }
    });
  };

  createHandleHooks = (methodName: string, plugins: Array<Plugin|EditorProps>) => (firstArg: any, ...args:any):string => {
    const newArgs = [firstArg, ...args, this.getPluginMethods()];

    return plugins.some((plugin) => {
      const method = plugin[methodName];
      return method != null && method(...newArgs) === 'handled';
    }) ? 'handled' : 'not-handled';
  };

  createBlockRendererFn = (plugins: Array<Plugin|EditorProps>, pluginMethods: PluginMethods) => (blockNode: BlockNodeRecord) => {
    const finalBlock = plugins
      .reduce((block, plugin) => {
        if (plugin.blockRendererFn == null) {
          return block;
        }
        const result = plugin.blockRendererFn(blockNode, pluginMethods);

        if (result != null) {
          const { props: pluginProps, ...pluginRest } = result;
          const { props, ...rest } = block;
          return { ...rest, ...pluginRest, props: { ...props, ...pluginProps } };
        }

        return block;
      }, { props: {} });

    return finalBlock.component != null ? finalBlock : false;
  }

  createBlockStyleFn = (plugins: Array<Plugin|EditorProps>, pluginMethods: PluginMethods) => (block: BlockNodeRecord):string => plugins
      .reduce((styles, plugin) => {
        if (plugin.blockStyleFn == null) {
          return styles;
        }

        const result = plugin.blockStyleFn(block, pluginMethods);
        if (result != null) styles.push(result);
        return styles;
      }, []).join(' ')

  createCustomStyleFn = (plugins: Array<Plugin|EditorProps>, pluginMethods: PluginMethods) => (style: DraftInlineStyle, block: BlockNodeRecord) => plugins.reduce((styles, plugin) => {
    if (plugin.customStyleFn == null) {
      return styles;
    }

    let newStyles = styles;

    const result = plugin.customStyleFn(style, block, pluginMethods);
    if (result != null) {
      newStyles = { ...newStyles, ...result };
    }
    return newStyles;
  }, {})

  createKeyBindingFn = (plugins: Array<Plugin|EditorProps>, pluginMethods: PluginMethods) => (event: SyntheticKeyboardEvent<>): ?string => {
    let result;

    const wasHandled = plugins.some((plugin) => {
      if (plugin.keyBindingFn == null) return false;
      result = plugin.keyBindingFn(event, pluginMethods);
      return result !== undefined;
    });

    return wasHandled ? result : null;
  }

  createFnHooks = (methodName:string, plugins: Array<Plugin|EditorProps>) => {
    const pluginMethods = this.getPluginMethods();

    if (methodName === 'blockRendererFn') {
      return this.createBlockRendererFn(plugins, pluginMethods);
    } else if (methodName === 'blockStyleFn') {
      return this.createBlockStyleFn(plugins, pluginMethods);
    } else if (methodName === 'customStyleFn') {
      return this.createCustomStyleFn(plugins, pluginMethods);
    }

    return this.createKeyBindingFn(plugins, pluginMethods);
  };

  createPluginHooks = () => {
    const props = [this.props, ...this.resolvePlugins()];
    // this reverses the hooks object
    // { handle: ['handleReturn', 'handleEnter'] }
    // becomes
    // { handleReturn: 'handle', handleEnter: 'handle' }
    const hookMethods = Object.keys(hooks)
      .reduce((methods, key) => ({ ...methods, ...hooks[key].reduce((acc, val) => ({ ...acc, [val]: key }), {}) }), {});
    const hookMethodNames = Object.keys(hookMethods);

    const createMethods = {
      event: this.createEventHooks,
      fn: this.createFnHooks,
      handle: this.createHandleHooks,
    };

    // spreading a set makes this array unique
    return [...new Set(props.reduce((acc, val) => [...acc, ...Object.keys(val)], []))]
    // filter methods which are valid
    .filter((val) => hookMethodNames.includes(val))
    .reduce((acc, val) => ({
      ...acc,
      [val]: createMethods[hookMethods[val]](val, props)
    }), {});
  };

  resolvePlugins = (): Array<Plugin> => {
    const { plugins: _plugins, defaultKeyBindings } = this.props;
    const plugins = _plugins && _plugins.length > 0 ? [..._plugins] : [];

    if (defaultKeyBindings === true) {
      plugins.push(defaultKeyBindingPlugin);
    }

    return plugins;
  };

  resolveCustomStyleMap = () => {
    const { plugins, customStyleMap } = this.props;
    let styleMaps = [];
    if (plugins != null) {
      styleMaps = plugins
        .filter((plug) => plug.customStyleMap != null)
        .map((plug) => plug.customStyleMap);
    }

    if (customStyleMap != null) {
      styleMaps = styleMaps.concat([customStyleMap]);
    }

    return styleMaps.reduce((styles, style) => ({ ...styles, ...style, }), {});
  }

  resolveblockRenderMap = (): DraftBlockRenderMap => {
    const { defaultBlockRenderMap, blockRenderMap, plugins } = this.props;

    let map = Map({});

    /*
     * TODO: Add this to docs probably doctypes
     * props.blockRenderMap > plugin.blockRenderMap  > DefaultDraftBlockRenderMap
     */
    if (defaultBlockRenderMap === true) {
      map = map.merge(DefaultDraftBlockRenderMap);
    }

    if (plugins != null) {
      map = plugins
        .reduce((styles, plug) => (
          plug.blockRenderMap != null
            ? styles.merge(plug.blockRenderMap)
            : styles), map);
    }

    if (blockRenderMap != null) {
      map = map.merge(blockRenderMap);
    }

    return map;
  }

  resolveAccessibilityProps = () => {
    let accessibilityProps = {};
    const plugins = this.resolvePlugins();

    plugins.forEach((plugin) => {
      if (typeof plugin.getAccessibilityProps !== 'function') return;
      const props = plugin.getAccessibilityProps();
      const popupProps = {};

      if (accessibilityProps.ariaHasPopup == null) {
        popupProps.ariaHasPopup = props.ariaHasPopup;
      } else if (props.ariaHasPopup === 'true') {
        popupProps.ariaHasPopup = 'true';
      }

      if (accessibilityProps.ariaExpanded == null) {
        popupProps.ariaExpanded = props.ariaExpanded;
      } else if (props.ariaExpanded === true) {
        popupProps.ariaExpanded = true;
      }

      accessibilityProps = {
        ...accessibilityProps,
        ...props,
        ...popupProps,
      };
    });

    return accessibilityProps;
  };

  render() {
    const pluginHooks = this.createPluginHooks();
    const customStyleMap = this.resolveCustomStyleMap();
    const accessibilityProps = this.resolveAccessibilityProps();
    const blockRenderMap = this.resolveblockRenderMap();
    return (
      <Editor
        {...this.props}
        {...accessibilityProps}
        {...pluginHooks}
        readOnly={this.props.readOnly || this.state.readOnly}
        customStyleMap={customStyleMap}
        blockRenderMap={blockRenderMap}
        onChange={this.onChange}
        editorState={this.props.editorState}
        ref={(element) => { this.editor = element; }}
      />
    );
  }
}

export default PluginEditor;
