import React, { ReactElement, ReactNode } from 'react';
import clsx from 'clsx';
import styles from './Container.module.css';
import ContainerBox from '../ContainerBox/ContainerBox';

interface ContainerProps {
  className?: string;
  children: ReactNode;
}

export default function Container({
  className,
  children,
}: ContainerProps): ReactElement {
  const combinedClassName = clsx(styles.root, className);
  return (
    <div className={combinedClassName}>
      <ContainerBox>{children}</ContainerBox>
    </div>
  );
}
