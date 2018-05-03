// @flow

/* eslint-disable no-undef */

import { getDefaultKeyBinding } from 'draft-js';

/**
 * Handles default key bindings, returns a command (string)
 */
export function keyBindingFn(event: SyntheticKeyboardEvent<*>): ?string {
  return getDefaultKeyBinding(event);
}
