// @flow

import React, { Component } from 'react'
import { type BlockNodeRecord } from "draft-js/lib/BlockNodeRecord"
import { type DraftDragType } from "draft-js/lib/DraftDragType"
import { type DraftTextAlignment } from "draft-js/lib/DraftTextAlignment"
import { type DraftEditorCommand } from "draft-js/lib/DraftEditorCommand"
import { type DraftDecoratorType } from "draft-js/lib/DraftDecoratorType";
import { type DraftHandleValue } from "draft-js/lib/DraftHandleValue"
import { type BidiDirection } from 'fbjs/lib/UnicodeBidiDirection';
import { type DraftBlockRenderMap } from "draft-js/lib/DraftBlockRenderMap"
import { EditorState } from "draft-js"
import createEditorStateWithTextFn from './utils/createEditorStateWithText';
import composeDecoratorsFn from './utils/composeDecorators';

// eslint-disable-next-line import/no-named-as-default
import Editor from './Editor';
export const createEditorStateWithText = createEditorStateWithTextFn;
export const composeDecorators = composeDecoratorsFn;

type HandleReturn = (e: SyntheticKeyboardEvent<>, editorState: EditorState, PluginMethods) => DraftHandleValue;
type HandleKeyCommand = (command: DraftEditorCommand | string, editorState: EditorState, PluginMethods) => DraftHandleValue;
type HandleBeforeInput = (chars: string, editorState: EditorState, PluginMethods) => DraftHandleValue;
type HandlePastedText = (text: string, html?: string, editorState: EditorState, PluginMethods) => DraftHandleValue;
type HandlePastedFiles = (files: Array<Blob>, PluginMethods) => DraftHandleValue
type HandleDroppedFiles = (selection: SelectionState, files: Array<Blob>, PluginMethods) => DraftHandleValue
type HandleDrop = (selection: SelectionState, dataTransfer: Object, isInternal: DraftDragType, PluginMethods) => DraftHandleValue

export type Handler = HandleReturn | HandleKeyCommand | HandleBeforeInput | HandlePastedText | HandlePastedFiles | HandleDroppedFiles | HandleDrop

export type EditorProps = {
  editorState: EditorState,
  onChange: (EditorState, PluginMethods) => EditorState,
  textAlignment?: DraftTextAlignment,
  textDirectionality?: BidiDirection,
  placeholder?: string,
  plugins?: Array<PluginInstance>,
  readOnly?: boolean,
  tabIndex?: number,
  spellCheck?: boolean,
  handleReturn?: HandleReturn,
  handleKeyCommand?: HandleKeyCommand,
  handleBeforeInput?: HandleBeforeInput,
  handlePastedText?: HandlePastedText,
  handlePastedFiles?: HandlePastedFiles,
  handleDroppedFiles?: HandleDroppedFiles,
  handleDrop?: HandleDrop,
  willUnmount?: (PluginMethods) => void,
  stripPastedStyles?: boolean,
  defaultKeyBindings?: boolean,
  defaultBlockRenderMap?: boolean,
  blockRendererFn?: (block: BlockNodeRecord, PluginMethods) => ?Object,
  blockStyleFn?: (block: BlockNodeRecord, PluginMethods) => string,
  keyBindingFn?: (e: SyntheticKeyboardEvent<>, PluginMethods) => ?string,
  onEscape?: OnEscape,
  onTab?: OnTab,
  onUpArrow?: OnUpArrow,
  onRightArrow?: OnRightArrow,
  onDownArrow?: OnDownArrow,
  onLeftArrow?: OnLeftArrow,
  onBlur?: OnBlur,
  onFocus?: OnFocus,
  blockRenderMap?: DraftBlockRenderMap,
  customStyleMap?: Object,
  initialize?: (PluginMethods) => void,
  customStyleFn?: (style: DraftInlineStyle, block: BlockNodeRecord, PluginMethods) => ?Object,
  decorators?: Array<DraftDecoratorType>,
  autoCapitalize?: string,
  autoComplete?: string,
  autoCorrect?: string,
  webDriverTestID?: string,
  ariaActiveDescendantID?: string,
  ariaAutoComplete?: string,
  ariaControls?: string,
  ariaDescribedBy?: string,
  ariaExpanded?: boolean,
  ariaLabel?: string,
  ariaLabelledBy?: string,
  ariaMultiline?: boolean,
  ariaHasPopup?: boolean
}

