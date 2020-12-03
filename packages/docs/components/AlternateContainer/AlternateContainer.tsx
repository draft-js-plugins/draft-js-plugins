import React, { ReactElement, ReactNode } from 'react';
import clsx from 'clsx';
import styles from './AlternateContainer.module.css';
import ContainerBox from '../ContainerBox/ContainerBox';

interface AlternateContainerProps {
  className?: string;
  children: ReactNode;
}

export default function AlternateContainer({
  className,
  children,
}: AlternateContainerProps): ReactElement {
  const combinedClassName = clsx(styles.root, className);
  return (
    <div className={combinedClassName}>
      <ContainerBox>{children}</ContainerBox>
    </div>
  );
}
