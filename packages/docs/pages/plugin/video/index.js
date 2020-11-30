import React, { Component } from 'react';

// eslint-disable-next-line import/no-unresolved
import simpleExampleCode from '!!raw-loader!./SimpleVideoEditor';
// eslint-disable-next-line import/no-unresolved
import customExampleCode from '!!raw-loader!./CustomVideoEditor';
// eslint-disable-next-line import/no-unresolved
import addVideoEditorExampleCode from '!!raw-loader!./CustomAddVideoVideoEditor';
// eslint-disable-next-line import/no-unresolved
import gettingStarted from '!!raw-loader!./gettingStarted';

import Container from '../../../components/Container/Container';
import AlternateContainer from '../../../components/AlternateContainer/AlternateContainer';
import Heading from '../../../components/Heading/Heading';
import styles from './styles.module.css';
import Code from '../../../components/Code/Code';
import SimpleVideoEditor from './SimpleVideoEditor';
import CustomVideoEditor from './CustomVideoEditor';
import CustomAddVideoVideoEditor from './CustomAddVideoVideoEditor';
import PluginPageFrame from '../../../components/PluginPageFrame/PluginPageFrame';

export default class App extends Component {
  render() {
    return (
      <PluginPageFrame>
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
