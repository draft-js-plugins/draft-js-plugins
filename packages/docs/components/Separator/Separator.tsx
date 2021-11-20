import React, { ReactElement, useEffect, useState } from 'react';
import styles from './Seperator.module.css';

export default function Separator(): ReactElement {
  const [separatorRootClassName, setSeparatorRootClassName] = useState(
    styles.root
  );
  const [separator1ClassName, setSeparator1ClassName] = useState(
    styles.separatorBase
  );
  const [separator2ClassName, setSeparator2ClassName] = useState(
    styles.separatorBase
  );
  const [separator3ClassName, setSeparator3ClassName] = useState(
    styles.separatorBase
  );
  const [separator4ClassName, setSeparator4ClassName] = useState(
    styles.separatorBase
  );
  const [separator5ClassName, setSeparator5ClassName] = useState(
    styles.separatorBase
  );
  const [separator6ClassName, setSeparator6ClassName] = useState(
    styles.separatorBase
  );

  useEffect(() => {
    const clear = setTimeout(() => {
      setSeparatorRootClassName(styles.rootFinal);
      setSeparator1ClassName(styles.separatorPart1);
      setSeparator2ClassName(styles.separatorPart2);
      setSeparator3ClassName(styles.separatorPart3);
      setSeparator4ClassName(styles.separatorPart4);
      setSeparator5ClassName(styles.separatorPart5);
      setSeparator6ClassName(styles.separatorPart6);
    }, 1800);

    return () => {
      clearTimeout(clear);
    };
  }, []);

  return (
    <div className={separatorRootClassName}>
      <div className={separator1ClassName} />
      <div className={separator2ClassName} />
      <div className={separator3ClassName} />
      <div className={separator4ClassName} />
      <div className={separator5ClassName} />
      <div className={separator6ClassName} />
    </div>
  );
}
