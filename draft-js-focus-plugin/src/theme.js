import { css } from 'linaria';

export const defaultTheme = {
  unfocused: css`
    &:hover {
      cursor: default;
      border-radius: 2px;
      box-shadow: 0 0 0 3px #d2e3f7;
    }
  `,
  focused: css`
    cursor: default;
    border-radius: 2px;
    box-shadow: 0 0 0 3px #accef7;
  `,
};
