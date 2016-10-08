# DraftJS Image Plugin

*This is a plugin for the `draft-js-plugins-editor`.*

Usage:

```js
import createImagePlugin, { imageCreator, imageStyles } from 'draft-js-image-plugin';

const imagePlugin = createImagePlugin();
```

Then you can paste image after you make a screen capture or something else.

By default, the image data is stored as `dataUrl` directly into the editorState.
As the image data is large, this may cause performance issues.
So we strongly recommand you to implement your own uploading method by adding a config item.

```
const imagePlugin = createImagePlugin({upload: function(dataUrl, callback){
  // Upload the data url and call the callback!
  // eg. dataUrl = 'data:image/png;base64,iVBORE6+ogD...'
  $.post('/upload',{data_url:dataUrl},function(result)){
    // the result contains a new url, eg. result.url = '/image/1.png'
    callback(result.url);
  }
}})
```
