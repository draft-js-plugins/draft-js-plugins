import { List } from 'immutable';

export interface BlockKeyStore {
  add(key: string): List<string>;
  remove(key: string): List<string>;
  includes(key: string): boolean;
  getAll(): List<string>;
}

export default function createBlockKeyStore(): BlockKeyStore {
  let keys = List<string>();

  return {
    add(key) {
      keys = keys.push(key);
      return keys;
    },
    remove(key) {
      keys = keys.filter((item) => item !== key) as List<string>;
      return keys;
    },
    includes(key) {
      return keys.includes(key);
    },
    getAll() {
      return keys;
    },
  };
}
