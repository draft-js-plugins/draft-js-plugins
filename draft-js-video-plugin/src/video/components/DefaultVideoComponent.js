import React from 'react';
import PropTypes from 'prop-types';

const DefaultVideoCompoent = ({
  blockProps,
  className = '',
  style,
  theme,
}) => {
  const { src } = blockProps;
  if (src) {
    return (
      <div style={style} >
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

  return (<div className={theme.invalidVideoSrc}>invalid video source</div>);
};

DefaultVideoCompoent.propTypes = {
  blockProps: PropTypes.object.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  theme: PropTypes.object.isRequired,
};
export default DefaultVideoCompoent;
