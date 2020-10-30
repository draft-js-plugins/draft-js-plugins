import { css } from 'linaria';

export interface LinkifyPluginTheme {
  link: string;
}

export const defaultTheme: LinkifyPluginTheme = {
  link: css`
    &,
    &:visited {
      color: #5e93c5;
      text-decoration: none;
    }

    &:hover,
    &:focus {
      color: #7eadda;
      outline: 0; /* reset for :focus */
      cursor: pointer;
    }

    &:active {
      color: #4a7bab;
    }
  `,
};
