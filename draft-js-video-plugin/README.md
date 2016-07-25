# DraftJS Image Plugin

*This is a plugin for the `draft-js-plugins-editor`.*

Usage:

```js
import createVideoPlugin from 'draft-js-video-plugin';

const YOUTUBE_SOURCE = {
  regex: /((?:https:\/\/)?|(?:http:\/\/)?)((?:www\.)?|(?:m\.)?)(?:youtube(?:-nocookie)?\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i,
  prefix: 'https://www.youtube.com/embed/',
  videoKeyIndex: 3,
};

const sources = [YOUTUBE_SOURCE];

const videoPlugin = createVideoPlugin(sources);
```
