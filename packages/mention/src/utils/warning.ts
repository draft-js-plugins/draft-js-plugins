import { once } from 'lodash';

export const warning = once((text: string): void => {
  if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line no-console
    console.warn(text);
  }
});
