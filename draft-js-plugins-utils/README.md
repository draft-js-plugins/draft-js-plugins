# Draft js plugin utilities

Available methods

## createLinkAtSelection

```js
createLinkAtSelection(
  editorState: EditorState,
  url: string
) => EditorState
```

## removeLinkAtSelection

```js
removeLinkAtSelection(
  editorState: EditorState,
) => EditorState
```

## getCurrentEntityKey

```js
getCurrentEntityKey(
  editorState: EditorState,
) => DraftEntityKey
```

## getCurrentEntity

```js
getCurrentEntity(
  editorState: EditorState,
) => DraftEntity
```

## hasEntity

```
hasEntity(
  editorState: EditorState,
  entityType: DraftEntityType
) => boolean
```
