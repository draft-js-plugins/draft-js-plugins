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
import customExampleStylesCode from '!!../../../loaders/prism-loader?language=css!./CustomLinkifyEditor/styles.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <AlternateContainer>
          <Heading level={ 2 }>Linkify</Heading>
          <div className={ styles.root }>Linkify</div>
        </AlternateContainer>
        <Container>
          <Heading level={ 2 }>Simple Example</Heading>
          <SimpleLinkifyEditor />
          <Code code={ simpleExampleCode } name="SimpleLinkifyEditor.js" />
        </Container>
        <Container>
          <Heading level={ 2 }>Themed Linkify Example</Heading>
          <CustomLinkifyEditor />
          <Code code={ customExampleCode } name="CustomLinkifyEditor.js" />
          <Code code={ customExampleStylesCode } name="styles.css" />
        </Container>
      </div>

    );
  }
}
