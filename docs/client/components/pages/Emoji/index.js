import React, { Component } from 'react';
import styles from './styles.css';

import Container from '../../shared/Container';
import Heading from '../../shared/Heading';
import SocialBar from '../../shared/SocialBar';
import NavBar from '../../shared/NavBar';
import Separator from '../../shared/Separator';
import Code from '../../shared/Code';
import SimpleEmojiEditor from './SimpleEmojiEditor';
import AlternateContainer from '../../shared/AlternateContainer';

import gettingStarted from '!!../../../loaders/prism-loader?language=javascript!./gettingStarted';

import simpleExampleCode from '!!../../../loaders/prism-loader?language=javascript!./SimpleEmojiEditor';
import simpleEditorStylesCode from '!!../../../loaders/prism-loader?language=css!./SimpleEmojiEditor/editorStyles.css';
import webpackConfig from '!!../../../loaders/prism-loader?language=javascript!./webpackConfig';
import webpackImport from '!!../../../loaders/prism-loader?language=javascript!./webpackImport';
import ExternalLink from '../../shared/Link';
import InlineCode from '../../shared/InlineCode';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Separator />
        <Container>
          <Heading level={ 2 }>Emoji</Heading>
          <p>
            Consistent Emoji display across all platforms, independent of the host system.
          </p>
          <Heading level={ 3 }>Attribution to EmojiOne</Heading>
          <p>
            The beautiful Emoji art used in this plugin is provided by the <ExternalLink href="http://emojione.com/">Emoji One</ExternalLink> project.
            Personal or non-commercial use of the emojis do not require attribution. For the rights to use our emojis still for free in commercial projects proper attribution in form of a link is required. More here: <ExternalLink href="http://emojione.com/licensing">http://emojione.com/licensing</ExternalLink>.
          </p>
          <Heading level={ 3 }>Implementation</Heading>
          <p>
            Emoji unicode characters are wrapped in a span, hidden, and displayed instead through
            a background image. This creates consistency across all platforms while maintaining
            natural copy/pasting functionality.
          </p>
          <Heading level={ 3 }>Usage</Heading>
          <p>
            To use simply type <code>:</code> which will show an autocomplete with matching emojis.
          </p>
        </Container>
        <AlternateContainer>
          <Heading level={ 2 }>Getting Started</Heading>
          <Code code="npm install draft-js-plugins-editor@1.0.0-beta1 --save" />
          <Code code="npm install draft-js-emoji-plugin@1.0.0-beta1 --save" />
          <Code code={ gettingStarted } name="gettingStarted.js" />
          <Heading level={ 3 }>Importing the default styles</Heading>
          <p>
            The plugin ships with a default styling available at this location in the installed package:
            &nbsp;
            <InlineCode code={ 'node_modules/draft-js-hashtag-plugin/lib/plugin.css' } />
          </p>
          <Heading level={ 4 }>Webpack Usage</Heading>
          <ul className={ styles.list }>
            <li className={ styles.listEntry }>
              1. Install Webpack loaders:
              &nbsp;
              <InlineCode code={ 'npm i style-loader css-loader --save-dev' } />
            </li>
            <li className={ styles.listEntry }>
              2. Add the below section to Webpack config (if your config already has a loaders array, simply add the below loader object to your existing list.
              <Code code={ webpackConfig } className={ styles.guideCodeBlock } />
            </li>
            <li className={ styles.listEntry }>
              3. Add the below import line to your component to tell Webpack to inject the style to your component.
              <Code code={ webpackImport } className={ styles.guideCodeBlock } />
            </li>
            <li className={ styles.listEntry }>
              4. Restart Webpack.
            </li>
          </ul>
          <Heading level={ 4 }>Browserify Usage</Heading>
          <p>
            Please help, by submiting a Pull Request to the <ExternalLink href="https://github.com/draft-js-plugins/draft-js-plugins/blob/master/docs/client/components/pages/Hashtag/index.js">documention</ExternalLink>.
          </p>
        </AlternateContainer>
        <Container>
          <Heading level={ 2 }>Configuration Parameters</Heading>
          <div>
            <div className={ styles.paramName }>theme</div>
            <span>Immutable.js Map of CSS classes with the following keys.</span>
            <table className={ styles.themeTable }>
              <tbody>
                <tr>
                  <td className={ styles.themeProperty }>Emoji</td>
                  <td>CSS class to be applied to emoji</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Container>
        <Container>
          <Heading level={ 2 }>Simple Emoji Example</Heading>
          <SimpleEmojiEditor />
          <Code code={ simpleExampleCode } name="SimpleEmojiEditor.js" />
          <Code code={ simpleEditorStylesCode } name="editorStyles.js" />
        </Container>
        <SocialBar />
      </div>
    );
  }
}
