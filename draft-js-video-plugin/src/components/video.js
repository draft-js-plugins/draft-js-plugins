import React, { PropTypes } from 'react';

const Video = (props) => {
  const { video } = props.blockProps.entityData;

  return (
    <iframe src={video} frameBorder="0" allowFullScreen></iframe>
  );
};

Video.propTypes = {
  blockProps: PropTypes.object,
};

export default Video;
