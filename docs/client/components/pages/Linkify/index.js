/* eslint-disable react/no-unknown-property */
import React, { Component } from 'react';
import styles from './styles.css';
import Container from '../../shared/Container';
import ContainerWrapper from '../../shared/ContainerWrapper';

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
      <ContainerWrapper>
        <Container>
          <div className={ styles.root }>Linkify</div>
        </Container>
      </ContainerWrapper>
    );
  }
}
