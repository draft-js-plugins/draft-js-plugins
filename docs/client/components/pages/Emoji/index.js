import React, { Component } from 'react';
import Container from '../../shared/Container';
import AlternateContainer from '../../shared/AlternateContainer';
import Heading from '../../shared/Heading';
import styles from './styles.css';
import Code from '../../shared/Code';
import SimpleEmojiEditor from './SimpleEmojiEditor';
import CustomEmojiEditor from './CustomEmojiEditor';
import simpleExampleCode from '!!../../../loaders/prism-loader?language=javascript!./SimpleEmojiEditor';
import customExampleCode from '!!../../../loaders/prism-loader?language=javascript!./CustomEmojiEditor';
import customExampleStylesCode from '!!../../../loaders/prism-loader?language=css!./CustomEmojiEditor/styles.css';
import gettingStarted from '!!../../../loaders/prism-loader?language=javascript!./gettingStarted';
import SocialBar from '../../shared/SocialBar';
import NavBar from '../../shared/NavBar';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Container>
          <Heading level={ 2 }>Emoji</Heading>
          <div className={ styles.center }>The Emoji Plugin is not yet ready & will be released tomorrow.</div>
        </Container>
        <SocialBar />
      </div>

    );
  }
}

/**
<AlternateContainer>
  <Heading level={ 2 }>Getting Started</Heading>
  <Code code="npm install draft-js-emoji-plugin --save" />
  <Code code={ gettingStarted } name="gettingStarted.js" />
</AlternateContainer>
<Container>
  <Heading level={ 2 }>Configuration Parameters</Heading>
  <div>
    <div className={ styles.paramName }>theme</div>
    <span>map of CSS classes to style the plugin</span>
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
  <Heading level={ 2 }>Simple Example</Heading>
  <SimpleEmojiEditor />
  <Code code={ simpleExampleCode } name="SimpleEmojiEditor.js" />
</Container>
<Container>
  <Heading level={ 2 }>Themed Emoji Example</Heading>
  <CustomEmojiEditor />
  <Code code={ customExampleCode } name="CustomEmojiEditor.js" />
  <Code code={ customExampleStylesCode } name="styles.css" />
</Container>
*/
