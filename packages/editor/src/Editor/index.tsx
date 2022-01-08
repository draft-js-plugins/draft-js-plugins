/* eslint-disable no-continue,no-restricted-syntax */
import {
  CompositeDecorator,
  DefaultDraftBlockRenderMap,
  DraftBlockRenderMap,
  DraftDecorator,
  DraftEditorCommand,
  DraftStyleMap,
  Editor,
  EditorProps,
  EditorState,
} from 'draft-js';
import { Map } from 'immutable';
import PropTypes from 'prop-types';
import React, { Component, KeyboardEvent, ReactElement } from 'react';
import { AriaProps, EditorPlugin, EditorRef, PluginFunctions } from '..';
import { keyBindingFn } from './defaultKeyBindings';
import { handleKeyCommand } from './defaultKeyCommands';
import { createPluginHooks } from './PluginHooks';
import resolveDecorators from './resolveDecorators';

export interface PluginEditorProps extends Omit<EditorProps, 'keyBindingFn'> {
  plugins?: EditorPlugin[];
  defaultKeyBindings?: boolean;
  defaultKeyCommands?: boolean;
  defaultBlockRenderMap?: boolean;

  keyBindingFn?(
    event: KeyboardEvent
  ): DraftEditorCommand | string | null | undefined;
  decorators?: Array<CompositeDecorator | DraftDecorator>;
}

// should be DraftDecoratorType but it is not accessible and does not habe decorators or _decorators
interface DecoratorType {
  decorators?: Immutable.List<string>;
  _decorators?: string[];
}

const getDecoratorLength = (obj?: DecoratorType): number | undefined => {
  if (obj?.decorators != null) {
    return obj.decorators?.size;
  } else if (obj?._decorators != null) {
    return obj._decorators?.length;
  }
  return undefined;
};

/**
 * The main editor component
 */
class PluginEditor extends Component<PluginEditorProps> {
  static propTypes = {
    editorState: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    plugins: PropTypes.array,
    defaultKeyBindings: PropTypes.bool,
    defaultKeyCommands: PropTypes.bool,
    defaultBlockRenderMap: PropTypes.bool,
    customStyleMap: PropTypes.object,
    // eslint-disable-next-line react/no-unused-prop-types
    decorators: PropTypes.array,
  };

  static defaultProps = {
    defaultBlockRenderMap: true,
    defaultKeyBindings: true,
    defaultKeyCommands: true,
    customStyleMap: {},
    plugins: [],
    decorators: [],
  } as Partial<PluginEditorProps>;

  editor: Editor | null = null;

  state = {
    readOnly: false, // TODO for Nik: ask ben why this is relevent
  };

  constructor(props: PluginEditorProps) {
    super(props);

    const plugins = [this.props, ...this.resolvePlugins()] as EditorPlugin[];
    plugins.forEach((plugin) => {
      if (plugin && typeof plugin.initialize === 'function') {
        plugin.initialize(this.getPluginMethods());
      }
    });
  }

  focus(): void {
    if (this.editor) {
      this.editor.focus();
    }
  }
  blur(): void {
    if (this.editor) {
      this.editor.blur();
    }
  }

  componentDidMount(): void {
    const decorator = resolveDecorators(
      this.props,
      this.getEditorState,
      this.onChange
    );

    const editorState = EditorState.set(this.props.editorState, { decorator });
    this.onChange(EditorState.moveFocusToEnd(editorState));
  }

  componentDidUpdate(prevProps: PluginEditorProps): void {
    const next = this.props;
    const currDec = prevProps.editorState.getDecorator();
    const nextDec = next.editorState.getDecorator();

    // If there is not current decorator, there's nothing to carry over to the next editor state
    if (!currDec) {
      return;
    }
    // If the current decorator is the same as the new one, don't call onChange to avoid infinite loops
    if (currDec === nextDec) {
      return;
    }
    // If the old and the new decorator are the same, but no the same object, also don't call onChange to avoid infinite loops
    if (
      currDec &&
      nextDec &&
      getDecoratorLength(currDec as DecoratorType) ===
        getDecoratorLength(nextDec as DecoratorType)
    ) {
      return;
    }

    const editorState = EditorState.set(next.editorState, {
      decorator: currDec,
    });
    this.onChange(EditorState.moveFocusToEnd(editorState));
  }

  componentWillUnmount(): void {
    this.resolvePlugins().forEach((plugin) => {
      if (plugin.willUnmount) {
        plugin.willUnmount({
          getEditorState: this.getEditorState,
          setEditorState: this.onChange,
        });
      }
    });
  }