type OnEscape = (e: SyntheticKeyboardEvent<>, PluginMethods) => void;
type OnTab = (e: SyntheticKeyboardEvent<>, PluginMethods) => void;
type OnUpArrow = (e: SyntheticKeyboardEvent<>, PluginMethods) => void;
type OnRightArrow = (e: SyntheticKeyboardEvent<>, PluginMethods) => void;
type OnDownArrow = (e: SyntheticKeyboardEvent<>, PluginMethods) => void;
type OnLeftArrow = (e: SyntheticKeyboardEvent<>, PluginMethods) => void;
type OnBlur = (e: SyntheticEvent<>, PluginMethods) => void;
type OnFocus = (e: SyntheticEvent<>, PluginMethods) => void;

export type EventHandler = (e: SyntheticKeyboardEvent<>) => void | (e: SyntheticEvent<>) => void;

export type PluginEventHandlers = OnEscape | OnTab | OnUpArrow | OnRightArrow | OnDownArrow | OnLeftArrow | OnBlur | OnFocus

export type EventHandlerNames = 'onEscape' | 'onTab' | 'onUpArrow' | 'onRightArrow' | 'onDownArrow' | 'onLeftArrow' | 'onBlur' | 'onFocus'

export type HandlerNames = 'handleReturn' | 'handleKeyCommand' | 'handleBeforeInput' | 'handlePastedText' | 'handlePastedFiles' | 'handleDroppedFiles' | 'handleDrop'

export type PluginInstance = {
  blockRendererFn?: (block: BlockNodeRecord, PluginMethods) => ?Object,
  blockStyleFn?: (block: BlockNodeRecord, PluginMethods) => string,
  keyBindingFn?: (e: SyntheticKeyboardEvent<>, PluginMethods) => ?string,
  customStyleFn?: (style: DraftInlineStyle, block: BlockNodeRecord, PluginMethods) => ?Object,
  blockRenderMap?: DraftBlockRenderMap,
  customStyleMap?: Object,
  handleReturn?: HandleReturn,
  handleKeyCommand?: HandleKeyCommand,
  handleBeforeInput?: HandleBeforeInput,
  handlePastedText?: HandlePastedText,
  handlePastedFiles?: HandlePastedFiles,
  handleDroppedFiles?: HandleDroppedFiles,
  getAccessibilityProps?: () => {
    ariaActiveDescendantID?: string,
    ariaAutoComplete?: string,
    ariaControls?: string,
    ariaDescribedBy?: string,
    ariaExpanded?: boolean,
    ariaLabel?: string,
    ariaLabelledBy?: string,
    ariaMultiline?: boolean,
    ariaHasPopup?: boolean
  },
  handleDrop?: HandleDrop,
  onEscape?: OnEscape,
  onTab?: OnTab,
  onUpArrow?: OnUpArrow,
  onRightArrow?: OnRightArrow,
  onDownArrow?: OnDownArrow,
  onLeftArrow?: OnLeftArrow,
  onBlur?: OnBlur,
  onFocus?: OnFocus,
  onChange?: (EditorState, PluginMethods) => void,
  initialize?: (PluginMethods) => void,
  decorators?: Array<DraftDecoratorType>,
  willUnmount?: (PluginMethods) => void,
}

export type Plugin = (config?: Object) => PluginInstance;

export type EventHook = (event: SyntheticEvent<>, PluginMethods) => void;

export type PluginMethods = {
  getPlugins: () => Array<PluginInstance>,
  getProps: () => EditorProps,
  setEditorState: EditorState => void,
  getEditorState: () => EditorState,
  getReadOnly: () => boolean,
  setReadOnly: (boolean) => void,
  getEditorRef: () => ?HTMLElement,
}

export default Editor
