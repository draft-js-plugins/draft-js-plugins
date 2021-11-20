import {
  CompositeDecorator,
  ContentBlock,
  DraftBlockRenderMap,
  DraftDecorator,
  DraftDragType,
  DraftEditorCommand,
  DraftHandleValue,
  DraftInlineStyle,
  DraftStyleMap,
  EditorState,
  SelectionState,
} from 'draft-js';
import { CSSProperties, KeyboardEvent, SyntheticEvent } from 'react';
import createEditorStateWithTextFn from './utils/createEditorStateWithText';
import composeDecoratorsFn from './utils/composeDecorators';

// eslint-disable-next-line import/no-named-as-default
export { default } from './Editor';
export const createEditorStateWithText = createEditorStateWithTextFn;
export const composeDecorators = composeDecoratorsFn;

export type { PluginEditorProps } from './Editor';

export type EditorCommand = DraftEditorCommand | string;

export interface GetSetEditorState {
  setEditorState(editorState: EditorState): void; // a function to update the EditorState
  getEditorState(): EditorState; // a function to get the current EditorState
}

//the editors editor html element is not supported in the draft js typescript interface
export interface EditorRef {
  refs?: { editor: HTMLElement };
  editor: HTMLElement;
}

export interface PluginFunctions extends GetSetEditorState {
  getPlugins(): EditorPlugin[]; // a function returning a list of all the plugins
  getProps(): unknown; // a function returning a list of all the props pass into the Editor
  getReadOnly(): boolean; // a function returning of the Editor is set to readOnly
  setReadOnly(readOnly: boolean): void; // a function which allows to set the Editor to readOnly
  getEditorRef(): EditorRef; // a function to get the editor reference
}

export interface AriaProps {
  ariaHasPopup?: string;
  ariaExpanded?: boolean;
  ariaOwneeID?: string;
  ariaActiveDescendantID?: string;
}

export interface EditorPlugin {
  decorators?: Array<DraftDecorator | CompositeDecorator>;
  getAccessibilityProps?(): AriaProps;
  initialize?: (pluginFunctions: PluginFunctions) => void;
  onChange?: (
    editorState: EditorState,
    pluginFunctions: PluginFunctions
  ) => EditorState;
  willUnmount?: (pluginFunctions: GetSetEditorState) => void;

  // Events passed from the draft-js editor back to all plugins
  blockRenderMap?: DraftBlockRenderMap;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  blockRendererFn?(block: ContentBlock, pluginFunctions: PluginFunctions): any;
  blockStyleFn?(
    block: ContentBlock,
    pluginFunctions: PluginFunctions
  ): string | undefined | null;
  customStyleFn?: (
    style: DraftInlineStyle,
    block: ContentBlock,
    pluginFunctions: PluginFunctions
  ) => CSSProperties;
  customStyleMap?: DraftStyleMap;
  keyBindingFn?(
    event: KeyboardEvent,
    pluginFunctions: PluginFunctions
  ): EditorCommand | null | undefined;
  handleReturn?(
    event: KeyboardEvent,
    editorState: EditorState,
    pluginFunctions: PluginFunctions
  ): DraftHandleValue | undefined;
  handleKeyCommand?(
    command: EditorCommand,
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
    dataTransfer: Record<string, unknown>,
    isInternal: DraftDragType,
    pluginFunctions: PluginFunctions
  ): DraftHandleValue;
  onEscape?(
    event: KeyboardEvent,
    pluginFunctions: PluginFunctions
  ): void | true;
  onTab?(event: KeyboardEvent, pluginFunctions: PluginFunctions): void | true;
  onUpArrow?(
    event: KeyboardEvent,
    pluginFunctions: PluginFunctions
  ): void | true;
  onDownArrow?(
    event: KeyboardEvent,
    pluginFunctions: PluginFunctions
  ): void | true;
  onRightArrow?(
    event: KeyboardEvent,
    pluginFunctions: PluginFunctions
  ): void | true;
  onLeftArrow?(
    event: KeyboardEvent,
    pluginFunctions: PluginFunctions
  ): void | true;
  onBlur?(event: SyntheticEvent, pluginFunctions: PluginFunctions): void | true;
  onFocus?(
    event: SyntheticEvent,
    pluginFunctions: PluginFunctions
  ): void | true;
}
