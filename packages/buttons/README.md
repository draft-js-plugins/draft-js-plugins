# DraftJS Buttons

## Important: Include after the Editor

For the toolbar to work correctly, you must include the `<Toolbar>` component after the editor component:

```jsx
<Editor .../>
<Toolbar />
```


## Using the Subscript and Superscript buttons requires a custom style map:

```jsx
<Editor
    customStyleMap={{
      SUBSCRIPT: { fontSize: '0.6em', verticalAlign: 'sub' },
      SUPERSCRIPT: { fontSize: '0.6em', verticalAlign: 'super' }
    }}

/>
<Toolbar />
```
