import React, { Component } from 'react';
import Container from '../../shared/Container';
import AlternateContainer from '../../shared/AlternateContainer';
import Heading from '../../shared/Heading';
import styles from './styles.css';
import Code from '../../shared/Code';
import SimpleHashtagEditor from './SimpleHashtagEditor';
import CustomHashtagEditor from './CustomHashtagEditor';
import simpleExampleCode from '!!../../../loaders/prism-loader?language=javascript!./SimpleHashtagEditor';
import simpleExampleEditorStylesCode from '!!../../../loaders/prism-loader?language=css!./SimpleHashtagEditor/editorStyles.css';
import customExampleCode from '!!../../../loaders/prism-loader?language=javascript!./CustomHashtagEditor';
import customExampleEditorStylesCode from '!!../../../loaders/prism-loader?language=css!./CustomHashtagEditor/editorStyles.css';
import customExampleHashtagStylesCode from '!!../../../loaders/prism-loader?language=css!./CustomHashtagEditor/hashtagStyles.css';
import gettingStarted from '!!../../../loaders/prism-loader?language=javascript!./gettingStarted';
import SocialBar from '../../shared/SocialBar';
import NavBar from '../../shared/NavBar';
import Separator from '../../shared/Separator';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Separator />
        <Container>
          <Heading level={ 2 }>Hashtag</Heading>
        </Container>
        <AlternateContainer>
          <Heading level={ 2 }>Getting Started</Heading>
          <Code code="npm install draft-js-hashtag-plugin --save" />
          <Code code={ gettingStarted } name="gettingStarted.js" />
        </AlternateContainer>
        <Container>
          <Heading level={ 2 }>Configuration Parameters</Heading>
          <div className={ styles.param }>
            <span className={ styles.paramName }>theme</span>
            <span>Immutable.js Map of CSS classes with the following keys.</span>
            <div className={ styles.subParams }>
              <div className={ styles.subParam }><span className={ styles.subParamName }>hashtag:</span> CSS class to be applied to hashtag text</div>
            </div>
          </div>
        </Container>
        <Container>
          <Heading level={ 2 }>Simple Example</Heading>
          <SimpleHashtagEditor />
          <Code code={ simpleExampleCode } name="SimpleHashtagEditor.js" />
          <Code code={ simpleExampleEditorStylesCode } name="editorStyles.css" />
        </Container>
        <Container>
          <Heading level={ 2 }>Themed Hashtag Example</Heading>
          <CustomHashtagEditor />
          <Code code={ customExampleCode } name="CustomHashtagEditor.js" />
          <Code code={ customExampleHashtagStylesCode } name="hashtagStyles.css" />
          <Code code={ customExampleEditorStylesCode } name="editorStyles.css" />
        </Container>
        <SocialBar />
      </div>

    );
  }
}
