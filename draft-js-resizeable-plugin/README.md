# DraftJS Resizable Plugin

*This is a plugin for the `draft-js-plugins-editor`.*

Usage:

```js
import createResizeablePlugin from 'draft-js-resizeable-plugin';

const resizePlugin = createResizeablePlugin({ isResizable: true });
```

This plugin does not require, but work better in combination with the `draft-js-focus-plugin`.

------

You can pass optional parameter to `createResizeablePlugin`;

| Props                                          | Type         | Description | Required
|-----------------------------------------------|:------------:|--------|--------|
| horizontal                                     | "auto" or "relative" or "absolute" | "relative" measures the width of image in percentages,  while "absolute" measures in pixels | no
| vertical                                       | "auto" or "relative" or "absolute" | same as horizontal, but for height | no
| initialWidth                                   | string | initial width of image. If not passed, the default value is 40 (either % or px, depending on type of horizontal) unless horizontal is set to "auto". In case of "auto" is has no effect. You can pass any valid css value for property width. For example, "100px", "60%" or "auto" | no
| initialHeight                                  | string | same as initialWidth, but for height | no


### Example
```js
import createResizeablePlugin from 'draft-js-resizeable-plugin';

const resizePlugin = createResizeablePlugin({
    horizontal: "absolute",
    initialWidth: "auto"
});
```
