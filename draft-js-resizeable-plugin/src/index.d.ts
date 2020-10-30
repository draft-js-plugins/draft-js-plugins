import { DraftDecorator } from 'draft-js';
import { EditorPlugin } from 'draft-js-plugins-editor';

type ResizeableEditorPlugin = EditorPlugin & { decorator: DraftDecorator };

type ScaleType = 'auto' | 'relative' | 'absolute';
interface InitializeArguments {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  blockProps?: any;
  horizontal?: ScaleType;
  vertical?: ScaleType;
  initialWidth?: string;
  initialHeight?: string;
}

declare const createResizeablePlugin: (
  args?: InitializeArguments
) => ResizeableEditorPlugin;

export default createResizeablePlugin;
