const createStore = (initialState) => {
  let state = initialState || {};
  const listeners = {};

  const subscribeToItem = (key, callback) => {
    listeners[key] = listeners[key] || [];
    listeners[key].push(callback);
  };

  const updateItem = (key, item) => {
    state = {
      ...state,
      [key]: item,
    };
    if (listeners[key]) {
      listeners[key].forEach((listener) => listener(state[key]));
    }
  };

  const getItem = (key) => state[key];

  return {
    subscribeToItem,
    updateItem,
    getItem,
  };
};

export default createStore;
