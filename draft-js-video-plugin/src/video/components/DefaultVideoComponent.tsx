import React, { ReactElement } from 'react';
import PropTypes from 'prop-types';
import { ContentBlock, ContentState, SelectionState } from 'draft-js';
import { CSSProperties } from 'linaria';
import { isYoutube, getYoutubeSrc, isVimeo, getVimeoSrc } from '../utils';
import { VideoPluginTheme } from '../../theme';

const YOUTUBE_PREFIX = 'https://www.youtube.com/embed/';
const VIMEO_PREFIX = 'https://player.vimeo.com/video/';

const getSrc = ({ src }: { src: string }): string | undefined => {
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

export interface DefaultVideoComponentProps {
  blockProps: { src: string };
  className?: string;
  style?: CSSProperties;
  theme: VideoPluginTheme;

  //removed props
  block: ContentBlock;
  customStyleMap: unknown;
  customStyleFn: unknown;
  decorator: unknown;
  forceSelection: unknown;
  offsetKey: string;
  selection: SelectionState;
  tree: unknown;
  contentState: ContentState;
  blockStyleFn: unknown;
}

const DefaultVideoComponent = ({
  blockProps,
  className = '',
  style,
  theme,
  ...otherProps
}: DefaultVideoComponentProps): ReactElement => {
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
    block, // eslint-disable-line @typescript-eslint/no-unused-vars
    customStyleMap, // eslint-disable-line @typescript-eslint/no-unused-vars
    customStyleFn, // eslint-disable-line @typescript-eslint/no-unused-vars
    decorator, // eslint-disable-line @typescript-eslint/no-unused-vars
    forceSelection, // eslint-disable-line @typescript-eslint/no-unused-vars
    offsetKey, // eslint-disable-line @typescript-eslint/no-unused-vars
    selection, // eslint-disable-line @typescript-eslint/no-unused-vars
    tree, // eslint-disable-line @typescript-eslint/no-unused-vars
    contentState, // eslint-disable-line @typescript-eslint/no-unused-vars
    blockStyleFn, // eslint-disable-line @typescript-eslint/no-unused-vars
    ...elementProps
  } = otherProps;
  return (
    <video
      src={blockProps.src}
      className={theme.video}
      style={style}
      {...elementProps}
      controls
    />
  );
};

DefaultVideoComponent.propTypes = {
  blockProps: PropTypes.object.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  theme: PropTypes.object.isRequired,
};
export default DefaultVideoComponent;
