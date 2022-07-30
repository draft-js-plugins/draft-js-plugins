import gettingStarted from '!!raw-loader!../../../components/Examples/table/gettingStarted';
import React, { Component } from 'react';
import AlternateContainer from '../../../components/AlternateContainer/AlternateContainer';
import Code from '../../../components/Code/Code';
import Container from '../../../components/Container/Container';
import Heading from '../../../components/Heading/Heading';
import PluginPageFrame from '../../../components/PluginPageFrame/PluginPageFrame';
import styles from './styles.module.css';

export default class App extends Component {
  render() {
    return (
      <PluginPageFrame filePath={'packages/docs/pages/plugin/table/index.js'}>
        <Container>
          <Heading level={2}>Sticker</Heading>
          <Heading level={3}>Supported Environment</Heading>
          <ul className={styles.list}>
            <li className={styles.listEntry}>Desktop: Yes</li>
            <li className={styles.listEntry}>Mobile: Yes</li>
            <li className={styles.listEntry}>Screen-reader: Yes</li>
          </ul>
        </Container>
        <AlternateContainer>
          <Heading level={2}>Getting Started</Heading>
          <Code code="npm install @draft-js-plugins/editor" />
          <Code code="npm install @draft-js-plugins/table" />
          <Code code={gettingStarted} name="gettingStarted.js" />
        </AlternateContainer>
        <Container>
          <Heading level={2}>Configuration Parameters</Heading>
        </Container>
      </PluginPageFrame>
    );
  }
}
