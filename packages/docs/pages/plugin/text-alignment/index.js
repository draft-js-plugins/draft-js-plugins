// eslint-disable-next-line import/no-unresolved
// eslint-disable-next-line import/no-duplicates
import customExampleCode from '!!raw-loader!../../../components/Examples/text-alignment/CustomStaticToolbarPlugin';
// eslint-disable-next-line import/no-unresolved
import themedExampleButtonStylesCode from '!!raw-loader!../../../components/Examples/text-alignment/CustomStaticToolbarPlugin/buttonStyles.module.css';
import themedExampleToolbarStylesCode from '!!raw-loader!../../../components/Examples/text-alignment/CustomStaticToolbarPlugin/toolbarStyles.module.css';
import themedExampleEditorStylesCode from '!!raw-loader!../../../components/Examples/text-alignment/CustomStaticToolbarPlugin/editorStyles.module.css';
import simpleExampleEditorStylesCode from '!!raw-loader!../../../components/Examples/text-alignment/SimpleTextAlignmentPlugin/editorStyles.module.css';
// eslint-disable-next-line import/no-unresolved
import blocksStyle from '!!raw-loader!../../../components/Examples/text-alignment/blocksStyle.css';
import gettingStarted from '!!raw-loader!../../../components/Examples/text-alignment/gettingStarted';
// eslint-disable-next-line import/no-unresolved
// eslint-disable-next-line import/no-duplicates
import simpleExampleCode from '!!raw-loader!../../../components/Examples/text-alignment/SimpleTextAlignmentPlugin';
import Link from 'next/link';
import React, { Component } from 'react';
import AlternateContainer from '../../../components/AlternateContainer/AlternateContainer';
import Code from '../../../components/Code/Code';
import Container from '../../../components/Container/Container';
// eslint-disable-next-line import/no-duplicates
import CustomStaticToolbar from '../../../components/Examples/text-alignment/CustomStaticToolbarPlugin';
// eslint-disable-next-line import/no-duplicates
import SimpleTextAlignmentPluginEditor from '../../../components/Examples/text-alignment/SimpleTextAlignmentPlugin';
import Heading from '../../../components/Heading/Heading';
import InlineCode from '../../../components/InlineCode/InlineCode';
import ExternalLink from '../../../components/Link/Link';
import PluginPageFrame from '../../../components/PluginPageFrame/PluginPageFrame';
import styles from './styles.module.css';

export default class App extends Component {
  render() {
    return (
      <PluginPageFrame filePath={'packages/docs/pages/plugin/anchor/index.js'}>
        <Container>
          <Heading level={2}>Text Alignment</Heading>
          <Heading level={3}>Supported Environment</Heading>
          <ul className={styles.list}>
            <li className={styles.listEntry}>Desktop: Yes</li>
            <li className={styles.listEntry}>Mobile: No</li>
            <li className={styles.listEntry}>Screen-reader: No</li>
          </ul>
        </Container>
        <AlternateContainer>
          <Heading level={2}>Getting Started</Heading>
          <p>
            This plugin allows you to add Text Alignment Buttons via the{' '}
            <Link href="/plugin/static-toolbar">static toolbar</Link>, you can
            alos use it with other toolbars.
          </p>
          <Code code="npm install @draft-js-plugins/editor" />
          <Code code="npm install @draft-js-plugins/text-alignment" />
          <Code code="npm install @draft-js-plugins/static-toolbar" />
          <Code code={gettingStarted} name="gettingStarted.js" />
          <p>
            The plugin ships with a default styling available at this location:
            &nbsp;
            <InlineCode
              code={
                'node_modules/@draft-js-plugins/text-alignment/lib/plugin.css'
              }
            />
            . If you want to use the default styles, you can include this
            stylesheet (
            <ExternalLink
              target="_blank"
              href="https://webpack.js.org/loaders/style-loader/"
            >
              Webpack usage
            </ExternalLink>
            ). Otherwise you can supply your own styles via the `theme` config
            option.
          </p>
          <p>
            <b>Important</b>: this plugin use{' '}
            <InlineCode code={'blockStyleFn'} /> of draftjs, so you must put
            this style in your css, read
            <ExternalLink
              target="_blank"
              href="https://draftjs.org/docs/advanced-topics-block-styling/#blockstylefn"
            >
              {' '}
              Block Styling - draftjs
            </ExternalLink>
          </p>
          <Code code={blocksStyle} />
        </AlternateContainer>
        <Container>
          <Heading level={2}>Configuration Parameters</Heading>
          <div className={styles.param}>
            <span className={styles.paramName}>prefixClass</span>
            <span>Prefix of class name of aligned blocks</span>
            <div className={styles.subParams}>
              <div className={styles.subParam}>
                <span className={styles.subParamName}>Default:</span>
                draft-textAlign
              </div>
            </div>
          </div>
        </Container>
        <Container>
          <Heading level={2}>Simple Static Toolbar Example</Heading>
          <SimpleTextAlignmentPluginEditor />
          <Code
            code={simpleExampleCode}
            name="SimpleTextAlignmentPluginEditor.js"
          />
          <Code code={simpleExampleEditorStylesCode} name="editorStyles.css" />
        </Container>
        <Container>
          <Heading level={2}>Custom Static Toolbar Example</Heading>
          <CustomStaticToolbar />
          <Code code={customExampleCode} name="customExampleCode.js" />
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
