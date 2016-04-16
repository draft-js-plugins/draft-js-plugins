import React, { Component } from 'react';
import Container from '../../shared/Container';
import AlternateContainer from '../../shared/AlternateContainer';
import Heading from '../../shared/Heading';
import styles from './styles.css';
import Code from '../../shared/Code';
import SimpleLinkifyEditor from './SimpleLinkifyEditor';
import CustomLinkifyEditor from './CustomLinkifyEditor';
import simpleExampleCode from '!!../../../loaders/prism-loader?language=javascript!./SimpleLinkifyEditor';
import simpleExampleEditorStylesCode from '!!../../../loaders/prism-loader?language=css!./SimpleLinkifyEditor/editorStyles.css';
import customExampleCode from '!!../../../loaders/prism-loader?language=javascript!./CustomLinkifyEditor';
import customExampleEditorStylesCode from '!!../../../loaders/prism-loader?language=css!./CustomLinkifyEditor/editorStyles.css';
import gettingStarted from '!!../../../loaders/prism-loader?language=javascript!./gettingStarted';
import SocialBar from '../../shared/SocialBar';
import NavBar from '../../shared/NavBar';
import Separator from '../../shared/Separator';
import webpackConfig from '!!../../../loaders/prism-loader?language=javascript!./webpackConfig';
import webpackImport from '!!../../../loaders/prism-loader?language=javascript!./webpackImport';
import ExternalLink from '../../shared/Link';
import InlineCode from '../../shared/InlineCode';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Separator />
        <Container>
          <Heading level={ 2 }>Linkify</Heading>
        </Container>
        <AlternateContainer>
          <Heading level={ 2 }>Getting Started</Heading>
          <Code code="npm install draft-js-plugins-editor@1.0.0-beta1 --save" />
          <Code code="npm install draft-js-linkify-plugin@1.0.0-beta1 --save" />
          <Code code={ gettingStarted } name="gettingStarted.js" />
          <Heading level={ 3 }>Importing the default styles</Heading>
          <p>
            The plugin ships with a default styling available at this location in the installed package:
            &nbsp;
            <InlineCode code={ 'node_modules/draft-js-hashtag-plugin/lib/plugin.css' } />
          </p>
          <Heading level={ 4 }>Webpack Usage</Heading>
          <ul className={ styles.list }>
            <li className={ styles.listEntry }>
              1. Install Webpack loaders:
              &nbsp;
              <InlineCode code={ 'npm i style-loader css-loader --save-dev' } />
            </li>
            <li className={ styles.listEntry }>
              2. Add the below section to Webpack config (if your config already has a loaders array, simply add the below loader object to your existing list.
              <Code code={ webpackConfig } className={ styles.guideCodeBlock } />
            </li>
            <li className={ styles.listEntry }>
              3. Add the below import line to your component to tell Webpack to inject the style to your component.
              <Code code={ webpackImport } className={ styles.guideCodeBlock } />
            </li>
            <li className={ styles.listEntry }>
              4. Restart Webpack.
            </li>
          </ul>
          <Heading level={ 4 }>Browserify Usage</Heading>
          <p>
            Please help, by submiting a Pull Request to the <ExternalLink href="https://github.com/draft-js-plugins/draft-js-plugins/blob/master/docs/client/components/pages/Hashtag/index.js">documention</ExternalLink>.
          </p>
        </AlternateContainer>
        <Container>
          <Heading level={ 2 }>Configuration Parameters</Heading>
          <div className={ styles.param }>
            <span className={ styles.paramName }>theme</span>
            <span>Immutable.js Map of CSS classes with the following keys.</span>
            <div className={ styles.subParams }>
              <div className={ styles.subParam }><span className={ styles.subParamName }>link:</span> CSS class to be applied to link text</div>
            </div>
          </div>
          <div className={ styles.param }>
            <span className={ styles.paramName }>target</span>
            <span>String value for the target attribute. (Default value is _self)</span>
          </div>
      </Container>
        <Container>
          <Heading level={ 2 }>Simple Example</Heading>
          <SimpleLinkifyEditor />
          <Code code={ simpleExampleCode } name="SimpleLinkifyEditor.js" />
          <Code code={ simpleExampleEditorStylesCode } name="editorStyles.css" />
        </Container>
        <Container>
          <Heading level={ 2 }>Themed Linkify Example</Heading>
          <CustomLinkifyEditor />
          <Code code={ customExampleCode } name="CustomLinkifyEditor.js" />
          <Code code={ customExampleEditorStylesCode } name="editorStyles.css" />
        </Container>
        <SocialBar />
      </div>
    );
  }
}
