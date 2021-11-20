import { css } from 'linaria';

export interface CounterPluginTheme {
  counter?: string;
  counterOverLimit?: string;
}

export const defaultTheme: CounterPluginTheme = {
  counter: css`
    color: inherit;
  `,
  counterOverLimit: css`
    color: #d86262;
  `,
};
