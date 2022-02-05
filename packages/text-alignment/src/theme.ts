import { css } from 'linaria';

export interface TextAlignmentPluginTheme {
  alignmentStyles: TextAlignmentBLocksStyle;
}

export interface TextAlignmentBLocksStyle {
  draftLeft: string;
  draftRight: string;
  draftCenter: string;
  [x: string]: string;
}

const alignmentStyles = {
  draftLeft: css`
    .public-DraftStyleDefault-block {
      text-align: left;
    }
  `,
  draftRight: css`
    .public-DraftStyleDefault-block {
      text-align: right;
    }
  `,
  draftCenter: css`
    .public-DraftStyleDefault-block {
      text-align: center;
    }
  `,
};
export const defaultTheme: TextAlignmentPluginTheme = {
  alignmentStyles,
};
