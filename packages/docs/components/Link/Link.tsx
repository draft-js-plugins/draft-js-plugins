import React, { ReactElement, ReactNode } from 'react';
import NextLink from 'next/link';
import clsx from 'clsx';
import styles from './Link.module.css';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: ReactNode;
}

export default function Link({
  className,
  children,
  href,
  ...props
}: LinkProps): ReactElement {
  const combinedClassName = clsx(styles.root, className);
  return (
    <NextLink href={href}>
      <a {...props} className={combinedClassName}>
        {children}
      </a>
    </NextLink>
  );
}
