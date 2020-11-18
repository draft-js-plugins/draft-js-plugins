import { css } from 'linaria';

export interface DividerPluginTheme {
  divider?: string;
}

export const defaultTheme = {
  divider: css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    margin: 32px 0;
    border: none; /* strip default hr styling */
    text-align: center;

    &::after {
      margin-left: 48px;
      color: rgba(0, 0, 0, 0.26); /* pick a color */
      font-size: 2.125rem;
      letter-spacing: 48px; /* increase space between dots */
      content: '•••';
    }
  `,
};
