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
import customExampleStylesCode from '!!../../../loaders/prism-loader?language=css!./CustomMentionEditor/styles.css';
import gettingStarted from '!!../../../loaders/prism-loader?language=javascript!./gettingStarted';

export default class App extends Component {
  render() {
    return (
      <div>
        <Container>
          <Heading level={ 2 }>Mention</Heading>
          <div className={ styles.root }>Mention</div>
        </Container>
        <AlternateContainer>
          <Heading level={ 2 }>Getting Started</Heading>
          <Code code="npm install draft-js-mention-plugin --save" />
          <Code code={ gettingStarted } name="gettingStarted.js" />
        </AlternateContainer>
        <Container>
          <Heading level={ 2 }>Simple Example</Heading>
          <SimpleMentionEditor />
          <Code code={ simpleExampleCode } name="SimpleMentionEditor.js" />
        </Container>
        <Container>
          <Heading level={ 2 }>Themed Mention Example</Heading>
          <CustomMentionEditor />
          <Code code={ customExampleCode } name="CustomMentionEditor.js" />
          <Code code={ customExampleStylesCode } name="styles.css" />
        </Container>
        <Container>
          <Heading level={ 2 }>Configuration Parameters</Heading>
          <div>
            <span className={ styles.paramName }>theme</span>
            <span>Map of CSS classes to style the plugin.</span>
          <table className={ styles.themeTable }>
              <tr>
                <td className={ styles.themeProperty }>mention</td>
                <td>CSS class to be applied to </td>
              </tr>
              <tr>
                <td className={ styles.themeProperty }>autocomplete</td>
                <td>CSS class to be applied to </td>
              </tr>
              <tr>
                <td className={ styles.themeProperty }>autocompletePopover</td>
                <td>CSS class to be applied to </td>
              </tr>
              <tr>
                <td className={ styles.themeProperty }>autocompleteEntry</td>
                <td>CSS class to be applied to </td>
              </tr>
              <tr>
                <td className={ styles.themeProperty }>autocompleteEntryFocused</td>
                <td>CSS class to be applied to </td>
              </tr>
              <tr>
                <td className={ styles.themeProperty }>autocompleteEntryText</td>
                <td>CSS class to be applied to </td>
              </tr>
              <tr>
                <td className={ styles.themeProperty }>autocompleteEntryAvatar</td>
                <td>CSS class to be applied to </td>
              </tr>
            </table>
          </div>
          <div>
            <span className={ styles.paramName }>mentions</span>
            <span>Immutable list of mentions.</span>
          </div>
        </Container>
      </div>

    );
  }
}
