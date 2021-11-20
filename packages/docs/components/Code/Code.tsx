/* eslint-disable react/no-danger */

import React, { ReactElement } from 'react';
import clsx from 'clsx';
import 'prismjs/themes/prism.css';
import styles from './Code.module.css';

interface CodeProps {
  code: string;
  className?: string;
  name?: string;
}

export default function Code({
  code,
  className,
  name,
}: CodeProps): ReactElement {
  const combinedRootClassName = clsx(styles.root, className);
  const nameClassname = name ? styles.name : styles.hiddenName;
  const codeClassname = clsx(
    styles.code,
    `language-${name && name.endsWith('css') ? 'css' : 'js'}`
  );
  return (
    <div className={combinedRootClassName}>
      <div className={nameClassname}>{name}</div>
      <pre className={codeClassname}>
        <code>{code}</code>
      </pre>
    </div>
  );
}
