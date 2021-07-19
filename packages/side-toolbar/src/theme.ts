import { css } from 'linaria';
import { DraftJsButtonTheme } from '@draft-js-plugins/buttons';

export interface SideToolbarPluginTheme {
  buttonStyles?: DraftJsButtonTheme;
  blockTypeSelectStyles?: {
    blockType?: string;
    popup?: string;
    arrow?: string;
    popupFrame?: string;
  };
  toolbarStyles?: {
    wrapper?: string;
  };
}

const buttonStyles: SideToolbarPluginTheme['buttonStyles'] = {
  buttonWrapper: css`
    display: inline-block;
  `,

  button: css`
    background: #fbfbfb;
    color: #888;
    font-size: 18px;
    border: 0;
    padding-top: 5px;
    vertical-align: bottom;
    height: 34px;
    width: 36px;
    &:hover,
    &:focus {
      background: #f3f3f3;
      outline: 0; /* reset for :focus */
    }
    svg {
      fill: #888;
    }
  `,

  active: css`
    background: #efefef;
    color: #444;
    svg {
      fill: #444;
    }
  `,
};

const blockTypeSelectStyles: SideToolbarPluginTheme['blockTypeSelectStyles'] = {
  blockType: css`
    box-sizing: border-box;
    border: 1px solid #ddd;
    background: #fff;
    padding: 5px;
    margin: 0;
    border-radius: 18px;
    cursor: pointer;
    height: 36px;
    width: 36px;
    line-height: 36px;
    text-align: center;
    svg {
      fill: #888;
    }
  `,
  popupFrame: css`
    border: 1px solid #ddd;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0px 1px 3px 0px rgba(220, 220, 220, 1);
    box-sizing: border-box;
    width: 74px;
  `,
  popup: css`
    z-index: 3;
    padding: 8px;
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.25s cubic-bezier(0.3, 1.2, 0.2, 1);
    &:hover,
    &:hover > div::before,
    &[data-show='true'] {
      visibility: visible;
      opacity: 1;
    }
  `,

  arrow: css`
    &,
    &::before {
      position: absolute;
      width: 6px;
      height: 6px;
      background: inherit;
    }

    &::before {
      content: '';
      border: 1px solid #ddd;
      transform: rotate(45deg);
    }

    &[data-popper-placement^='top'] {
      bottom: 4px;
    }

    &[data-popper-placement^='bottom'] {
      top: 4px;
    }

    &[data-popper-placement^='left'] {
      right: 4px;
    }

    &[data-popper-placement^='right'] {
      left: 4px;
    }

    &[data-popper-placement^='top']::before {
      border-left: 0;
      border-top: 0;
    }

    &[data-popper-placement^='bottom']::before {
      border-right: 0;
      border-bottom: 0;
    }

    &[data-popper-placement^='left']::before {
      border-left: 0;
      border-bottom: 0;
    }

    &[data-popper-placement^='right']::before {
      border-right: 0;
      border-top: 0;
    }
  `,
};

const toolbarStyles: SideToolbarPluginTheme['toolbarStyles'] = {
  wrapper: css`
    position: absolute;
  `,
};

export const defaultTheme: SideToolbarPluginTheme = {
  buttonStyles,
  blockTypeSelectStyles,
  toolbarStyles,
};
