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
