import React, { ReactElement } from 'react';
import TwitterButton from '../TwitterButton/TwitterButton';
import GithubButton from '../GithubButton/GithubButton';
import styles from './SocialBar.module.css';

export default function SocialBar(): ReactElement {
  return (
    <div className={styles.root}>
      <div className={styles.githubButtonWrapper}>
        <GithubButton
          user="draft-js-plugins"
          repo="draft-js-plugins"
          size="large"
        />
      </div>
      <div className={styles.twitterButtonWrapper}>
        <TwitterButton url="https://www.draft-js-plugins.com/" size="large" />
      </div>
    </div>
  );
}
