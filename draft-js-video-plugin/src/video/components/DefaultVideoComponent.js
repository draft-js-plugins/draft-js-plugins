import React from 'react';
import PropTypes from 'prop-types';
import utils from '../utils';

const YOUTUBE_PREFIX = 'https://www.youtube.com/embed/';
const VIMEO_PREFIX = 'https://player.vimeo.com/video/';

const getSrc = ({ src }) => {
  const { isYoutube, getYoutubeSrc, isVimeo, getVimeoSrc } = utils;
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

const DefaultVideoCompoent = ({ blockProps, className = '', style, theme, ...otherProps }) => {
  const src = getSrc(blockProps);
  if (src) {
    return (
      <div style={style}>
        <div className={`${theme.iframeContainer} ${className}`}>
          <iframe
            className={theme.iframe}
            src={src}
            frameBorder="0"
            allowFullScreen
          />
        </div>
      </div>
    );
  }


  const {
    block,
    customStyleMap, // eslint-disable-line no-unused-vars
    customStyleFn, // eslint-disable-line no-unused-vars
    decorator, // eslint-disable-line no-unused-vars
    forceSelection, // eslint-disable-line no-unused-vars
    offsetKey, // eslint-disable-line no-unused-vars
    selection, // eslint-disable-line no-unused-vars
    tree, // eslint-disable-line no-unused-vars
    contentState,
    blockStyleFn,
    ...elementProps
  } = otherProps;
  return (
    <video
      src={blockProps.src}
      style={{ ...theme.video, ...style }}
      {...elementProps}
      controls
    />
  );
};

DefaultVideoCompoent.propTypes = {
  blockProps: PropTypes.object.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  theme: PropTypes.object.isRequired,
};
export default DefaultVideoCompoent;
