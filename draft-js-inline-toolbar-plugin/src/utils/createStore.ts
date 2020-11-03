import { EditorState, SelectionState } from 'draft-js';

interface ItemMap {
  selection?: SelectionState;
  getEditorState?(): EditorState;
  setEditorState?(state: EditorState): void;
  isVisible?: boolean;
  getEditorRef?(): {
    refs?: { editor: HTMLElement };
    editor: HTMLElement;
  };
}

export interface SubscriptionCallback<T> {
  (item: T): void;
}

export interface InlineToolbarPluginStore {
  subscribeToItem<K extends keyof ItemMap>(
    key: K,
    callback: SubscriptionCallback<ItemMap[K]>
  ): void;
  unsubscribeFromItem<K extends keyof ItemMap>(
    key: K,
    callback: SubscriptionCallback<ItemMap[K]>
  ): void;
  updateItem<K extends keyof ItemMap>(key: K, item: ItemMap[K]): void;
  getItem<K extends keyof ItemMap>(key: K): ItemMap[K];
}

export default function createStore(
  initialState: ItemMap
): InlineToolbarPluginStore {
  let state: ItemMap = initialState || {};
  const listeners: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [x in keyof ItemMap]: Array<(v: any) => void>;
  } = {};

  return {
    subscribeToItem(key, callback) {
      listeners[key] = listeners[key] || [];
      listeners[key]!.push(callback);
    },
    unsubscribeFromItem(key, callback) {
      const listener = listeners[key];
      if (listener) {
        listeners[key] = listener.filter(
          currentListener => currentListener !== callback
        );
      }
    },
    updateItem(key, item) {
      state = {
        ...state,
        [key]: item,
      };
      const listener = listeners[key];
      if (listener) {
        listener.forEach(currentListener => currentListener(state[key]));
      }
    },
    getItem(key) {
      return state[key];
    },
  };
}