  // Cycle through the plugins, changing the editor state with what the plugins
  // changed (or didn't)
  onChange = (editorState: EditorState): void => {
    let newEditorState = editorState;
    this.resolvePlugins().forEach((plugin) => {
      if (plugin.onChange) {
        newEditorState = plugin.onChange(
          newEditorState,
          this.getPluginMethods()
        );
      }
    });

    if (this.props.onChange) {
      this.props.onChange(newEditorState);
    }
  };

  getPlugins = (): EditorPlugin[] => [...this.props.plugins!];
  getProps = (): PluginEditorProps => ({ ...this.props });

  // TODO further down in render we use readOnly={this.props.readOnly || this.state.readOnly}. Ask Ben why readOnly is here just from the props? Why would plugins use this instead of just taking it from getProps?
  getReadOnly = (): boolean => this.props.readOnly || this.state.readOnly;
  setReadOnly = (readOnly: boolean): void => {
    if (readOnly !== this.state.readOnly) {
      this.setState({ readOnly });
    }
  };

  //the editors editor html element is not supported in the draft js typescript interface
  getEditorRef = (): EditorRef => this.editor as unknown as EditorRef;

  getEditorState = (): EditorState => this.props.editorState;

  getPluginMethods = (): PluginFunctions => ({
    getPlugins: this.getPlugins,
    getProps: this.getProps,
    setEditorState: this.onChange,
    getEditorState: this.getEditorState,
    getReadOnly: this.getReadOnly,
    setReadOnly: this.setReadOnly,
    getEditorRef: this.getEditorRef,
  });

  createPluginHooks = (): Partial<EditorProps> => {
    const plugins = [this.props, ...this.resolvePlugins()] as EditorPlugin[];
    return createPluginHooks(plugins, this.getPluginMethods());
  };

  resolvePlugins = (): EditorPlugin[] => {
    const plugins = this.getPlugins();
    if (this.props.defaultKeyBindings === true) {
      plugins.push({ keyBindingFn });
    }
    if (this.props.defaultKeyCommands === true) {
      plugins.push({ handleKeyCommand });
    }
    return plugins;
  };

  resolveCustomStyleMap = (): DraftStyleMap => {
    const customStyleMap = this.props
      .plugins!.filter((plug) => plug.customStyleMap !== undefined)
      .map((plug) => plug.customStyleMap) as DraftStyleMap[];
    return customStyleMap
      .concat([this.props.customStyleMap!])
      .reduce<DraftStyleMap>(
        (styles, style) => ({
          ...styles,
          ...style,
        }),
        {}
      );
  };

  resolveblockRenderMap = (): DraftBlockRenderMap => {
    let blockRenderMap = this.props
      .plugins!.filter((plug) => plug.blockRenderMap !== undefined)
      .reduce(
        (maps, plug) => maps.merge(plug.blockRenderMap!),
        Map({})
      ) as DraftBlockRenderMap;
    if (this.props.defaultBlockRenderMap) {
      blockRenderMap = DefaultDraftBlockRenderMap.merge(blockRenderMap);
    }
    if (this.props.blockRenderMap) {
      blockRenderMap = blockRenderMap.merge(this.props.blockRenderMap);
    }
    return blockRenderMap;
  };

  resolveAccessibilityProps = (): AriaProps => {
    let accessibilityProps: AriaProps = {};
    this.resolvePlugins().forEach((plugin) => {
      if (typeof plugin.getAccessibilityProps !== 'function') {
        return;
      }
      const props = plugin.getAccessibilityProps();
      const popupProps: AriaProps = {};

      if (accessibilityProps.ariaHasPopup === undefined) {
        popupProps.ariaHasPopup = props.ariaHasPopup;
      } else if (props.ariaHasPopup === 'true') {
        popupProps.ariaHasPopup = 'true';
      }

      if (accessibilityProps.ariaExpanded === undefined) {
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

  render(): ReactElement {
    const pluginHooks = this.createPluginHooks();
    const customStyleMap = this.resolveCustomStyleMap();
    const accessibilityProps = this.resolveAccessibilityProps();
    const blockRenderMap = this.resolveblockRenderMap();
    const {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-shadow
      keyBindingFn, //removed as it will be overwritten by pluginHooks
      ...editorProps
    } = this.props;
    return (
      <Editor
        {...editorProps}
        {...accessibilityProps}
        {...pluginHooks}
        readOnly={this.props.readOnly || this.state.readOnly}
        customStyleMap={customStyleMap}
        blockRenderMap={blockRenderMap}
        onChange={this.onChange}
        editorState={this.props.editorState}
        ref={(element) => {
          this.editor = element;
        }}
      />
    );
  }
}

export default PluginEditor;
