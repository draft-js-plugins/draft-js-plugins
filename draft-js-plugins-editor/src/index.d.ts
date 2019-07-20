import {
  ContentBlock,
  DraftDecorator,
  DraftDragType,
  DraftEditorCommand,
  DraftHandleValue,
  DraftInlineStyle,
  DraftStyleMap,
  Editor,
  EditorProps,
  EditorState,
  SelectionState
} from "draft-js";
import { Component, Ref, SyntheticEvent, KeyboardEvent } from "react";

export interface PluginFunctions {
  getPlugins(): EditorPlugin[]; // a function returning a list of all the plugins
  getProps(): any; // a function returning a list of all the props pass into the Editor
  setEditorState(editorState: EditorState): void; // a function to update the EditorState
  getEditorState(): EditorState; // a function to get the current EditorState
  getReadOnly(): boolean; // a function returning of the Editor is set to readOnly
  setReadOnly(readOnly: boolean): void; // a function which allows to set the Editor to readOnly
  getEditorRef(): Ref<any>; // a function to get the editor reference
}

export interface EditorPlugin {
  decorators?: DraftDecorator[];
  getAccessibilityProps?: () => {
    ariaHasPopup: string;
    ariaExpanded: string;
  };
  initialize?: (pluginFunctions: PluginFunctions) => void;
  onChange?: (
    editorState: EditorState,
    pluginFunctions: PluginFunctions
  ) => EditorState;
  willUnmount?: (pluginFunctions: PluginFunctions) => void;

  // Events passed from the draft-js editor back to all plugins
  blockRendererFn?(block: ContentBlock, pluginFunctions: PluginFunctions): any;
  blockStyleFn?(block: ContentBlock, pluginFunctions: PluginFunctions): string;
  customStyleFn?: (
    style: DraftInlineStyle,
    block: ContentBlock,
    pluginFunctions: PluginFunctions
  ) => DraftStyleMap;
  keyBindingFn?(
    e: KeyboardEvent,
    pluginFunctions: PluginFunctions
  ): DraftEditorCommand | null;
  handleReturn?(
    e: KeyboardEvent,
    editorState: EditorState,
    pluginFunctions: PluginFunctions
  ): DraftHandleValue;
  handleKeyCommand?(
    command: DraftEditorCommand,
    editorState: EditorState,
    eventTimeStamp: number,
    pluginFunctions: PluginFunctions
  ): DraftHandleValue;
  handleBeforeInput?(
    chars: string,
    editorState: EditorState,
    eventTimeStamp: number,
    pluginFunctions: PluginFunctions
  ): DraftHandleValue;
  handlePastedText?(
    text: string,
    html: string | undefined,
    editorState: EditorState,
    pluginFunctions: PluginFunctions
  ): DraftHandleValue;
  handlePastedFiles?(
    files: Array<Blob>,
    pluginFunctions: PluginFunctions
  ): DraftHandleValue;
  handleDroppedFiles?(
    selection: SelectionState,
    files: Array<Blob>,
    pluginFunctions: PluginFunctions
  ): DraftHandleValue;
  handleDrop?(
    selection: SelectionState,
    dataTransfer: Object,
    isInternal: DraftDragType,
    pluginFunctions: PluginFunctions
  ): DraftHandleValue;
  onEscape?(e: KeyboardEvent, pluginFunctions: PluginFunctions): void;
  onTab?(e: KeyboardEvent, pluginFunctions: PluginFunctions): void;
  onUpArrow?(e: KeyboardEvent, pluginFunctions: PluginFunctions): void;
  onDownArrow?(e: KeyboardEvent, pluginFunctions: PluginFunctions): void;
  onRightArrow?(e: KeyboardEvent, pluginFunctions: PluginFunctions): void;
  onLeftArrow?(e: KeyboardEvent, pluginFunctions: PluginFunctions): void;
  onBlur?(e: SyntheticEvent, pluginFunctions: PluginFunctions): void;
  onFocus?(e: SyntheticEvent, pluginFunctions: PluginFunctions): void;
}

export const composeDecorators: (
  ...decorators: DraftDecorator[]
) => DraftDecorator;

export interface PluginEditorProps extends EditorProps {
  plugins?: EditorPlugin[];
  defaultKeyBindings?: boolean;
  defaultKeyCommands?: boolean;
  defaultBlockRenderMap?: boolean;

  // eslint-disable-next-line react/no-unused-prop-types
  decorators?: DraftDecorator[];
}

declare class PluginEditor extends Component<PluginEditorProps> {
  focus(): void;
  blur(): void;
  getPlugins(): EditorPlugin[];
  getPluginMethods(): PluginFunctions;
  getEditorRef(): Editor | undefined;
}

export default PluginEditor;
