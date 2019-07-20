import { DraftDecorator } from "draft-js";
import { EditorPlugin } from "draft-js-plugins-editor";

type ResizeableEditorPlugin = EditorPlugin & { decorator: DraftDecorator };

declare const createResizeablePlugin: () => ResizeableEditorPlugin;

export default createResizeablePlugin;
