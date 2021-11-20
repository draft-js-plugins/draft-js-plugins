import { EditorPlugin } from '@draft-js-plugins/editor';
import handleDrop from './handleDrop';
import createDecorator from './createDecorator';

type DndEditorPlugin = EditorPlugin & {
  decorator: ReturnType<typeof createDecorator>;
};

export interface DndPluginStore {
  getReadOnly?(): boolean;
}

export default function createBlockDndPlugin(): DndEditorPlugin {
  const store: DndPluginStore = {
    getReadOnly: undefined,
  };
  return {
    initialize: ({ getReadOnly }) => {
      store.getReadOnly = getReadOnly;
    },
    decorator: createDecorator({ store }),
    // Handle blocks dragged and dropped across the editor
    handleDrop,
  };
}
