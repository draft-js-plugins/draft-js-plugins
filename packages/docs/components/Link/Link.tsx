import React, { Component, ReactElement, ReactNode } from 'react';
import clsx from 'clsx';
import styles from './Link.module.css';
import NextLink from 'next/link';

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
