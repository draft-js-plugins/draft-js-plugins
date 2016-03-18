import React, { Component } from 'react';

export default class GithubStarButton extends Component {

  componentDidMount() {
    const githubButton = this.refs.githubButton;
    const githubScript = document.createElement('script');
    githubScript.src = '//buttons.github.io/buttons.js';
    githubScript.id = 'github-bjs';
    githubButton.parentNode.appendChild(githubScript);
  }

  shouldComponentUpdate = () => false;

  componentWillUnmount() {
    const elem = document.getElementById('github-bjs');
    if (elem !== undefined) {
      elem.parentNode.removeChild(elem);
    }
  }

  render() {
    const size = this.props.size ? this.props.size : 'default'; // 'mega' is the other option
    const text = this.props.text ? this.props.text : 'Star';

    // Note: all of the attributes including the className 'github-button' are requried
    return (
      <a
        ref="githubButton"
        className="github-button"
        href="https://github.com/nikgraf/draft-js-plugins"
        data-style={ size }
        data-count-href="/nikgraf/draft-js-plugins/stargazers"
        data-count-api="/repos/nikgraf/draft-js-plugins#stargazers_count"
        data-count-aria-label="# stargazers on GitHub"
        aria-label="Star nikgraf/draft-js-plugins on GitHub"
      >
        { text }
      </a>
    );
  }
}
