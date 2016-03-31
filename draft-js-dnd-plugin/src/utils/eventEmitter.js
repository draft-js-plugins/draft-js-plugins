export default class EventEmitter {
  constructor() {
    this.listeners = new Map();
  }

  addListener = (label, callback) => {
    if (!this.listeners.has(label)) this.listeners.set(label, []);
    this.listeners.get(label).push(callback);
  };

  removeListener = (label, callback) => {
    const listeners = this.listeners.get(label);

    if (listeners && listeners.length) {
      const index = listeners.reduce((i, listener, x) =>
          (typeof listener === 'function' && listener === callback) ? x : i, -1);

      if (index > -1) {
        listeners.splice(index, 1);
        this.listeners.set(label, listeners);
        return true;
      }
    }

    return false;
  };

  emit = (label, ...args) => {
    const listeners = this.listeners.get(label);

    if (listeners && listeners.length) {
      listeners.forEach((listener) => {
        listener(...args);
      });
      return true;
    }

    return false;
  };
}
