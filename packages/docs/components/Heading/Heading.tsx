import React, { ReactElement, ReactNode } from 'react';
import styles from './Heading.module.css';

interface HeadingProps {
  children: ReactNode;
  level: number;
}

export default function Heading({
  children,
  level,
}: HeadingProps): ReactElement {
  let style;
  switch (level) {
    case 2:
      style = styles.level2;
      break;
    case 3:
      style = styles.level3;
      break;
    case 4:
      style = styles.level4;
      break;
    default:
      style = styles.level2;
  }

  return <h2 className={style}>{children}</h2>;
}
