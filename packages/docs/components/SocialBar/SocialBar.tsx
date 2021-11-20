import React, { ReactElement } from 'react';
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
} from 'react-share';
import EditOnGithub from '../EditOnGithub';
import GithubButton from '../GithubButton/GithubButton';
import styles from './SocialBar.module.css';

interface SocialBarProps {
  filePath?: string;
}

export default function SocialBar({ filePath }: SocialBarProps): ReactElement {
  return (
    <>
      <div className={styles.root}>
        {filePath && (
          <div className={styles.editWrapper}>
            <EditOnGithub filePath={filePath} />
          </div>
        )}
      </div>
      <div className={styles.root}>
        <div className={styles.wrapper}>
          <GithubButton
            user="draft-js-plugins"
            repo="draft-js-plugins"
            size="large"
          />
        </div>

        <div className={styles.wrapper}>
          <TwitterShareButton
            url="https://www.draft-js-plugins.com/"
            title="DraftJS Plugins - High quality plugins with great UX"
          >
            <TwitterIcon size="32" />
          </TwitterShareButton>
        </div>
        <div className={styles.wrapper}>
          <FacebookShareButton url="https://www.draft-js-plugins.com/">
            <FacebookIcon size="32" />
          </FacebookShareButton>
        </div>
      </div>
    </>
  );
}
