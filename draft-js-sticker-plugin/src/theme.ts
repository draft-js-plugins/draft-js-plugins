import { css } from 'linaria';

export interface StickerPluginTheme {
  sticker?: string;
  stickerImage?: string;
  stickerRemoveButton?: string;
  select?: string;
  selectPopover?: string;
  selectClosedPopover?: string;
  selectBottomGradient?: string;
  selectButton?: string;
  selectPressedButton?: string;
  selectStickerList?: string;
  selectSticker?: string;
  selectStickerImage?: string;
}

const sharedSelectButton = `
  box-sizing: border-box;
  background: #fff;
  border: 1px solid #ddd;
  padding: 0;
  color: #888;
  margin: 0;
  border-radius: 1.5em;
  cursor: pointer;
  height: 1.5em;
  width: 2.5em;
  font-size: 1.5em;
  line-height: 1.2em;
  margin: 0;
  &:focus {
    outline: 0; /* reset for :focus */
  }
  &:hover {
    background: #f3f3f3;
  }
  &:active {
    background: #e6e6e6;
  }
`;

export const defaultTheme: StickerPluginTheme = {
  // sticker styles
  sticker: css`
    margin: 0;
    position: relative;
    display: block;
  `,

  stickerImage: css`
    width: 80px;
    height: 80px;
  `,

  stickerRemoveButton: css`
    background: #d9d9d9;
    color: #fff;
    margin: 0;
    padding: 0.5em;
    border: none;
    border-radius: 50%;
    line-height: 80%;
    position: absolute;
    font-size: 0.62em;
    margin-left: -0.825em;
    cursor: pointer;
    &:hover {
      background: #e4e4e4;
    }
    &:active {
      background: #cecece;
      color: #efefef;
    }
  `,

  // select styles
  select: css`
    background: #fff;
    display: inline-block;
  `,

  selectPopover: css`
    margin-top: 10px;
    background: #fff;
    position: absolute;
    height: 250px;
    width: 230px;
    border-radius: 2px;
    padding: 10px;
    box-shadow: 0px 4px 30px 0px rgba(220, 220, 220, 1);
    z-index: 1000;
  `,

  selectClosedPopover: css`
    display: none;
  `,

  selectBottomGradient: css`
    width: 100%;
    height: 1em;
    position: absolute;
    bottom: 0px;
    left: 0px;
    right: 0px;
    background-color: white;
    pointer-events: none;
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 1) 100%
    );
  `,

  selectButton: css`
    ${sharedSelectButton}
  `,

  selectPressedButton: css`
    ${sharedSelectButton}
    background: #ededed;
  `,

  selectStickerList: css`
    position: absolute;
    overflow-x: none;
    overflow-y: scroll;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: row wrap;
    align-content: flex-start;
  `,

  // select stricker styles
  selectSticker: css`
    border: 0;
    border-radius: 4px;
    background: #fff;
    margin: 5px 0px 5px 0px;
    box-sizing: border-box;
    &:hover {
      background: #efefef;
      outline: 0; /* reset for :focus */
    }
    &:active {
      background: #dfdfdf;
    }
  `,

  selectStickerImage: css`
    height: 80px;
    width: 80px;
    -webkit-user-drag: none;
    user-drag: none;
  `,
};
