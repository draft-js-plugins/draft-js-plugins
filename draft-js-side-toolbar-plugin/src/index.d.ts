
import { EditorPlugin } from "draft-js-plugins-editor";
import { ComponentType, ReactNode } from "react";
import { EditorState } from "draft-js";

export interface SideToolbarPluginTheme {
    buttonStyles?: {
        buttonWrapper?: string;
        button?: string;
        active?: string;
        separator?: string;
    };
    blockTypeSelectStyles?: {
        blockType?: string;
        spacer?: string;
        popup?: string;
    };
    toolbarStyles?: {
        wrapper?: string;
    };
}

type SideToolbarPosition = "left" | "right";

export interface SideToolbarPluginConfig {
    theme?: SideToolbarPluginTheme;
    position?: SideToolbarPosition;
}

export interface SideToolbarChildrenProps {
    theme: SideToolbarPluginTheme["buttonStyles"];
    getEditorState: () => EditorState;
    setEditorState: (editorState: EditorState) => void;
    onOverrideContent: (content: ComponentType<SideToolbarChildrenProps>) => void;
}

export interface SideToolbarProps {
    children?: (externalProps: SideToolbarChildrenProps) => ReactNode;
}

export type SideToolbarPlugin = EditorPlugin & {
    SideToolbar: ComponentType<SideToolbarProps>;
};

export const createSideToolbarPlugin: (config?: SideToolbarPluginConfig) => SideToolbarPlugin;

export default createSideToolbarPlugin;
