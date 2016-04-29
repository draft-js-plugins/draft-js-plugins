import React, {Component} from 'react';
import Container from '../../shared/Container';
import Heading from '../../shared/Heading';
import SimpleWysiwygEditor from './SimpleWysiwygEditor';
import NavBar from '../../shared/NavBar';
import Separator from '../../shared/Separator';

export default class App extends Component {
  state = {};

  render() {
    const { state, style } = this.state;
    return (
      <div>
        <NavBar />
        <Separator />
        <Container>
          <Heading level={ 2 }>Drag & Drop</Heading>
        </Container>
        <Container>
          <Heading level={ 2 }>Simple Example</Heading>
          <SimpleWysiwygEditor />
        </Container>
      </div>
    );
  }
}
