import { createStore } from '../createStore';

interface StoreItems {
  name?: string;
  age?: number;
}

describe('createStore', () => {
  test('allows to pass in initial state', () => {
    const store = createStore<StoreItems>({ name: 'Ada' });
    expect(store.getItem('name')).toBe('Ada');
  });

  test('should be possible to update and get an item', () => {
    const store = createStore<StoreItems>();
    store.updateItem('age', 74);
    expect(store.getItem('age')).toBe(74);
  });

  test('should be possible to subscribe to an update', (done) => {
    const store = createStore<StoreItems>();
    store.subscribeToItem('name', (item) => {
      expect(item).toBe('Ada');
      done();
    });
    store.updateItem('name', 'Ada');
  });
});
