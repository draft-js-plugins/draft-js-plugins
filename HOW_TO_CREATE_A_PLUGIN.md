-----

# Basics

A Plugin is simply a plain JavaScript object containing a couple deeper nested objects or functions e.g.

```js
const customPlugin = {
  blockStyleFn: (contentBlock) => {
    if (contentBlock.getType() === 'blockquote') {
      return 'superFancyBlockquote';
    }
  },
  customStyleMap: {
    'STRIKETHROUGH': {
      textDecoration: 'line-through',
    },
  },
};
```

As most plugins take some kind of configuration we recommend you to always export a function that creates this object. This is aligned with all the core plugins and leads to a consistent developer experience.

```js
export default createCustomPlugin = (config) => {
  const blockStyleFn = (contentBlock) => {
    if (contentBlock.getType() === 'blockquote') {
      return 'superFancyBlockquote';
    }
  };
  
  const customStyleMap = {
    'STRIKETHROUGH': {
      textDecoration: 'line-through',
    },
  };

  return {
    blockStyleFn: blockStyleFn,
    customStyleMap: customStyleMap,
  };
};
```

# Supported Objects & Hooks

A plugin accepts all standard props the Draft.js Editor Component uses. [See details on Draft.js docs](https://draftjs.org/docs/api-reference-editor.html#content). Commonly used props:

- [blockRendererFn](https://facebook.github.io/draft-js/docs/api-reference-editor#blockrendererfn)
- [keyBindingFn](https://draftjs.org/docs/advanced-topics-key-bindings)
- [blockStyleFn](https://facebook.github.io/draft-js/docs/api-reference-editor#blockstylefn)
- [blockRenderMap](https://draftjs.org/docs/advanced-topics-custom-block-render-map)
- [customStyleMap](https://facebook.github.io/draft-js/docs/api-reference-editor#customstylemap)
- [handleReturn](https://facebook.github.io/draft-js/docs/api-reference-editor#handlereturn)
- [handleKeyCommand](https://facebook.github.io/draft-js/docs/api-reference-editor#handlekeycommand)
- [handleBeforeInput](https://facebook.github.io/draft-js/docs/api-reference-editor#handlebeforeinput)
- [handlePastedText](https://facebook.github.io/draft-js/docs/api-reference-editor#handlepastedtext)
- [handlePastedFiles](https://facebook.github.io/draft-js/docs/api-reference-editor#handlepastedfiles)
- [handleDroppedFiles](https://facebook.github.io/draft-js/docs/api-reference-editor#handledroppedfiles)
- [handleDrop](https://facebook.github.io/draft-js/docs/api-reference-editor#handledrop)
- [onFocus](https://draftjs.org/docs/api-reference-editor#onfocus)
- [onBlur](https://draftjs.org/docs/api-reference-editor#onblur)

There is one difference compared to the original properties.
All functions receive an additional argument. This argument is an object containing:

```js
// PluginFunctions
{
  getPlugins, // a function returning a list of all the plugins
  getProps, // a function returning a list of all the props pass into the Editor
  setEditorState, // a function to update the EditorState
  getEditorState, // a function to get the current EditorState
  getReadOnly, // a function returning of the Editor is set to readOnly
  setReadOnly, // a function which allows to set the Editor to readOnly
  getEditorRef, // a function to get the editor reference
}
```

In addition a plugin accepts 

- `initialize: (PluginFunctions) => void`
- `onChange: (EditorState, PluginFunctions) => EditorState`
- `willUnmount: (PluginFunctions) => void`
- `decorators: Array<Decorator> => void`
- `getAccessibilityProps: () => { ariaHasPopup: string, ariaExpanded: string }`

-----

### `initialize`

Allows to initialize a plugin once the editor becomes mounted.

### `onChange`

Allows a plugin to modify the state at the latest moment before the onChange callback of the Draft.js Editor is fired.

### `willUnmount`

Usually used to clean up.

### `decorators`

Draft.js allows to initialize an EditorState with a decorator. Many plugins also rely on decorators and therefore we decided
to incorporate them in the plugin architecture. Every plugin can have multiple decorators and all of them are combined by the
plugin editor.

A decorator can contain a `strategy` and a `component` e.g.

```js
{
  decorators: [
    {
      strategy: hashtagStrategy,
      component: HashtagSpan,
    },
  ],
}
```

You can read more about it in the original Draft.js documentation about [decorators](https://draftjs.org/docs/advanced-topics-decorators/#compositedecorator).

If you want to implement the [DraftDecoratorType Interface](https://draftjs.org/docs/advanced-topics-decorators/#beyond-compositedecorator) yourself, you can include those in your `decorators` array alongside the composite decorators. See [draft-js-simpledecorator](https://github.com/Soreine/draft-js-simpledecorator) for an example of an implementation of DraftDecoratorType. Here's an example mixed `decorators` array:

```js
{
  decorators: [
    {
      strategy: hashtagStrategy,
      component: HashtagSpan,
    },
    new MyCustomDraftDecoratorType('...'),
  ],
}
```


### `getAccessibilityProps`

In some rare cases like @mentions or Emoji autocompletion a plugin should be able to set certain ARIA attributes.
This currently only allows to set `aria-has-popup` & `aria-expanded`. Let us know in case you have further suggestions.

# Further Information

Keep in mind that the order of plugins can matter. The first decorator the that matches prevents the following ones to become active
for a certain text block. Same goes for `handleReturn` if returned true. Therefor try to keep your plugins minimal in the sense that
they only match & manipulate the necessary block or text.
