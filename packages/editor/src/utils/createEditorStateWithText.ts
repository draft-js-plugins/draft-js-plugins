/**
 * Create an editor state with some text in it already
 */

import { ContentState, EditorState } from 'draft-js';

export default function createEditorStateWithText(text: string): EditorState {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  if (EditorState.createWithText) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return EditorState.createWithText(text);
  }
  return EditorState.createWithContent(ContentState.createFromText(text));
}
