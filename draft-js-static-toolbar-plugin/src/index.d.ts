import { EditorPlugin } from "draft-js-plugins-editor";
import { ComponentType, ReactNode } from "react";
import { DraftJsStyleButtonProps, DraftJsButtonTheme } from 'draft-js-buttons';

export interface StaticToolbarPluginTheme {
    buttonStyles: DraftJsButtonTheme;
    toolbarStyles: {
        toolbar: string;
    };
}

export interface StaticToolbarPluginConfig {
  theme: StaticToolbarPluginTheme;
}

export interface ToolbarProps {
  children(externalProps: DraftJsStyleButtonProps): ReactNode;
}

export type StaticToolBarPlugin = EditorPlugin & {
  Toolbar: ComponentType<ToolbarProps>;
};

declare const createStaticToolbarPlugin: (
  config?: StaticToolbarPluginConfig
) => StaticToolBarPlugin;

export default createStaticToolbarPlugin;

export interface SeparatorProps {
  className?: string;
}

declare const Separator: (props: SeparatorProps) => JSX.Element;

export { Separator };