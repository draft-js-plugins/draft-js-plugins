import React, { Component } from 'react';
import Container from '../../shared/Container';
import AlternateContainer from '../../shared/AlternateContainer';
import Heading from '../../shared/Heading';
import styles from './styles.css';
import Code from '../../shared/Code';
import SimpleMentionEditor from './SimpleMentionEditor';
import CustomMentionEditor from './CustomMentionEditor';
import simpleExampleCode from '!!../../../loaders/prism-loader?language=javascript!./SimpleMentionEditor';
import simpleExampleMentionsCode from '!!../../../loaders/prism-loader?language=javascript!./SimpleMentionEditor/mentions.js';
import simpleExampleEditorStylesCode from '!!../../../loaders/prism-loader?language=css!./SimpleMentionEditor/editorStyles.css';
import customExampleCode from '!!../../../loaders/prism-loader?language=javascript!./CustomMentionEditor';
import customExampleMentionsCode from '!!../../../loaders/prism-loader?language=javascript!./CustomMentionEditor/mentions.js';
import customExampleEditorStylesCode from '!!../../../loaders/prism-loader?language=css!./CustomMentionEditor/editorStyles.css';
import remoteExampleCode from '!!../../../loaders/prism-loader?language=javascript!./RemoteMentionEditor';
import remoteExampleMentionsCode from '!!../../../loaders/prism-loader?language=javascript!./RemoteMentionEditor/mentions.js';
import remoteExampleEditorStylesCode from '!!../../../loaders/prism-loader?language=css!./RemoteMentionEditor/editorStyles.css';
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
          <Heading level={ 2 }>Mention</Heading>
          <p>
            Mentions for everyone!
          </p>
          <Heading level={ 3 }>Escape Behaviour</Heading>
          <p>
            While the suggestion popover is open, the user can close it by pressing ESC.
            This will be stored for as long as the the selection stays inside
            the word that triggered the search. After the selection left this word once the escape behaviour will be reset.
            The suggestions will appear again once the user selects the word that
            that triggered the selection.
          </p>
        </Container>
        <AlternateContainer>
          <Heading level={ 2 }>Getting Started</Heading>
          <Code code="npm install draft-js-plugins-editor@1.0.0-beta1 --save" />
          <Code code="npm install draft-js-mention-plugin@1.0.0-beta1 --save" />
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
          <div className={ styles.param }>
            <span className={ styles.paramName }>entityMutability</span>
            <span>Can be one of: "IMMUTABLE", "SEGMENTED" or "MUTABLE". Read in detail about it
            <ExternalLink
              href="https://facebook.github.io/draft-js/docs/advanced-topics-entities.html#mutability"
            >
              &nbsp;here
            </ExternalLink>
            </span>
          </div>
          <Heading level={ 3 }>Additional Exports</Heading>
          <div>
            In addition to the plugin the module exports `defaultSuggestionsFilter`. As first argument it takes the search term as a String. The second argument is the Immutable list of mentions. The function returns the filter list based on substring matches.
            <Code code="import { defaultSuggestionsFilter } from 'draft-js-mention-plugin';" />
          </div>
        </Container>
        <Container>
          <Heading level={ 2 }>Simple Example</Heading>
          <SimpleMentionEditor />
          <Code code={ simpleExampleCode } name="SimpleMentionEditor.js" />
          <Code code={ simpleExampleMentionsCode } name="mentions.js" />
          <Code code={ simpleExampleEditorStylesCode } name="editorStyles.css" />
        </Container>
        <Container>
          <Heading level={ 2 }>Themed Mention Example</Heading>
          <CustomMentionEditor />
          <Code code={ customExampleCode } name="CustomMentionEditor.js" />
          <Code code={ customExampleMentionsCode } name="mentions.js" />
          <Code code={ customExampleEditorStylesCode } name="editorStyles.css" />
        </Container>
        <Container>
          <Heading level={ 2 }>Remote Data Mention Example</Heading>
          <Code code={ remoteExampleCode } name="CustomMentionEditor.js" />
          <Code code={ remoteExampleMentionsCode } name="mentions.js" />
          <Code code={ remoteExampleEditorStylesCode } name="editorStyles.css" />
        </Container>
        <SocialBar />
      </div>
    );
  }
}
