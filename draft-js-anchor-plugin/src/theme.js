import { css } from 'linaria';

export const defaultTheme = {
  input: css`
    height: 34px;
    width: 220px;
    padding: 0 12px;
    font-size: 15px;
    font-family: inherit;
    background-color: transparent;
    border: none;
    color: #444;
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: #888;
    }
  `,

  inputInvalid: css`
    color: #e65757;
  `,

  link: css`
    color: #2996da;
    text-decoration: underline;
  `,
};
