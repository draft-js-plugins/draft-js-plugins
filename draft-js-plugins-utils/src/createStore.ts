export interface SubscriptionCallback<T> {
  (item: T): void;
}

// eslint-disable-next-line @typescript-eslint/ban-types
export interface Store<T extends object> {
  subscribeToItem<K extends keyof T>(
    key: K,
    callback: SubscriptionCallback<T[K]>
  ): void;
  unsubscribeFromItem<K extends keyof T>(
    key: K,
    callback: SubscriptionCallback<T[K]>
  ): void;
  updateItem<K extends keyof T>(key: K, item: T[K]): void;
  getItem<K extends keyof T>(key: K): T[K];
}

// eslint-disable-next-line @typescript-eslint/ban-types
export function createStore<T extends object>(
  initialState: T = {} as T
): Store<T> {
  let state: T = initialState;
  const listeners: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [x in keyof T]: Array<(v: any) => void>;
  } = {} as {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [x in keyof T]: Array<(v: any) => void>;
  };

  return {
    subscribeToItem(key, callback) {
      listeners[key] = listeners[key] || [];
      listeners[key]!.push(callback);
    },
    unsubscribeFromItem(key, callback) {
      const listener = listeners[key];
      if (listener) {
        listeners[key] = listener.filter(
          (currentListener) => currentListener !== callback
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
        listener.forEach((currentListener) => currentListener(state[key]));
      }
    },
    getItem(key) {
      return state[key];
    },
  };
}
