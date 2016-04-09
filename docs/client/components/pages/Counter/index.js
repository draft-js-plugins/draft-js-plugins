import React, { Component } from 'react';
import Container from '../../shared/Container';
import Heading from '../../shared/Heading';
import SimpleCounterEditor from './SimpleCounterEditor';
import NavBar from '../../shared/NavBar';
import Separator from '../../shared/Separator';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Separator />
        <Container>
          <Heading level={ 2 }>Counter</Heading>
        </Container>
        <Container>
          <Heading level={ 2 }>Simple Example</Heading>
          <SimpleCounterEditor />
        </Container>
      </div>
    );
  }
}
