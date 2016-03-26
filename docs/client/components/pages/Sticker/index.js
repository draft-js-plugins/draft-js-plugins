import React, { Component } from 'react';
import Container from '../../shared/Container';
import AlternateContainer from '../../shared/AlternateContainer';
import Heading from '../../shared/Heading';
import styles from './styles.css';
import Code from '../../shared/Code';
import SimpleStickerEditor from './SimpleStickerEditor';
import CustomStickerEditor from './CustomStickerEditor';
import simpleExampleCode from '!!../../../loaders/prism-loader?language=javascript!./SimpleStickerEditor';
import simpleExampleEditorStylesCode from '!!../../../loaders/prism-loader?language=css!./SimpleStickerEditor/editorStyles.css';
import customExampleCode from '!!../../../loaders/prism-loader?language=javascript!./CustomStickerEditor';
import customExampleEditorStylesCode from '!!../../../loaders/prism-loader?language=css!./CustomStickerEditor/editorStyles.css';
import gettingStarted from '!!../../../loaders/prism-loader?language=javascript!./gettingStarted';
import SocialBar from '../../shared/SocialBar';
import NavBar from '../../shared/NavBar';
import Separator from '../../shared/Separator';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Separator />
        <Container>
          <Heading level={ 2 }>Sticker</Heading>
        </Container>
        <AlternateContainer>
          <Heading level={ 2 }>Getting Started</Heading>
          <Code code="npm install draft-js-sticker-plugin --save" />
          <Code code={ gettingStarted } name="gettingStarted.js" />
        </AlternateContainer>
        <Container>
          <Heading level={ 2 }>Configuration Parameters</Heading>
          <div className={ styles.param }>
            <span className={ styles.paramName }>theme</span>
            <span>Immutable.js Map of CSS classes with the following keys.</span>
            <div className={ styles.subParams }>
              <div className={ styles.subParam }><span className={ styles.subParamName }>sticker:</span> CSS class for sticker.</div>
              <div className={ styles.subParam }><span className={ styles.subParamName }>stickerImage:</span> CSS class for </div>
              <div className={ styles.subParam }><span className={ styles.subParamName }>stickerRemoveButton:</span> CSS class for sticker remove button.</div>
              <div className={ styles.subParam }><span className={ styles.subParamName }>select:</span> CSS class for sticker select.</div>
              <div className={ styles.subParam }><span className={ styles.subParamName }>selectPopover:</span> CSS class for sticker select popup.</div>
              <div className={ styles.subParam }><span className={ styles.subParamName }>selectClosedPopover:</span> CSS class for sticker select close button.</div>
              <div className={ styles.subParam }><span className={ styles.subParamName }>selectBottomGradient:</span> CSS class for sticker select bottom gradient.</div>
              <div className={ styles.subParam }><span className={ styles.subParamName }>selectButton:</span> CSS class for button to open sticker select.</div>
              <div className={ styles.subParam }><span className={ styles.subParamName }>selectPressedButton:</span> CSS class for pressed state of button to open sticker select.</div>
              <div className={ styles.subParam }><span className={ styles.subParamName }>selectStickerList:</span> CSS class for sticker select list.</div>
              <div className={ styles.subParam }><span className={ styles.subParamName }>selectSticker:</span> CSS class for sticker select.</div>
              <div className={ styles.subParam }><span className={ styles.subParamName }>selectStickerImage:</span> CSS class for sticker select image.</div>
            </div>
          </div>
          <div className={ styles.param }>
            <span className={ styles.paramName }>stickers</span>
            <span>Immutable.js List of stickers.</span>
          </div>
          <div className={ styles.paramBig }>
            <span className={ styles.paramName }>selectButtonContent</span>
            <span>Content of button which opens select sticker drop-down. (Default content is ☺)</span>
          </div>
          <div className={ styles.paramBig }>
            <span className={ styles.paramName }>attachRemoveButton</span>
            <span>Flag to attach or detach a remove button to stickers. (Default value is true)</span>
          </div>
        </Container>
        <Container>
          <Heading level={ 2 }>Simple Example</Heading>
          <SimpleStickerEditor />
          <Code code={ simpleExampleCode } name="SimpleStickerEditor.js" />
          <Code code={ simpleExampleEditorStylesCode } name="editorStyles.css" />
        </Container>
        <Container>
          <Heading level={ 2 }>Themed Sticker Example</Heading>
          <CustomStickerEditor />
          <Code code={ customExampleCode } name="CustomStickerEditor.js" />
          <Code code={ customExampleEditorStylesCode } name="editorStyles.css" />
        </Container>
        <SocialBar />
      </div>
    );
  }
}
