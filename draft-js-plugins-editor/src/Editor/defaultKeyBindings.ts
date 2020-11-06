import { DraftEditorCommand, getDefaultKeyBinding } from 'draft-js';
import { KeyboardEvent } from 'react';

export function keyBindingFn(event: KeyboardEvent): DraftEditorCommand | null {
  return getDefaultKeyBinding(event);
}
