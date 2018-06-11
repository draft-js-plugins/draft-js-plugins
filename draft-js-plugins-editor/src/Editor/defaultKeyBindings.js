import { getDefaultKeyBinding } from 'draft-js';

export default {
  keyBindingFn: (event) => getDefaultKeyBinding(event)
};
