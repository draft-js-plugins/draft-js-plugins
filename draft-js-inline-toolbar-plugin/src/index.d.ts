import { EditorPlugin } from "draft-js-plugins-editor";
import { ComponentType, ReactNode } from "react";
import { EditorState } from "draft-js";

export interface InlineToolbarPluginTheme {
  buttonStyles?: {
    buttonWrapper?: string;
    button?: string;
    active?: string;
  };
  toolbarStyles?: {
    toolbar?: string;
  };
  separatorStyles?: {
    separator?: string;
  };
}

export interface InlineToolbarPluginConfig {
  theme: InlineToolbarPluginTheme;
}

export interface ToolbarChildrenProps {
  theme: InlineToolbarPluginTheme["buttonStyles"];
  getEditorState: () => EditorState;
  setEditorState: (editorState: EditorState) => void;
  onOverrideContent: (content: ComponentType<ToolbarChildrenProps>) => void;
}

export interface ToolbarProps {
  children(externalProps: ToolbarChildrenProps): ReactNode;
}

export type InlineToolBarPlugin = EditorPlugin & {
  InlineToolbar: ComponentType<ToolbarProps>;
};

declare const createInlineToolbarPlugin: (
  config?: InlineToolbarPluginConfig
) => InlineToolBarPlugin;

export default createInlineToolbarPlugin;
