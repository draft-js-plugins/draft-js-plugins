import React, { PropTypes } from 'react';

const YOUTUBE_PREFIX = 'https://www.youtube.com/embed/';
const VIMEO_PREFIX = 'https://player.vimeo.com/video/';

const getSrc = ({ srcID, srcType }) => {
  if (srcType === 'youtube') {
    return `${YOUTUBE_PREFIX}${srcID}`;
  }
  if (srcType === 'vimeo') {
    return `${VIMEO_PREFIX}${srcID}`;
  }
  return undefined;
};

const DefaultVideoCompoent = (props) => {
  const { blockProps } = props;
  const src = getSrc(blockProps);

  if (src) {
    return (
      <iframe
        style={{ width: '100%' }}
        src={src}
        frameBorder="0"
        allowFullScreen
      />
    );
  }

  return (<div>invalid video source</div>);
};

DefaultVideoCompoent.propTypes = {
  blockProps: PropTypes.object,
};
export default DefaultVideoCompoent;
