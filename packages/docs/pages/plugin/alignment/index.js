// eslint-disable-next-line import/no-unresolved
// eslint-disable-next-line import/no-duplicates
import simpleExampleCode from '!!raw-loader!../../../components/Examples/alignment/SimpleAlignmentEditor';
// eslint-disable-next-line import/no-unresolved
import simpleExampleColorBlockCode from '!!raw-loader!../../../components/Examples/alignment/SimpleAlignmentEditor/colorBlockPlugin';
// eslint-disable-next-line import/no-unresolved
import simpleExampleEditorStylesCode from '!!raw-loader!../../../components/Examples/alignment/SimpleAlignmentEditor/editorStyles.module.css';
// eslint-disable-next-line import/no-unresolved
// eslint-disable-next-line import/no-duplicates
import themedExampleCode from '!!raw-loader!../../../components/Examples/alignment/ThemedAlignmentEditor';
// eslint-disable-next-line import/no-unresolved
import themedExampleAlignmentToolStylesCode from '!!raw-loader!../../../components/Examples/alignment/ThemedAlignmentEditor/alignmentToolStyles.module.css';
// eslint-disable-next-line import/no-unresolved
import themedExampleButtonStylesCode from '!!raw-loader!../../../components/Examples/alignment/ThemedAlignmentEditor/buttonStyles.module.css';
// eslint-disable-next-line import/no-unresolved
import themedExampleEditorStylesCode from '!!raw-loader!../../../components/Examples/alignment/ThemedAlignmentEditor/editorStyles.module.css';
// eslint-disable-next-line import/no-unresolved
import webpackConfig from '!!raw-loader!../../../components/Examples/alignment/webpackConfig';
import React, { Component } from 'react';
import AlternateContainer from '../../../components/AlternateContainer/AlternateContainer';
import Code from '../../../components/Code/Code';
import Container from '../../../components/Container/Container';
// eslint-disable-next-line import/no-duplicates
import SimpleAlignmentEditor from '../../../components/Examples/alignment/SimpleAlignmentEditor';
// eslint-disable-next-line import/no-duplicates
import ThemedAlignmentEditor from '../../../components/Examples/alignment/ThemedAlignmentEditor';
import Heading from '../../../components/Heading/Heading';
import InlineCode from '../../../components/InlineCode/InlineCode';
import PluginPageFrame from '../../../components/PluginPageFrame/PluginPageFrame';
import styles from './styles.module.css';

export default class App extends Component {
  render() {
    return (
      <PluginPageFrame
        filePath={'packages/docs/pages/plugin/alignment/index.js'}
      >
        <Container>
          <Heading level={2}>Alignment</Heading>
          <Heading level={3}>Prerequisite</Heading>
          <p>
            This plugin exposes a decorator for blocks. You can use it in
            combination with any kind of plugin that manages a Draft.js block
            e.g. image or video. Keep in mind the plugin must accept a decorator
            for the block. The `Simple Alignment Example` further down contains
            an example plugin rendering a colored div. In addition this plugin
            only works in combination with the @draft-js-plugins/focus.
          </p>
          <Heading level={3}>Usage</Heading>
          <p>
            Select (via mouse or keyboard) a block supporting alignment
            modifications. A tooltip will pop up and you can update the
            alignment.
          </p>
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
          <Code code="npm install @draft-js-plugins/focus" />
          <Code code="npm install @draft-js-plugins/alignment" />
          <Heading level={3}>Importing the default styles</Heading>
          <p>
            The plugin ships with a default styling available at this location
            in the installed package: &nbsp;
            <InlineCode
              code={'node_modules/@draft-js-plugins/alignment/lib/plugin.css'}
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
                code={"import '@draft-js-plugins/alignment/lib/plugin.css';"}
                className={styles.guideCodeBlock}
              />
            </li>
            <li className={styles.listEntry}>4. Restart Webpack.</li>
          </ul>
        </AlternateContainer>
        <Container>
          <Heading level={2}>Configuration Parameters</Heading>
        </Container>
        <Container>
          <Heading level={2}>Simple Alignment Example</Heading>
          <SimpleAlignmentEditor />
          <Code code={simpleExampleCode} name="SimpleAlignmentEditor.js" />
          <Code code={simpleExampleColorBlockCode} name="colorBlockPlugin.js" />
          <Code code={simpleExampleEditorStylesCode} name="editorStyles.css" />
        </Container>
        <Container>
          <Heading level={2}>Themed Alignment Example</Heading>
          <ThemedAlignmentEditor />
          <Code code={themedExampleCode} name="SimpleAlignmentEditor.js" />
          <Code code={themedExampleEditorStylesCode} name="editorStyles.css" />
          <Code
            code={themedExampleAlignmentToolStylesCode}
            name="alignmentToolStyles.css"
          />
          <Code code={themedExampleButtonStylesCode} name="buttonStyles.css" />
        </Container>
      </PluginPageFrame>
    );
  }
}
