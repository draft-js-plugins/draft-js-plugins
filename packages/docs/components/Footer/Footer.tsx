import React, { ReactElement } from 'react';
import styles from './Footer.module.css';
import Link from '../Link/Link';

export default function Footer(): ReactElement {
  return (
    <footer className={styles.footer}>
      Built with&nbsp;
      <span className={styles.heart}>&#x2764;</span>
      &nbsp;on Planet Earth
      <div className={styles.emojiAttribution}>
        Emoji art provided free by&nbsp;
        <Link href="http://emojione.com/">Emoji One</Link>
      </div>
    </footer>
  );
}
