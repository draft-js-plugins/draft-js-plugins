import React, { Component } from 'react';
import UnicornEditor from '../UnicornEditor';
import Heading from '../Heading';
import styles from './styles.css';
import logo from './logo.svg';

export default class App extends Component {

  render() {
    return (
      <div>
        <div className={ styles.header }>
          <div className={ styles.container }>
            <img src={ logo } className={ styles.logo } />
            <div className={ styles.logoText }>DraftJS Plugins</div>
            <p className={ styles.tagline }>A Plugin Architecture on top of DraftJS</p>
            <div>
              <iframe
                src="https://ghbtns.com/github-btn.html?user=nikgraf&repo=draft-js-plugin-editor&type=star&count=true&size=large"
                frameBorder="0"
                scrolling="0"
                className={ styles.githubButton }
              ></iframe>
            </div>
          </div>
        </div>
        <div className={ styles.separatorWrapper }>
          <div className={ styles.separatorPart1 }></div>
          <div className={ styles.separatorPart2 }></div>
          <div className={ styles.separatorPart3 }></div>
          <div className={ styles.separatorPart4 }></div>
          <div className={ styles.separatorPart5 }></div>
          <div className={ styles.separatorPart6 }></div>
        </div>
        <div className={ styles.alternateContainerWrapper }>
          <div className={ styles.container }>
            <Heading level={ 2 }>Available Plugins</Heading>
            <ul className={ styles.plugins }>
              <li className={ styles.plugin }>Mention</li>
              <li className={ styles.plugin }>Linkify</li>
              <li className={ styles.plugin }>Sticker</li>
              <li className={ styles.plugin }>Emoji</li>
              <li className={ styles.plugin }>Hashtag</li>
              <li className={ styles.plugin }>Undo/Redo</li>
              <li className={ styles.plugin }>Giphy</li>
            </ul>
          </div>
        </div>
        <div className={ styles.containerWrapper }>
          <div className={ styles.container }>
            <Heading level={ 2 }>Example: Unicorn Editor</Heading>
            <UnicornEditor />
            <Heading level={ 3 }>Plugins used in this Editor</Heading>
            <ul>
              <li>Custom stickers</li>
              <li>Hashtag support</li>
              <li>Automatically turns links into anchor tags</li>
              <li>Mentions</li>
            </ul>
            <Heading level={ 3 }>Why a UnicornEditor?</Heading>
            <p>
              Because Unicorns are cooler than cats 😜
            </p>
          </div>
        </div>
        <footer className={ styles.footer }>
            Built with&nbsp;
            <span className={ styles.heart }>
              &#x2764;
            </span>
            &nbsp;on Planet Earth :)
        </footer>
      </div>
    );
  }
}
