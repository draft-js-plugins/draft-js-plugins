/* eslint-disable react/no-unknown-property */
import React, { Component } from 'react';
import Container from '../../shared/Container';
import AlternateContainer from '../../shared/AlternateContainer';
import Heading from '../../shared/Heading';
import styles from './styles.css';
import Code from '../../shared/Code';
import SimpleUndoEditor from './SimpleUndoEditor';
import CustomUndoEditor from './CustomUndoEditor';
import simpleExampleCode from '!!../../../loaders/prism-loader?language=javascript!./SimpleUndoEditor';
import customExampleCode from '!!../../../loaders/prism-loader?language=javascript!./CustomUndoEditor';
import customExampleButtonCSSCode from '!!../../../loaders/prism-loader?language=css!./CustomUndoEditor/buttonStyles.css';
import customExampleCSSCode from '!!../../../loaders/prism-loader?language=css!./CustomUndoEditor/styles.css';
import gettingStarted from '!!../../../loaders/prism-loader?language=javascript!./gettingStarted';
import SocialBar from '../../shared/SocialBar';

export default class App extends Component {
  render() {
    return (
      <div>
        <Container>
          <Heading level={ 2 }>Undo/Redo</Heading>
          <div className={ styles.root }>Undo/Redo</div>
        </Container>
        <AlternateContainer>
          <Heading level={ 2 }>Getting Started</Heading>
          <Code code="npm install draft-js-history-plugin --save" />
          <Code code={ gettingStarted } name="gettingStarted.js" />
        </AlternateContainer>
        <Container>
          <Heading level={ 2 }>Configuration Parameters</Heading>
          <div>
            <span className={ styles.paramName }>theme</span>
            <span>Map of CSS classes to style the plugin.</span>
            <table className={ styles.themeTable }>
              <tbody>
                <tr>
                  <td className={ styles.themeProperty }>undo</td>
                  <td>CSS class to be applied to undo button</td>
                </tr>
                <tr>
                  <td className={ styles.themeProperty }>redo</td>
                  <td>CSS class to be applied to redo button</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <span className={ styles.paramName }>undoContent</span>
            <span>Content of undo button. (Default content is ↺)</span>
          </div>
          <div>
            <span className={ styles.paramName }>redoContent</span>
            <span>Content of redo button. (Default content is ↻)</span>
          </div>
        </Container>
        <Container>
          <Heading level={ 2 }>Simple Example</Heading>
          <SimpleUndoEditor />
          <Code code={ simpleExampleCode } name="SimpleUndoEditor.js" />
        </Container>
        <Container>
          <Heading level={ 2 }>Themed Hashtag Example</Heading>
          <CustomUndoEditor />
          <Code code={ customExampleCode } name="CustomUndoEditor.js" />
          <Code code={ customExampleButtonCSSCode } name="buttonStyles.css" />
          <Code code={ customExampleCSSCode } name="styles.css" />
        </Container>
        <SocialBar />
      </div>
    );
  }
}
