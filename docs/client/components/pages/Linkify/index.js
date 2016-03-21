import React, { Component } from 'react';
import Container from '../../shared/Container';
import AlternateContainer from '../../shared/AlternateContainer';
import Heading from '../../shared/Heading';
import styles from './styles.css';
import Code from '../../shared/Code';
import SimpleLinkifyEditor from './SimpleLinkifyEditor';
import CustomLinkifyEditor from './CustomLinkifyEditor';
import simpleExampleCode from '!!../../../loaders/prism-loader?language=javascript!./SimpleLinkifyEditor';
import customExampleCode from '!!../../../loaders/prism-loader?language=javascript!./CustomLinkifyEditor';
import customExampleStylesCode from '!!../../../loaders/prism-loader?language=css!./CustomLinkifyEditor/styles.css';
import gettingStarted from '!!../../../loaders/prism-loader?language=javascript!./gettingStarted';

export default class App extends Component {
  render() {
    return (
      <div>
        <Container>
          <Heading level={ 2 }>Linkify</Heading>
          <div className={ styles.root }>Linkify</div>
        </Container>
        <AlternateContainer>
          <Heading level={ 2 }>Getting Started</Heading>
          <Code code="npm install draft-js-linkify-plugin --save" />
          <Code code={ gettingStarted } name="gettingStarted.js" />
        </AlternateContainer>
        <Container>
          <Heading level={ 2 }>Configuration Parameters</Heading>
          <div>
            <div className={ styles.paramName }>theme</div>
            <span>map of CSS classes to style the plugin</span>
            <table className={ styles.themeTable }>
              <tbody>
                <tr>
                  <td className={ styles.themeProperty }>link</td>
                  <td>CSS class to be applied to link text</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Container>
        <Container>
          <Heading level={ 2 }>Simple Example</Heading>
          <SimpleLinkifyEditor />
          <Code code={ simpleExampleCode } name="SimpleLinkifyEditor.js" />
        </Container>
        <Container>
          <Heading level={ 2 }>Themed Linkify Example</Heading>
          <CustomLinkifyEditor />
          <Code code={ customExampleCode } name="CustomLinkifyEditor.js" />
          <Code code={ customExampleStylesCode } name="styles.css" />
        </Container>
      </div>
    );
  }
}
