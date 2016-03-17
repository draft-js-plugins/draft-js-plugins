import React, { Component } from 'react';
import Container from '../../shared/Container';
import ContainerWrapper from '../../shared/ContainerWrapper';
import AlternateContainerWrapper from '../../shared/AlternateContainerWrapper';
import Heading from '../../shared/Heading';
import SimpleHashtagEditor from './SimpleHashtagEditor';
import styles from './styles.css';

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
            <Heading level={ 2 }>Hashtag</Heading>
            <div className={ styles.root }>Hashtag</div>
          </Container>
        </AlternateContainerWrapper>
        <ContainerWrapper>
          <Container>
            <Heading level={ 2 }>Example</Heading>
            <SimpleHashtagEditor />
          </Container>
        </ContainerWrapper>
      </div>

    );
  }
}
