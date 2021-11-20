// eslint-disable-next-line import/no-unresolved
// eslint-disable-next-line import/no-duplicates
import addVideoEditorExampleCode from '!!raw-loader!../../../components/Examples/video/CustomAddVideoVideoEditor';
// eslint-disable-next-line import/no-unresolved
// eslint-disable-next-line import/no-duplicates
import customExampleCode from '!!raw-loader!../../../components/Examples/video/CustomVideoEditor';
// eslint-disable-next-line import/no-unresolved
import gettingStarted from '!!raw-loader!../../../components/Examples/video/gettingStarted';
// eslint-disable-next-line import/no-unresolved
// eslint-disable-next-line import/no-duplicates
import simpleExampleCode from '!!raw-loader!../../../components/Examples/video/SimpleVideoEditor';
import React, { Component } from 'react';
import AlternateContainer from '../../../components/AlternateContainer/AlternateContainer';
import Code from '../../../components/Code/Code';
import Container from '../../../components/Container/Container';
// eslint-disable-next-line import/no-duplicates
import CustomAddVideoVideoEditor from '../../../components/Examples/video/CustomAddVideoVideoEditor';
// eslint-disable-next-line import/no-duplicates
import CustomVideoEditor from '../../../components/Examples/video/CustomVideoEditor';
// eslint-disable-next-line import/no-duplicates
import SimpleVideoEditor from '../../../components/Examples/video/SimpleVideoEditor';
import Heading from '../../../components/Heading/Heading';
import PluginPageFrame from '../../../components/PluginPageFrame/PluginPageFrame';
import styles from './styles.module.css';

export default class App extends Component {
  render() {
    return (
      <PluginPageFrame filePath={'packages/docs/pages/plugin/video/index.js'}>
        <Container>
          <Heading level={2}>Video</Heading>
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
          <Code code="npm install @draft-js-plugins/video --save" />
          <Code code={gettingStarted} name="gettingStarted.js" />
        </AlternateContainer>
        <Container>
          <Heading level={2}>Configuration Parameters</Heading>
          <div className={styles.param}>
            <span className={styles.paramName}>theme</span>
            <span>Object of CSS classes with the following keys.</span>
            <div className={styles.subParams}>
              <div className={styles.subParam}>
                <span className={styles.subParamName}>link:</span> CSS class to
                be applied to link text
              </div>
            </div>
          </div>
          <div className={styles.param}>
            <span className={styles.paramName}>target</span>
            <span>
              String value for the target attribute. (Default value is _self)
            </span>
          </div>
          <div className={styles.param}>
            <span className={styles.paramName}>component</span>
            <span>
              If provided this component will be rendered instead of the default
              Anchor tag. It receives the following props: target, href &
              className
            </span>
          </div>
        </Container>
        <Container>
          <Heading level={2}>Simple Example</Heading>
          <SimpleVideoEditor />
          <Code code={simpleExampleCode} name="SimpleVideoEditor.js" />
        </Container>
        <Container>
          <Heading level={2}>Advanced Video Example</Heading>
          <CustomVideoEditor />
          <Code code={customExampleCode} name="CustomVideoEditor.js" />
        </Container>
        <Container>
          <Heading level={2}>Add Video Button Example</Heading>
          <CustomAddVideoVideoEditor />
          <Code
            code={addVideoEditorExampleCode}
            name="CustomAddVideoVideoEditor.js"
          />
        </Container>
      </PluginPageFrame>
    );
  }
}
