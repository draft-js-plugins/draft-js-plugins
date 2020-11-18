import React, { ReactElement } from 'react';
import { css } from 'linaria';

const separator = css`
  display: inline-block;
  border-right: 1px solid #ddd;
  height: 24px;
  margin: 0 0.5em;
`;

export interface SeperatorProps {
  className?: string;
}

export default function Seperator({
  className = separator,
}: SeperatorProps): ReactElement {
  return <div className={className} />;
}
