import { EditorState, Modifier, Entity, SelectionState } from 'draft-js';
import unicodeRegex from '../utils/unicodeRegex';

/*
export (contentBlock: Object, callback: Function) => {
  findWithRegex(unicodeRegex, contentBlock, callback);
};
*/

export default function replaceUnicodeWithEntities(editorState: EditorState): EditorState {
  //  const plainText = editorState.getCurrentContent().getPlainText();
  const contentState = editorState.getCurrentContent();
  const blocks = contentState.getBlockMap();
  let newEditorState = editorState;

  blocks.forEach((block) => {
    const blockKey = block.get('key');
    const plainText = block.getText();
    let match;

    while (match = unicodeRegex.exec(plainText)) { // eslint-disable-line
      console.log('boom');
      const selection = SelectionState.createEmpty(blockKey)
        .set('anchorOffset', match.index)
        .set('focusOffset', match.index + match[0].length);

      const entityKey = Entity.create('emoji', 'IMMUTABLE', { emojiUnicode: match[0] });
      const replacedContent = Modifier.replaceText(
        newEditorState.getCurrentContent(),
        selection,
        match[0],
        null,
        entityKey,
      );

      newEditorState = EditorState.push(
        newEditorState,
        replacedContent,
        'insert-emoji',
      );
    }
  });

  return newEditorState;
}
