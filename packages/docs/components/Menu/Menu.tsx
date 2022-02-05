import React, { ReactElement } from 'react';
import Link from 'next/link';
import styles from './Menu.module.css';

const links: [string, string][][] = [
  [
    ['/plugin/mention', 'Mention'],
    ['/plugin/emoji', 'Emoji'],
    ['/plugin/image', 'Image'],
    ['/plugin/video', 'Video'],
  ],
  [
    ['/plugin/sticker', 'Sticker'],
    ['/plugin/hashtag', 'Hashtag'],
    ['/plugin/inline-toolbar', 'Inline Toolbar'],
    ['/plugin/side-toolbar', 'Side Toolbar'],
  ],
  [
    ['/plugin/static-toolbar', 'Static Toolbar'],
    ['/plugin/undo', 'Undo'],
    ['/plugin/counter', 'Counter'],
    ['/plugin/anchor', 'Anchor'],
    ['/plugin/linkify', 'Linkify'],
  ],
  [
    ['/plugin/focus', 'Focus'],
    ['/plugin/alignment', 'Alignment'],
    ['/plugin/text-alignment', 'Text Alignment'],
    ['/plugin/resizeable', 'Resizeable'],
    ['/plugin/drag-n-drop', "Drag'n'Drop"],
    ['/plugin/divider', 'Divider'],
  ],
];

export default function Menu(): ReactElement {
  return (
    <div className={styles.pluginsWrapper}>
      <div className={styles.wideContainer}>
        {links.map((link, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <ul className={styles.plugins} key={index}>
            {link.map(([path, name]) => (
              <li className={styles.plugin} key={path}>
                <Link href={path}>
                  <a className={styles.link}>{name}</a>
                </Link>
              </li>
            ))}
          </ul>
        ))}
      </div>
      <div
        style={{
          textAlign: 'center',
          marginTop: '3rem',
          fontSize: 13,
          color: '#aaa',
        }}
      >
        The documentation currently represents the 4.0.0 release.
        <br />
        For troubleshooting please checkout the
        {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
        <a
          href="https://github.com/draft-js-plugins/draft-js-plugins/blob/master/FAQ.md"
          className={styles.link}
        >
          FAQ
        </a>
      </div>
    </div>
  );
}
