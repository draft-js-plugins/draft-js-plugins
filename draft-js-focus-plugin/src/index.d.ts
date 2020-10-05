import { DraftDecorator } from "draft-js";
import { EditorPlugin } from "draft-js-plugins-editor";

type FocusEditorPlugin = EditorPlugin & { decorator: DraftDecorator };

export interface FocusEditorPluginConfig {
  theme?: {
    focused?: string;
    unfocused?: string;
  }
}

declare const createFocusPlugin: (config?: FocusEditorPluginConfig) => FocusEditorPlugin;

export default createFocusPlugin;
