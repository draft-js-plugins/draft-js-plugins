import React, { Component } from 'react';
// eslint-disable-next-line import/no-unresolved
import simpleExampleCode from '!!../../../loaders/prism-loader?language=javascript!./SimpleToolbarEditor';
// eslint-disable-next-line import/no-unresolved
import simpleExampleEditorStylesCode from '!!../../../loaders/prism-loader?language=css!./SimpleToolbarEditor/editorStyles.css';
// eslint-disable-next-line import/no-unresolved
import customExampleCode from '!!../../../loaders/prism-loader?language=javascript!./CustomToolbarEditor';
// eslint-disable-next-line import/no-unresolved
import customExampleEditorStylesCode from '!!../../../loaders/prism-loader?language=css!./CustomToolbarEditor/editorStyles.css';
// eslint-disable-next-line import/no-unresolved
import themedExampleCode from '!!../../../loaders/prism-loader?language=javascript!./ThemedToolbarEditor';
// eslint-disable-next-line import/no-unresolved
import themedExampleEditorStylesCode from '!!../../../loaders/prism-loader?language=css!./ThemedToolbarEditor/editorStyles.css';
// eslint-disable-next-line import/no-unresolved
import themedExampleButtonStylesCode from '!!../../../loaders/prism-loader?language=css!./ThemedToolbarEditor/buttonStyles.css';
// eslint-disable-next-line import/no-unresolved
import themedExampleToolbarStylesCode from '!!../../../loaders/prism-loader?language=css!./ThemedToolbarEditor/toolbarStyles.css';
// eslint-disable-next-line import/no-unresolved
import gettingStarted from '!!../../../loaders/prism-loader?language=javascript!./gettingStarted';
// eslint-disable-next-line import/no-unresolved
import webpackConfig from '!!../../../loaders/prism-loader?language=javascript!./webpackConfig';
// eslint-disable-next-line import/no-unresolved
import webpackImport from '!!../../../loaders/prism-loader?language=javascript!./webpackImport';
import Container from '../../shared/Container';
import AlternateContainer from '../../shared/AlternateContainer';
import Heading from '../../shared/Heading';
import styles from './styles.css';
import Code from '../../shared/Code';
import InlineCode from '../../shared/InlineCode';
import SimpleToolbarEditor from './SimpleToolbarEditor';
import CustomToolbarEditor from './CustomToolbarEditor';
import ThemedToolbarEditor from './ThemedToolbarEditor';
import SocialBar from '../../shared/SocialBar';
import NavBar from '../../shared/NavBar';
import Separator from '../../shared/Separator';
import ExternalLink from '../../shared/Link';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Separator />
        <Container>
          <Heading level={2}>Toolbar</Heading>
          <Heading level={3}>Supported Environment</Heading>
          <ul className={styles.list}>
            <li className={styles.listEntry}>
              Desktop: Yes
            </li>
            <li className={styles.listEntry}>
              Mobile: No
            </li>
            <li className={styles.listEntry}>
              Screen-reader: No
            </li>
          </ul>
        </Container>
        <AlternateContainer>
          <Heading level={2}>Getting Started</Heading>
          <Code code="npm install draft-js-plugins-editor" />
          <Code code="npm install draft-js-static-toolbar-plugin" />
          <Code code={gettingStarted} name="gettingStarted.js" />
          <Heading level={3}>Importing the default styles</Heading>
          <p>
            The plugin ships with a default styling available at this location in the installed package:
            &nbsp;
            <InlineCode code={'node_modules/draft-js-static-toolbar-plugin/lib/plugin.css'} />
          </p>
          <Heading level={4}>Webpack Usage</Heading>
          <ul className={styles.list}>
            <li className={styles.listEntry}>
              1. Install Webpack loaders:
              &nbsp;
              <InlineCode code={'npm i style-loader css-loader --save-dev'} />
            </li>
            <li className={styles.listEntry}>
              2. Add the below section to Webpack config (if your config already has a loaders array, simply add the below loader object to your existing list.
              <Code code={webpackConfig} className={styles.guideCodeBlock} />
            </li>
            <li className={styles.listEntry}>
              3. Add the below import line to your component to tell Webpack to inject the style to your component.
              <Code code={webpackImport} className={styles.guideCodeBlock} />
            </li>
            <li className={styles.listEntry}>
              4. Restart Webpack.
            </li>
          </ul>
          <Heading level={4}>Browserify Usage</Heading>
          <p>
            Please help, by submiting a Pull Request to the <ExternalLink href="https://github.com/draft-js-plugins/draft-js-plugins/blob/master/docs/client/components/pages/Toolbar/index.js">documentation</ExternalLink>.
          </p>
        </AlternateContainer>
        <Container>
          <Heading level={2}>Simple Static Toolbar Example</Heading>
          <SimpleToolbarEditor />
          <Code code={simpleExampleCode} name="SimpleToolbarEditor.js" />
          <Code code={simpleExampleEditorStylesCode} name="editorStyles.css" />
        </Container>
        <Container>
          <Heading level={2}>Custom Static Toolbar Example</Heading>
          <CustomToolbarEditor />
          <Code code={customExampleCode} name="CustomToolbarEditor.js" />
          <Code code={customExampleEditorStylesCode} name="editorStyles.css" />
        </Container>
        <Container>
          <Heading level={2}>Themed Static Toolbar Example</Heading>
          <ThemedToolbarEditor />
          <Code code={themedExampleCode} name="ThemedToolbarEditor.js" />
          <Code code={themedExampleEditorStylesCode} name="editorStyles.css" />
          <Code code={themedExampleButtonStylesCode} name="buttonStyles.css" />
          <Code code={themedExampleToolbarStylesCode} name="toolbarStyles.css" />
        </Container>
        <SocialBar />
      </div>
    );
  }
}
