import { EditorPlugin } from "draft-js-plugins-editor";
import { AnchorHTMLAttributes, ComponentType } from "react";

export interface AnchorPluginTheme {
  link?: string;
  input?: string;
  inputInvalid?: string;
}

export interface AnchorPluginConfig {
  theme?: AnchorPluginTheme;
  placeholder?: string;
  Link?: ComponentType<AnchorHTMLAttributes<HTMLAnchorElement>>;
  linkTarget?: string;
}

export type AnchorPlugin = EditorPlugin & {
  LinkButton: ComponentType<unknown>;
};

declare const createAnchorPlugin: (config: AnchorPluginConfig) => AnchorPlugin;

export default createAnchorPlugin;
