import React, { Component } from 'react';
import Container from '../../shared/Container';
import AlternateContainer from '../../shared/AlternateContainer';
import Heading from '../../shared/Heading';
import styles from './styles.css';
import Code from '../../shared/Code';
import SimpleStickerEditor from './SimpleStickerEditor';
import CustomStickerEditor from './CustomStickerEditor';
import simpleExampleCode from '!!../../../loaders/prism-loader?language=javascript!./SimpleStickerEditor';
import customExampleCode from '!!../../../loaders/prism-loader?language=javascript!./CustomStickerEditor';
import customExampleStylesCode from '!!../../../loaders/prism-loader?language=css!./CustomStickerEditor/styles.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <AlternateContainer>
          <Heading level={ 2 }>Sticker</Heading>
          <div className={ styles.root }>Sticker</div>
        </AlternateContainer>
        <Container>
          <Heading level={ 2 }>Simple Example</Heading>
          <SimpleStickerEditor />
          <Code code={ simpleExampleCode } name="SimpleStickerEditor.js" />
        </Container>
        <Container>
          <Heading level={ 2 }>Themed Sticker Example</Heading>
          <CustomStickerEditor />
          <Code code={ customExampleCode } name="CustomStickerEditor.js" />
          <Code code={ customExampleStylesCode } name="styles.css" />
        </Container>
      </div>

    );
  }
}
