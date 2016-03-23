import React, { Component } from 'react';
import Container from '../../shared/Container';
import Heading from '../../shared/Heading';

// import styles from './styles.css';
import SocialBar from '../../shared/SocialBar';
import NavBar from '../../shared/NavBar';
import Separator from '../../shared/Separator';
import Code from '../../shared/Code';
import SimpleEmojiEditor from './SimpleEmojiEditor';
import simpleExampleCode from '!!../../../loaders/prism-loader?language=javascript!./SimpleEmojiEditor';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Separator />
        <Container>
          <Heading level={ 2 }>Emoji</Heading>
          <p>
            In this implementation the original Emoji unicode is wrapped in a span. The character is hidden with via the styles & while the background image shows the icon. This way you have a consistent set shown beteen all platforms while copy & pasting still works fine. We recommend to copy & paste the text below into an native editor to see the effect.
          </p>
        </Container>
        <Container>
          <Heading level={ 2 }>Simple Example</Heading>
          <SimpleEmojiEditor />
          <Code code={ simpleExampleCode } name="SimpleEmojiEditor.js" />
        </Container>
        <SocialBar />
      </div>

    );
  }
}

/**
import Code from '../../shared/Code';
import AlternateContainer from '../../shared/AlternateContainer';
import SimpleEmojiEditor from './SimpleEmojiEditor';
import CustomEmojiEditor from './CustomEmojiEditor';
import simpleExampleCode from '!!../../../loaders/prism-loader?language=javascript!./SimpleEmojiEditor';
import customExampleCode from '!!../../../loaders/prism-loader?language=javascript!./CustomEmojiEditor';
import customExampleStylesCode from '!!../../../loaders/prism-loader?language=css!./CustomEmojiEditor/styles.css';
import gettingStarted from '!!../../../loaders/prism-loader?language=javascript!./gettingStarted';

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
