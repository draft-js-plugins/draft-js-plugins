// eslint-disable-next-line import/no-unresolved
// eslint-disable-next-line import/no-duplicates
import simpleExampleCode from '!!raw-loader!../../../components/Examples/resizeable/SimpleResizeableEditor';
// eslint-disable-next-line import/no-unresolved
import simpleExampleColorBlockCode from '!!raw-loader!../../../components/Examples/resizeable/SimpleResizeableEditor/colorBlockPlugin';
// eslint-disable-next-line import/no-unresolved
import simpleExampleEditorStylesCode from '!!raw-loader!../../../components/Examples/resizeable/SimpleResizeableEditor/editorStyles.module.css';
import React, { Component } from 'react';
import AlternateContainer from '../../../components/AlternateContainer/AlternateContainer';
import Code from '../../../components/Code/Code';
import Container from '../../../components/Container/Container';
// eslint-disable-next-line import/no-duplicates
import SimpleResizeableEditor from '../../../components/Examples/resizeable/SimpleResizeableEditor';
import Heading from '../../../components/Heading/Heading';
import ExternalLink from '../../../components/Link/Link';
import PluginPageFrame from '../../../components/PluginPageFrame/PluginPageFrame';
import styles from './styles.module.css';

export default class App extends Component {
  render() {
    return (
      <PluginPageFrame
        filePath={'packages/docs/pages/plugin/resizeable/index.js'}
      >
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
          <Heading level={3}>Notes</Heading>
          <p>
            This plugin needs to read and write the size information to the
            resized HTML element. Therefore the resized component needs to use{' '}
            <ExternalLink href="https://reactjs.org/docs/forwarding-refs.html">
              forwarding ref
            </ExternalLink>
            . As reported in issue{' '}
            <ExternalLink href="https://github.com/draft-js-plugins/draft-js-plugins/issues/2272#issuecomment-909642353">
              #2272
            </ExternalLink>{' '}
            in some cases it might be usefult to wrap the ref with{' '}
            <ExternalLink href="https://reactjs.org/docs/hooks-reference.html#useimperativehandle">
              useImperativeHandle
            </ExternalLink>
            .
          </p>
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
