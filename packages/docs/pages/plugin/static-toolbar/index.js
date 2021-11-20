// eslint-disable-next-line import/no-unresolved
// eslint-disable-next-line import/no-duplicates
import customExampleCode from '!!raw-loader!../../../components/Examples/static-toolbar/CustomToolbarEditor';
// eslint-disable-next-line import/no-unresolved
import customExampleEditorStylesCode from '!!raw-loader!../../../components/Examples/static-toolbar/CustomToolbarEditor/editorStyles.module.css';
// eslint-disable-next-line import/no-unresolved
import gettingStarted from '!!raw-loader!../../../components/Examples/static-toolbar/gettingStarted';
// eslint-disable-next-line import/no-unresolved
// eslint-disable-next-line import/no-duplicates
import simpleExampleCode from '!!raw-loader!../../../components/Examples/static-toolbar/SimpleToolbarEditor';
// eslint-disable-next-line import/no-unresolved
import simpleExampleEditorStylesCode from '!!raw-loader!../../../components/Examples/static-toolbar/SimpleToolbarEditor/editorStyles.module.css';
// eslint-disable-next-line import/no-unresolved
// eslint-disable-next-line import/no-duplicates
import themedExampleCode from '!!raw-loader!../../../components/Examples/static-toolbar/ThemedToolbarEditor';
// eslint-disable-next-line import/no-unresolved
import themedExampleButtonStylesCode from '!!raw-loader!../../../components/Examples/static-toolbar/ThemedToolbarEditor/buttonStyles.module.css';
// eslint-disable-next-line import/no-unresolved
import themedExampleEditorStylesCode from '!!raw-loader!../../../components/Examples/static-toolbar/ThemedToolbarEditor/editorStyles.module.css';
// eslint-disable-next-line import/no-unresolved
import themedExampleToolbarStylesCode from '!!raw-loader!../../../components/Examples/static-toolbar/ThemedToolbarEditor/toolbarStyles.module.css';
// eslint-disable-next-line import/no-unresolved
import webpackConfig from '!!raw-loader!../../../components/Examples/static-toolbar/webpackConfig';
import React, { Component } from 'react';
import AlternateContainer from '../../../components/AlternateContainer/AlternateContainer';
import Code from '../../../components/Code/Code';
import Container from '../../../components/Container/Container';
// eslint-disable-next-line import/no-duplicates
import CustomToolbarEditor from '../../../components/Examples/static-toolbar/CustomToolbarEditor';
// eslint-disable-next-line import/no-duplicates
import SimpleToolbarEditor from '../../../components/Examples/static-toolbar/SimpleToolbarEditor';
// eslint-disable-next-line import/no-duplicates
import ThemedToolbarEditor from '../../../components/Examples/static-toolbar/ThemedToolbarEditor';
import Heading from '../../../components/Heading/Heading';
import InlineCode from '../../../components/InlineCode/InlineCode';
import PluginPageFrame from '../../../components/PluginPageFrame/PluginPageFrame';
import styles from './styles.module.css';

export default class App extends Component {
  render() {
    return (
      <PluginPageFrame
        filePath={'packages/docs/pages/plugin/static-toolbar/index.js'}
      >
        <Container>
          <Heading level={2}>Toolbar</Heading>
          <Heading level={3}>Supported Environment</Heading>
          <ul className={styles.list}>
            <li className={styles.listEntry}>Desktop: Yes</li>
            <li className={styles.listEntry}>Mobile: No</li>
            <li className={styles.listEntry}>Screen-reader: No</li>
          </ul>
        </Container>
        <AlternateContainer>
          <Heading level={2}>Getting Started</Heading>
          <Code code="npm install @draft-js-plugins/editor" />
          <Code code="npm install @draft-js-plugins/static-toolbar" />
          <Code code={gettingStarted} name="gettingStarted.js" />
          <Heading level={3}>Importing the default styles</Heading>
          <p>
            The plugin ships with a default styling available at this location
            in the installed package: &nbsp;
            <InlineCode
              code={
                'node_modules/@draft-js-plugins/tatic-toolbar/lib/plugin.css'
              }
            />
          </p>
          <Heading level={4}>Webpack Usage</Heading>
          <ul className={styles.list}>
            <li className={styles.listEntry}>
              1. Install Webpack loaders: &nbsp;
              <InlineCode code={'npm i style-loader css-loader --save-dev'} />
            </li>
            <li className={styles.listEntry}>
              2. Add the below section to Webpack config (if your config already
              has a loaders array, simply add the below loader object to your
              existing list.
              <Code code={webpackConfig} className={styles.guideCodeBlock} />
            </li>
            <li className={styles.listEntry}>
              3. Add the below import line to your component to tell Webpack to
              inject the style to your component.
              <Code
                code={
                  "import '@draft-js-plugins/static-toolbar/lib/plugin.css';"
                }
                className={styles.guideCodeBlock}
              />
            </li>
            <li className={styles.listEntry}>4. Restart Webpack.</li>
          </ul>
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
          <Code
            code={themedExampleToolbarStylesCode}
            name="toolbarStyles.css"
          />
        </Container>
      </PluginPageFrame>
    );
  }
}
