import React, { Component } from 'react';
import Container from '../../shared/Container';
import Heading from '../../shared/Heading';
import SimpleWysiwygEditor from './SimpleWysiwygEditor';
import NavBar from '../../shared/NavBar';
import Separator from '../../shared/Separator';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Separator />
        <Container>
          <Heading level={2}>Wysiwyg Example</Heading>
          <p>
            Drop images, drop .js/.json/.txt files, select text or hover blocks for toolbars, use keyDown and keyUp to focus blocks (still a bit quirky).
          </p>
        </Container>
        <Container>
          <Heading level={2}>Simple Example</Heading>
          <SimpleWysiwygEditor />
        </Container>
      </div>
    );
  }
}
