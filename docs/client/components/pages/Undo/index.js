/* eslint-disable react/no-unknown-property */
import React, { Component } from 'react';
import Container from '../../shared/Container';
import AlternateContainer from '../../shared/AlternateContainer';
import Heading from '../../shared/Heading';
import styles from './styles.css';
import Code from '../../shared/Code';
import SimpleUndoEditor from './SimpleUndoEditor';
import CustomUndoEditor from './CustomUndoEditor';
import simpleExampleCode from '!!../../../loaders/prism-loader?language=javascript!./SimpleUndoEditor';
import customExampleCode from '!!../../../loaders/prism-loader?language=javascript!./CustomUndoEditor';
import customExampleButtonCSSCode from '!!../../../loaders/prism-loader?language=css!./CustomUndoEditor/buttonStyles.css';
import customExampleCSSCode from '!!../../../loaders/prism-loader?language=css!./CustomUndoEditor/styles.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <AlternateContainer>
          <Heading level={ 2 }>Undo/Redo</Heading>
          <div className={ styles.root }>Undo/Redo</div>
        </AlternateContainer>
        <Container>
          <Heading level={ 2 }>Simple Example</Heading>
          <SimpleUndoEditor />
          <Code code={ simpleExampleCode } name="SimpleUndoEditor.js" />
        </Container>
        <Container>
          <Heading level={ 2 }>Themed Hashtag Example</Heading>
          <CustomUndoEditor />
          <Code code={ customExampleCode } name="CustomUndoEditor.js" />
          <Code code={ customExampleButtonCSSCode } name="buttonStyles.css" />
          <Code code={ customExampleCSSCode } name="styles.css" />
        </Container>
      </div>
    );
  }
}
