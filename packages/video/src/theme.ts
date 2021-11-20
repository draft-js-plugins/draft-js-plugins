import { css } from 'linaria';

export interface VideoPluginTheme {
  iframeContainer: string;
  iframe: string;
  invalidVideoSrc: string;
  video: string;
}

export const defaultTheme: VideoPluginTheme = {
  iframeContainer: css`
    width: 100%;
    height: 0;
    position: relative;
    padding-bottom: 56.25%;
  `,

  iframe: css`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  `,

  invalidVideoSrc: css`
    text-align: center;
    background-color: #eaeaea;
    padding: 1em;
  `,

  video: css`
    width: 100%;
    height: 100%;
  `,
};
