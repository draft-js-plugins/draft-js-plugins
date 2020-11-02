import { css } from 'linaria';

export interface FocusPluginTheme {
  unfocused: string;
  focused: string;
}

export const defaultTheme: FocusPluginTheme = {
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
