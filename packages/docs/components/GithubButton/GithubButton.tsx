import React, { ReactElement, useEffect, useRef } from 'react';
import styles from './GithubButton.module.css';

interface GithubButtonProps {
  size: string;
  user: string;
  repo: string;
}

export default function GithubButton({
  size,
  user,
  repo,
}: GithubButtonProps): ReactElement {
  const githubWrapperRef = useRef(null);

  useEffect(() => {
    // Only required in componentDidMount as it breaks server-side-rendering
    const animate = require('animateplus'); // eslint-disable-line global-require

    animate({
      el: githubWrapperRef.current,
      opacity: [0, 1],
      duration: 1600,
      easing: 'easeOutQuad',
      delay: 2500,
    });
  }, []);

  return (
    <div className={styles.githubWrapper} ref={githubWrapperRef}>
      <a
        className="github-button"
        href={`https://github.com/${user}/${repo}`}
        data-size={size}
        data-show-count="true"
        aria-label="Star draft-js-plugins/draft-js-plugins on GitHub"
      >
        Github
      </a>
      <script src="//buttons.github.io/buttons.js" />
    </div>
  );
}
