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
              <Link to="/plugin/hashtag" className={styles.link}>
                Hashtag
              </Link>
            </li>
            <li className={styles.plugin}>
              <Link to="/plugin/inline-toolbar" className={styles.link}>
                Inline Toolbar
              </Link>
            </li>
            <li className={styles.plugin}>
              <Link to="/plugin/side-toolbar" className={styles.link}>
                Side Toolbar
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
        <div style={{ textAlign: 'center', fontSize: 13, color: '#ae4a28' }}>The documentation currently represents the master branch.<br /> We will cut a new release with these features 2.0.0-beta6 on 30th October 2016.
        </div>
      </div>
    );
  }
}
