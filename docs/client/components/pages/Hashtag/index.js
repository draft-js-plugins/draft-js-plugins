import React, { Component } from 'react';
import Container from '../../shared/Container';
import AlternateContainer from '../../shared/AlternateContainer';
import Heading from '../../shared/Heading';
import styles from './styles.css';
import Code from '../../shared/Code';
import SimpleHashtagEditor from './SimpleHashtagEditor';
import CustomHashtagEditor from './CustomHashtagEditor';
import simpleExampleCode from '!!../../../loaders/prism-loader?language=javascript!./SimpleHashtagEditor';
import customExampleCode from '!!../../../loaders/prism-loader?language=javascript!./CustomHashtagEditor';
import customExampleStylesCode from '!!../../../loaders/prism-loader?language=css!./CustomHashtagEditor/styles.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <AlternateContainer>
          <Heading level={ 2 }>Hashtag</Heading>
          <div className={ styles.root }>Hashtag</div>
        </AlternateContainer>
        <Container>
          <Heading level={ 2 }>Simple Example</Heading>
          <SimpleHashtagEditor />
          <Code code={ simpleExampleCode } name="SimpleHashtagEditor.js" />
        </Container>
        <Container>
          <Heading level={ 2 }>Themed Hashtag Example</Heading>
          <CustomHashtagEditor />
          <Code code={ customExampleCode } name="CustomHashtagEditor.js" />
          <Code code={ customExampleStylesCode } name="styles.css" />
        </Container>
      </div>

    );
  }
}
