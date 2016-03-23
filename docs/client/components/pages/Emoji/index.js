import React, { Component } from 'react';
import styles from './styles.css';

import Container from '../../shared/Container';
import Heading from '../../shared/Heading';
import SocialBar from '../../shared/SocialBar';
import NavBar from '../../shared/NavBar';
import Separator from '../../shared/Separator';
import Code from '../../shared/Code';
import SimpleEmojiEditor from './SimpleEmojiEditor';
import CustomEmojiEditor from './CustomEmojiEditor';
import AlternateContainer from '../../shared/AlternateContainer';

import gettingStarted from '!!../../../loaders/prism-loader?language=javascript!./gettingStarted';

import simpleExampleCode from '!!../../../loaders/prism-loader?language=javascript!./SimpleEmojiEditor';
import simpleEditorStylesCode from '!!../../../loaders/prism-loader?language=css!./SimpleEmojiEditor/editorStyles.css';

import customExampleCode from '!!../../../loaders/prism-loader?language=javascript!./CustomEmojiEditor';
import customEmojiStylesCode from '!!../../../loaders/prism-loader?language=css!./CustomEmojiEditor/emojiStyles.css';
import customEditorStylesCode from '!!../../../loaders/prism-loader?language=css!./CustomEmojiEditor/editorStyles.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Separator />
        <Container>
          <Heading level={ 2 }>Emoji</Heading>
          <p>
            This implementation allows users to add Emojis that will be consistently displayed
            across all platforms. This implementation is independent from the host system and therefore
            even emojis which are not supported on the current system can be displayed.
          </p>
          <Heading level={ 3 }>Implementation</Heading>
          <p>
            In this implementation, the original Emoji unicode is wrapped in a span. The character is hidden with CSS & the background image shows the icon. This way you have a consistent set of emojis shown between all platforms while copy & pasting still works. Try copy & pasting the text below into a native editor to see this in action.
          </p>
        </Container>
        <AlternateContainer>
          <Heading level={ 2 }>Getting Started</Heading>
          <Code code="npm install draft-js-emoji-plugin --save" />
          <Code code={ gettingStarted } name="gettingStarted.js" />
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
          <Heading level={ 2 }>Simple Example</Heading>
          <SimpleEmojiEditor />
          <Code code={ simpleExampleCode } name="SimpleEmojiEditor.js" />
          <Code code={ simpleEditorStylesCode } name="editorStyles.js" />
        </Container>
        <Container>
          <Heading level={ 2 }>Simple Example</Heading>
          <CustomEmojiEditor />
          <Code code={ customExampleCode } name="CustomEmojiEditor.js" />
          <Code code={ customEmojiStylesCode } name="emojiStyles.js" />
          <Code code={ customEditorStylesCode } name="editorStyles.js" />
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
