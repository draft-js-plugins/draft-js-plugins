# DraftJS Video Plugin

*This is a plugin for the `draft-js-plugins-editor`.*

This plugin allows you to copy a video url and paste the Videos to your editor!
but default it handles youtube and vimeo, but you can always write your own logic to handle you desired video source see more details at advanced usage.
###Getting Started

npm install draft-js-video-plugin --save

Basic Usage:

```js
import createVideoPlugin from 'draft-js-video-plugin';

const videoPlugin = createVideoPlugin({ autoHandlePastedText: true });

```
Advanced Usage:
```js
import createVideoPlugin from 'draft-js-video-plugin';

const videoPlugin = createVideoPlugin({
  autoHandlePastedText: true,
  isVideo: (url) => {
   //take url check if it's a valid video url return true or false
    const YOUTUBEMATCH_URL = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/
    return YOUTUBEMATCH_URL.test(url)
  },
  getVideoSrc: (url) => {
  //parse url to videoSrc object which will pass to WrapperComponent as props
    const YOUTUBEMATCH_URL = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/
    const id = url && url.match(YOUTUBEMATCH_URL)[1]
    return {
      srcID: id,
      srcType: 'youtube',
      url,
    }
  },
  wrapperComponent: (props) => {
    const { blockProps } = props;
    const { url, srcID, srcType } =blockProps;
    return (
      <YourCustomVideoPlayer
        url={url}
      />);
  },
});

```
