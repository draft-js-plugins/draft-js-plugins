import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './styles.css';

export default class NavBar extends Component {

  render() {
    return (
      <div className={styles.pluginsWrapper}>
        <div className={styles.wideContainer}>
          <ul className={styles.plugins}>
            <li className={styles.plugin}>
              <Link to="/plugin/mention" className={styles.link}>
                Mention
              </Link>
            </li>
            <li className={styles.plugin}>
              <Link to="/plugin/linkify" className={styles.link}>
                Linkify
              </Link>
            </li>
            <li className={styles.plugin}>
              <Link to="/plugin/sticker" className={styles.link}>
                Sticker
              </Link>
            </li>
            <li className={styles.plugin}>
              <Link to="/plugin/emoji" className={styles.link}>
                Emoji
              </Link>
            </li>
            <li className={styles.plugin}>
              <Link to="/plugin/image" className={styles.link}>
                Image
              </Link>
            </li>
          </ul>
          <ul className={styles.plugins}>
            <li className={styles.plugin}>
              <Link to="/plugin/inline-toolbar" className={styles.link}>
                Inline Toolbar
              </Link>
            </li>
            <li className={styles.plugin}>
              <Link to="/plugin/hashtag" className={styles.link}>
                Hashtag
              </Link>
            </li>
            <li className={styles.plugin}>
              <Link to="/plugin/undo" className={styles.link}>
                Undo
              </Link>
            </li>
            <li className={styles.plugin}>
              <Link to="/plugin/counter" className={styles.link}>
                Counter
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
