import React, { Component, ReactElement } from 'react';

interface GithubButtonProps {
  text?: string;
  user: string;
  repo: string;
  size: string;
}

export default class GithubButton extends Component<GithubButtonProps> {
  githubButton?: HTMLAnchorElement | null;

  componentDidMount(): void {
    const githubScript = document.createElement('script');
    githubScript.src = '//buttons.github.io/buttons.js';
    githubScript.id = 'github-bjs';
    this.githubButton!.parentNode!.appendChild(githubScript);
  }

  shouldComponentUpdate = (): boolean => false;

  componentWillUnmount(): void {
    const elem = document.getElementById('github-bjs');
    if (elem) {
      elem.parentNode!.removeChild(elem);
    }
  }

  render(): ReactElement {
    const text = this.props.text ? this.props.text : 'Github';
    const { user, repo, size } = this.props;

    // Note: all of the attributes including the className 'github-button' are required
    return (
      <a
        ref={element => {
          this.githubButton = element;
        }}
        className="github-button"
        href={`https://github.com/${user}/${repo}`}
        data-size={size}
        data-show-count="true"
        aria-label="Star draft-js-plugins/draft-js-plugins on GitHub"
      >
        {text}
      </a>
    );
  }
}
