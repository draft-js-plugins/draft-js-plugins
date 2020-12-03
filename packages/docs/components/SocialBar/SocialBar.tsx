import React, { ReactElement } from 'react';
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
} from 'react-share';
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
        <TwitterShareButton
          url="https://www.draft-js-plugins.com/"
          title="DraftJS Plugins - High quality plugins with great UX"
        >
          <TwitterIcon size="32" />
        </TwitterShareButton>
      </div>
      <div className={styles.facebookButtonWrapper}>
        <FacebookShareButton url="https://www.draft-js-plugins.com/">
          <FacebookIcon size="32" />
        </FacebookShareButton>
      </div>
    </div>
  );
}
