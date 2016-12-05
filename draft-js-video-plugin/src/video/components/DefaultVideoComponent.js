import React, { PropTypes } from 'react';
import utils from '../utils';

const YOUTUBE_PREFIX = 'https://www.youtube.com/embed/';
const VIMEO_PREFIX = 'https://player.vimeo.com/video/';

const getSrc = ({ src }) => {
  const {
    isYoutube,
    getYoutubeSrc,
    isVimeo,
    getVimeoSrc,
  } = utils;
  if (isYoutube(src)) {
    const { srcID } = getYoutubeSrc(src);
    return `${YOUTUBE_PREFIX}${srcID}`;
  }
  if (isVimeo(src)) {
    const { srcID } = getVimeoSrc(src);
    return `${VIMEO_PREFIX}${srcID}`;
  }
  return undefined;
};

const DefaultVideoCompoent = (props) => {
  const { blockProps, style } = props;
  const src = getSrc(blockProps);
  if (src) {
    return (
      <div style={style} >
        <div style={{ width: '100%', height: '0', position: 'relative', paddingBottom: '56.25%' }} >
          <iframe
            style={{ width: '100%', height: '100%', position: 'absolute', top: '0', left: '0' }}
            src={src}
            frameBorder="0"
            allowFullScreen
          />
        </div>
      </div>
    );
  }

  return (<div>invalid video source</div>);
};

DefaultVideoCompoent.propTypes = {
  blockProps: PropTypes.object,
};
export default DefaultVideoCompoent;
