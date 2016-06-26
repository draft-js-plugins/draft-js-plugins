# Frequently Asked Questions

## How to reset the content?

Since the decorators are stored in the EditorState it's important to not reset
the complete EditorState. The proper way is to reset the ContentState which is
part of the EditorState. In addition this ensures proper undo/redo behavior.

Right:
```js
import { EditorState, ContentState } from 'draft-js';

const editorState = EditorState.push(this.state.editorState, ContentState.createFromText(''));
this.setState({ editorState });
```

Wrong:
```js
import { EditorState } from 'draft-js';

this.setState({ editorState: EditorState.createEmpty() })
```

## Why is there no Popover for Mentions/Emoji plugin?

The MentionSuggestions/EmojiSuggestions component is internally connected to the
plugin & editor and will be updated & positioned once the user starts the autocompletion
with an @ character for mentions or a colon for Emojis.

Depending on how your Editor or wrapping elements are positioned the positioning might fail.
You can provide a custom `positionSuggestions` function to the plugin config that returns an empty. This will not position the suggestion in any way. Once you got to that point you need to investigate how to position your suggestions manually leveraging `positionSuggestions`.

```js
import createEmojiPlugin from 'draft-js-emoji-plugin';

const positionSuggestions = ({ state, props }) => {
  return {};
};

const emojiPlugin = createEmojiPlugin({ positionSuggestions: positionSuggestions });
```

## My default styles are broken?

The Draft framework includes a handful of CSS resources intended for use with the editor, available in a single file via the build, [DraftStyleDefault.css](https://github.com/facebook/draft-js/blob/master/src/component/utils/DraftStyleDefault.css)

You most probably miss this file. See also the troubleshooting in the original [DraftJS documentation](https://facebook.github.io/draft-js/docs/advanced-topics-issues-and-pitfalls.html#missing-draft-css).

## Can I use the same plugin for multiple plugin Editors?

No, you need to instantiation multiple plugins in case you use multiple editors.

```js
const emojiPlugin = createEmojiPlugin();
const emojiPlugin2 = createEmojiPlugin();
const EmojiSuggestions = emojiPlugin.EmojiSuggestions;
const EmojiSuggestions2 = emojiPlugin2.EmojiSuggestions;

// The Editor accepts an array of plugins. In this case, only the emojiPlugin is
// passed in, although it is possible to pass in multiple plugins.
// The EmojiSuggestions component is internally connected to the editor and will
// be updated & positioned once the user starts the autocompletion with a colon.
const MyEditor = ({ editorState, editorState2, onChange, onChange2 }) => (
  <div>
    <Editor
      editorState={ editorState }
      onChange={ onChange }
      plugins={ [emojiPlugin] }
    />
    <EmojiSuggestions />
    <Editor
      editorState={ editorState2 }
      onChange={ onChange2 }
      plugins={ [emojiPlugin2] }
    />
    <EmojiSuggestions2 />
  </div>
);

export default MyEditor;
```
