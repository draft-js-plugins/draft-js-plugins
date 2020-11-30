import React, { ReactElement, ReactNode } from 'react';
import styles from './ContainerBox.module.css';

interface ContainerBoxProps {
  children: ReactNode;
}

export default function ContainerBox({
  children,
}: ContainerBoxProps): ReactElement {
  return <div className={styles.root}>{children}</div>;
}
