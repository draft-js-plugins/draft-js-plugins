import React, { Component } from 'react';
import Container from '../../shared/Container';
import AlternateContainer from '../../shared/AlternateContainer';
import Heading from '../../shared/Heading';
import styles from './styles.css';
import Code from '../../shared/Code';
import SimpleMentionEditor from './SimpleMentionEditor';
import CustomMentionEditor from './CustomMentionEditor';
import simpleExampleCode from '!!../../../loaders/prism-loader?language=javascript!./SimpleMentionEditor';
import customExampleCode from '!!../../../loaders/prism-loader?language=javascript!./CustomMentionEditor';
import customExampleEditorStylesCode from '!!../../../loaders/prism-loader?language=css!./CustomMentionEditor/editorStyles.css';
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
          <Heading level={ 2 }>Mention</Heading>
        </Container>
        <AlternateContainer>
          <Heading level={ 2 }>Getting Started</Heading>
          <Code code="npm install draft-js-mention-plugin --save" />
          <Code code={ gettingStarted } name="gettingStarted.js" />
        </AlternateContainer>
        <Container>
          <Heading level={ 2 }>Configuration Parameters</Heading>
          <div className={ styles.param }>
            <span className={ styles.paramName }>theme</span>
            <span>Immutable.js Map of CSS classes with the following keys.</span>
            <div className={ styles.subParams }>
              <div className={ styles.subParam }><span className={ styles.subParamName }>mention:</span> CSS class for mention text.</div>
              <div className={ styles.subParam }><span className={ styles.subParamName }>autocomplete:</span> CSS class for mention autocomplete.</div>
              <div className={ styles.subParam }><span className={ styles.subParamName }>autocompletePopover:</span> CSS class for autocomplete popover.</div>
              <div className={ styles.subParam }><span className={ styles.subParamName }>autocompleteEntry:</span> CSS class for an entry in autocomplete.</div>
              <div className={ styles.subParam }><span className={ styles.subParamName }>autocompleteEntryFocused:</span> CSS class for focused autocomplete entry.</div>
              <div className={ styles.subParam }><span className={ styles.subParamName }>autocompleteEntryText:</span> CSS class for autocomplete entry text.</div>
              <div className={ styles.subParam }><span className={ styles.subParamName }>autocompleteEntryAvatar:</span> CSS class for autocomplete entry image.</div>
            </div>
          </div>
          <div className={ styles.param }>
            <span className={ styles.paramName }>mentions</span>
            <span>Immutable.js List of mentions.</span>
          </div>
        </Container>
        <Container>
          <Heading level={ 2 }>Simple Example</Heading>
          <SimpleMentionEditor />
          <Code code={ simpleExampleCode } name="SimpleMentionEditor.js" />
        </Container>
        <Container>
          <Heading level={ 2 }>Themed Mention Example</Heading>
          <CustomMentionEditor />
          <Code code={ customExampleCode } name="CustomMentionEditor.js" />
          <Code code={ customExampleEditorStylesCode } name="editorStyles.css" />
        </Container>
        <SocialBar />
      </div>
    );
  }
}
