import React, { Component } from 'react';
import Container from '../../shared/Container';
import AlternateContainer from '../../shared/AlternateContainer';
import Heading from '../../shared/Heading';
import styles from './styles.css';
import Code from '../../shared/Code';
import SimpleLinkifyEditor from './SimpleLinkifyEditor';
import CustomLinkifyEditor from './CustomLinkifyEditor';
import simpleExampleCode from '!!../../../loaders/prism-loader?language=javascript!./SimpleLinkifyEditor';
import customExampleCode from '!!../../../loaders/prism-loader?language=javascript!./CustomLinkifyEditor';
import customExampleEditorStylesCode from '!!../../../loaders/prism-loader?language=css!./CustomLinkifyEditor/editorStyles.css';
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
          <Heading level={ 2 }>Linkify</Heading>
        </Container>
        <AlternateContainer>
          <Heading level={ 2 }>Getting Started</Heading>
          <Code code="npm install draft-js-linkify-plugin --save" />
          <Code code={ gettingStarted } name="gettingStarted.js" />
        </AlternateContainer>
        <Container>
          <Heading level={ 2 }>Configuration Parameters</Heading>
          <div className={ styles.param }>
            <span className={ styles.paramName }>theme</span>
            <span>Immutable.js Map of CSS classes with the following keys.</span>
            <div className={ styles.subParams }>
              <div className={ styles.subParam }><span className={ styles.subParamName }>link:</span> CSS class to be applied to link text</div>
            </div>
          </div>
      </Container>
        <Container>
          <Heading level={ 2 }>Simple Example</Heading>
          <SimpleLinkifyEditor />
          <Code code={ simpleExampleCode } name="SimpleLinkifyEditor.js" />
        </Container>
        <Container>
          <Heading level={ 2 }>Themed Linkify Example</Heading>
          <CustomLinkifyEditor />
          <Code code={ customExampleCode } name="CustomLinkifyEditor.js" />
          <Code code={ customExampleEditorStylesCode } name="editorStyles.css" />
        </Container>
        <SocialBar />
      </div>
    );
  }
}
