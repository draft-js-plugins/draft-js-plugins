import React, { ReactElement } from 'react';
import clsx from 'clsx';
import 'prismjs/themes/prism.css';
import styles from './InlineCode.module.css';

interface InlineCodeProps {
  code: string;
  className?: string;
}

export default function InlineCode({
  code,
  className,
}: InlineCodeProps): ReactElement {
  const combinedRootClassName = clsx(styles.root, className);
  return (
    <span className={combinedRootClassName}>
      <code
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: code }}
      />
    </span>
  );
}
