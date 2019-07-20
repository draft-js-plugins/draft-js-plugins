import { DraftDecorator } from "draft-js";
import { EditorPlugin } from "draft-js-plugins-editor";

type FocusEditorPlugin = EditorPlugin & { decorator: DraftDecorator };

declare const createFocusPlugin: () => FocusEditorPlugin;

export default createFocusPlugin;
