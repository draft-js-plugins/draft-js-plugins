import React, { Component } from 'react';

import simpleExampleCode from '!!raw-loader!./SimpleAlignmentEditor';
import simpleExampleEditorStylesCode from '!!raw-loader!./SimpleAlignmentEditor/editorStyles.module.css';
import simpleExampleColorBlockCode from '!!raw-loader!./SimpleAlignmentEditor/colorBlockPlugin';
import themedExampleCode from '!!raw-loader!./ThemedAlignmentEditor';
import themedExampleEditorStylesCode from '!!raw-loader!./ThemedAlignmentEditor/editorStyles.module.css';
import themedExampleAlignmentToolStylesCode from '!!raw-loader!./ThemedAlignmentEditor/alignmentToolStyles.module.css';
import themedExampleButtonStylesCode from '!!raw-loader!./ThemedAlignmentEditor/buttonStyles.module.css';
import webpackConfig from '!!raw-loader!./webpackConfig';
import webpackImport from '!!raw-loader!./webpackImport';

import Container from '../../../components/Container/Container';
import AlternateContainer from '../../../components/AlternateContainer/AlternateContainer';
import Heading from '../../../components/Heading/Heading';
import styles from './styles.module.css';
import Code from '../../../components/Code/Code';
import SimpleAlignmentEditor from './SimpleAlignmentEditor';
import ThemedAlignmentEditor from './ThemedAlignmentEditor';
import ExternalLink from '../../../components/Link/Link';
import InlineCode from '../../../components/InlineCode/InlineCode';
import SocialBar from '../../../components/SocialBar/SocialBar';
import Menu from '../../../components/Menu/Menu';
import Separator from '../../../components/Separator/Separator';
import PluginPageFrame from '../../../components/PluginPageFrame/PluginPageFrame';

export default class App extends Component {
  render() {
    return (
      <PluginPageFrame>
        <Container>
          <Heading level={2}>Alignment</Heading>
          <Heading level={3}>Prerequisite</Heading>
          <p>
            This plugin exposes a decorator for blocks. You can use it in
            combination with any kind of plugin that manages a Draft.js block
            e.g. image or video. Keep in mind the plugin must accept a decorator
            for the block. The `Simple Alignment Example` further down contains
            an example plugin rendering a colored div. In addition this plugin
            only works in combination with the draft-js-focus-plugin.
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
              <Code code={webpackImport} className={styles.guideCodeBlock} />
            </li>
            <li className={styles.listEntry}>4. Restart Webpack.</li>
          </ul>
          <Heading level={4}>Browserify Usage</Heading>
          <p>
            Please help, by submiting a Pull Request to the{' '}
            <ExternalLink href="https://github.com/draft-js-plugins/draft-js-plugins/blob/master/docs/client/components/pages/Alignment/index.js">
              documentation
            </ExternalLink>
            .
          </p>
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
