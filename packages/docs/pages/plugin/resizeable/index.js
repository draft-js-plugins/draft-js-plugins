import React, { Component } from 'react';

// eslint-disable-next-line import/no-unresolved
// eslint-disable-next-line import/no-duplicates
import simpleExampleCode from '!!raw-loader!../../../components/Examples/resizeable/SimpleResizeableEditor';
// eslint-disable-next-line import/no-unresolved
import simpleExampleEditorStylesCode from '!!raw-loader!../../../components/Examples/resizeable/SimpleResizeableEditor/editorStyles.module.css';
// eslint-disable-next-line import/no-unresolved
import simpleExampleColorBlockCode from '!!raw-loader!../../../components/Examples/resizeable/SimpleResizeableEditor/colorBlockPlugin';

import Container from '../../../components/Container/Container';
import AlternateContainer from '../../../components/AlternateContainer/AlternateContainer';
import Heading from '../../../components/Heading/Heading';
import styles from './styles.module.css';
import Code from '../../../components/Code/Code';
// eslint-disable-next-line import/no-duplicates
import SimpleResizeableEditor from '../../../components/Examples/resizeable/SimpleResizeableEditor';
import PluginPageFrame from '../../../components/PluginPageFrame/PluginPageFrame';

export default class App extends Component {
  render() {
    return (
      <PluginPageFrame>
        <Container>
          <Heading level={2}>Resizeable</Heading>
          <Heading level={3}>Prerequisite</Heading>
          <p>
            This plugin exposes a decorator for blocks. You can use it in
            combination with any kind of plugin that manages a Draft.js block
            e.g. image or video. Keep in mind the plugin must accept a decorator
            for the block. The `Simple Resizeable Example` further down contains
            an example plugin rendering a colored div. In addition this plugin
            only works in combination with the @draft-js-plugins/focus.
          </p>
          <Heading level={3}>Usage</Heading>
          <p>
            Hover with the mouse on the right side of the block and drag it to
            resize. At which edge resize is possible is configurable.
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
          <Code code="npm install @draft-js-plugins/resizeable" />
        </AlternateContainer>
        <Container>
          <Heading level={2}>Configuration Parameters</Heading>
        </Container>
        <Container>
          <Heading level={2}>Simple Resizeable Example</Heading>
          <SimpleResizeableEditor />
          <Code code={simpleExampleCode} name="SimpleResizeableEditor.js" />
          <Code code={simpleExampleColorBlockCode} name="colorBlockPlugin.js" />
          <Code code={simpleExampleEditorStylesCode} name="editorStyles.css" />
        </Container>
      </PluginPageFrame>
    );
  }
}
