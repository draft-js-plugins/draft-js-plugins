import { DraftDecorator } from "draft-js";
import { EditorPlugin } from "draft-js-plugins-editor";

type DragNDropEditorPlugin = EditorPlugin & {
  decorator: DraftDecorator;
};

declare const createBlockDndPlugin: () => DragNDropEditorPlugin;
export default createBlockDndPlugin;
