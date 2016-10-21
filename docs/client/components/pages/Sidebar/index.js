import React, { Component } from 'react';

// eslint-disable-next-line import/no-unresolved
import basicActionExampleCode from '!!../../../loaders/prism-loader?language=javascript!./BasicActionEditor';
// eslint-disable-next-line import/no-unresolved
import basicActionExampleEditorStylesCode from '!!../../../loaders/prism-loader?language=css!./BasicActionEditor/editorStyles.css';

// eslint-disable-next-line import/no-unresolved
import textActionExampleCode from '!!../../../loaders/prism-loader?language=javascript!./TextActionEditor';
// eslint-disable-next-line import/no-unresolved
import textActionExampleEditorStylesCode from '!!../../../loaders/prism-loader?language=css!./TextActionEditor/editorStyles.css';

// eslint-disable-next-line import/no-unresolved
import fileActionExampleCode from '!!../../../loaders/prism-loader?language=javascript!./FileActionEditor';
// eslint-disable-next-line import/no-unresolved
import fileActionExampleEditorStylesCode from '!!../../../loaders/prism-loader?language=css!./FileActionEditor/editorStyles.css';

import Container from '../../shared/Container';
import AlternateContainer from '../../shared/AlternateContainer';
import Heading from '../../shared/Heading';
import Code from '../../shared/Code';
import SocialBar from '../../shared/SocialBar';
import NavBar from '../../shared/NavBar';
import Separator from '../../shared/Separator';

import BasicActionEditor from './BasicActionEditor';
import TextActionEditor from './TextActionEditor';
import FileActionEditor from './FileActionEditor';

export default class App extends Component {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <div>
        <NavBar />
        <Separator />
        <Container>
          <Heading level={2}>Sidebar</Heading>
        </Container>
        <AlternateContainer>
          <p>
            This plugin gives you a customizable sidebar on the left of the editor. <br />
            You can plug in 3 types of action buttons:
          </p>
          <Heading level={3}>Basic Action</Heading>
          <p>
            On click, component will call this.props.add() and insert an atomic block with whatever Entity you return.
          </p>
          <Heading level={3}>Text Action</Heading>
          <p>
            On click, component will insert an input block, waiting for the user input.<br />
            On enter key pressed, component will call this.props.add(UserInputValue) and insert an atomic block with whatever Entity you return.
          </p>
          <Heading level={3}>File Action</Heading>
          <p>
            On click, component will open a file Dialog.<br />
            On file chosen, component will call this.props.add(file) and insert an atomic block with whatever Entity you return.
          </p>
        </AlternateContainer>
        <Container>
          <Heading level={2}>Basic Action Example</Heading>
          <BasicActionEditor />
          <Code code={basicActionExampleCode} name="BasicActionEditor.js" />
          <Code code={basicActionExampleEditorStylesCode} name="editorStyles.css" />
        </Container>
        <Container>
          <Heading level={2}>Text Action Example</Heading>
          <p>
            The plugin use a default block renderer for EMBED entity types.<br />
            It expects a html attribute in the data of the entity containing the code for the embed.<br />
            the html code is provided by the <a href="https://github.com/itteco/iframely">iframely api</a> (hosted version + dev trial key)
          </p>
          <TextActionEditor />
          <Code code={textActionExampleCode} name="TextActionEditor.js" />
          <Code code={textActionExampleEditorStylesCode} name="editorStyles.css" />
        </Container>
        <Container>
          <Heading level={2}>File Action Example</Heading>
          <FileActionEditor />
          <Code code={fileActionExampleCode} name="FileActionEditor.js" />
          <Code code={fileActionExampleEditorStylesCode} name="editorStyles.css" />
        </Container>
        <SocialBar />
      </div>

    );
  }
}
