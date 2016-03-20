/* eslint-disable react/no-unknown-property */
import React, { Component } from 'react';
import Container from '../../shared/Container';
import ContainerWrapper from '../../shared/ContainerWrapper';
import AlternateContainerWrapper from '../../shared/AlternateContainerWrapper';
import Heading from '../../shared/Heading';
import styles from './styles.css';
import Code from '../../shared/Code';
import SimpleUndoEditor from './SimpleUndoEditor';
import CustomUndoEditor from './CustomUndoEditor';
import simpleExampleCode from '!!../../../loaders/prism-loader?language=javascript!./SimpleUndoEditor';
import customExampleCode from '!!../../../loaders/prism-loader?language=javascript!./CustomUndoEditor';
import customExampleCSSCode from '!!../../../loaders/prism-loader?language=css!./CustomUndoEditor/buttonStyles.css';

export default class App extends Component {

  // description what the plugin does

  // h2 "Simple Example"
  // an simple editor with hashtag plugin (can be copied from unicorn editor)
  // simple code example

  // h2 "Custom Styling"
  // an editor with hashtag plugin & custom styles (can be copied from unicorn editor)
  // custom styles code example

  // h2 "API"
  // a table explaining what is exported

  render() {
    return (
      <div>
        <AlternateContainerWrapper>
          <Container>
            <Heading level={ 2 }>Undo/Redo</Heading>
            <div className={ styles.root }>Undo/Redo</div>
          </Container>
        </AlternateContainerWrapper>
        <ContainerWrapper>
          <Container>
            <Heading level={ 2 }>Simple Example</Heading>
            <SimpleUndoEditor />
            <Code code={ simpleExampleCode } />
          </Container>
        </ContainerWrapper>
        <ContainerWrapper>
          <Container>
            <Heading level={ 2 }>Themed Hashtag Example</Heading>
            <CustomUndoEditor />
            <Code code={ customExampleCode } />
            <Code code={ customExampleCSSCode } />
          </Container>
        </ContainerWrapper>
      </div>
    );
  }
}
