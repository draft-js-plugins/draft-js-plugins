import { DraftDecorator, Editor, EditorProps, EditorState } from "draft-js";
import { Component, Ref } from "react";

export interface PluginFunctions {
  getPlugins(): EditorPlugin[]; // a function returning a list of all the plugins
  getProps(): any; // a function returning a list of all the props pass into the Editor
  setEditorState(editorState: EditorState): void; // a function to update the EditorState
  getEditorState(): EditorState; // a function to get the current EditorState
  getReadOnly(): boolean; // a function returning of the Editor is set to readOnly
  setReadOnly(readOnly: boolean): void; // a function which allows to set the Editor to readOnly
  getEditorRef(): Ref<any>; // a function to get the editor reference
}

// Plugins can define methods with the same name as props from EditorProps
type EditorMappedFunctions = {
  [K in Exclude<
    keyof EditorProps,
    "onChange" | "decorators"
  >]: EditorProps[K] extends ((a: infer A, b: infer B, c: infer C) => infer R)
    ? (a: A, b: B, c: C, pluginFunctions: PluginFunctions) => R
    : EditorProps[K] extends ((a: infer A, b: infer B) => infer R)
    ? (a: A, b: B, pluginFunctions: PluginFunctions) => R
    : EditorProps[K] extends ((a: infer A) => infer R)
    ? (a: A, pluginFunctions: PluginFunctions) => R
    : EditorProps[K] extends (() => infer R)
    ? (pluginFunctions: PluginFunctions) => R
    : never;
};

export interface EditorPluginProps {
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
  willUnmount?: (funcs: PluginFunctions) => void;
}

export type EditorPlugin = EditorMappedFunctions & EditorPluginProps;

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
