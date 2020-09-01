import { css } from 'linaria';

const buttonStyles = {
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

  separator: css`
    display: inline-block;
    border-right: 1px solid #ddd;
    height: 24px;
    margin: 0 0.5em;
  `,
};

const blockTypeSelectStyles = {
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

  spacer: css`
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    width: 74px;
    height: 8px;
  `,

  popup: css`
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    background: #efefef;
    border: 1px solid #ddd;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0px 1px 3px 0px rgba(220, 220, 220, 1);
    z-index: 3;
    box-sizing: border-box;
    width: 74px;
    margin-top: 8px;
    &:after,
    &:before {
      bottom: 100%;
      left: 50%;
      border: solid transparent;
      content: ' ';
      height: 0;
      width: 0;
      position: absolute;
      pointer-events: none;
    }
    &:after {
      border-color: rgba(251, 251, 251, 0);
      border-bottom-color: #fbfbfb;
      border-width: 4px;
      margin-left: -4px;
    }
    &:before {
      border-color: rgba(221, 221, 221, 0);
      border-bottom-color: #ddd;
      border-width: 6px;
      margin-left: -6px;
    }
  `,
};

const toolbarStyles = {
  wrapper: css`
    position: absolute;
  `,
};

export const defaultTheme = {
  buttonStyles,
  blockTypeSelectStyles,
  toolbarStyles,
};
