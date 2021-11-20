// eslint-disable-next-line import/no-unresolved
// eslint-disable-next-line import/no-duplicates
import customComponentExampleCode from '!!raw-loader!../../../components/Examples/linkify/CustomComponentLinkifyEditor';
// eslint-disable-next-line import/no-unresolved
import customComponentExampleEditorStylesCode from '!!raw-loader!../../../components/Examples/linkify/CustomComponentLinkifyEditor/editorStyles.module.css';
// eslint-disable-next-line import/no-unresolved
// eslint-disable-next-line import/no-duplicates
import customExampleCode from '!!raw-loader!../../../components/Examples/linkify/CustomLinkifyEditor';
// eslint-disable-next-line import/no-unresolved
import customExampleEditorStylesCode from '!!raw-loader!../../../components/Examples/linkify/CustomLinkifyEditor/editorStyles.module.css';
// eslint-disable-next-line import/no-unresolved
import gettingStarted from '!!raw-loader!../../../components/Examples/linkify/gettingStarted';
// eslint-disable-next-line import/no-unresolved
// eslint-disable-next-line import/no-duplicates
import simpleExampleCode from '!!raw-loader!../../../components/Examples/linkify/SimpleLinkifyEditor';
// eslint-disable-next-line import/no-unresolved
import simpleExampleEditorStylesCode from '!!raw-loader!../../../components/Examples/linkify/SimpleLinkifyEditor/editorStyles.module.css';
// eslint-disable-next-line import/no-unresolved
import webpackConfig from '!!raw-loader!../../../components/Examples/linkify/webpackConfig';
import React, { Component } from 'react';
import AlternateContainer from '../../../components/AlternateContainer/AlternateContainer';
import Code from '../../../components/Code/Code';
import Container from '../../../components/Container/Container';
// eslint-disable-next-line import/no-duplicates
import CustomComponentLinkifyEditor from '../../../components/Examples/linkify/CustomComponentLinkifyEditor';
// eslint-disable-next-line import/no-duplicates
import CustomLinkifyEditor from '../../../components/Examples/linkify/CustomLinkifyEditor';
// eslint-disable-next-line import/no-duplicates
import SimpleLinkifyEditor from '../../../components/Examples/linkify/SimpleLinkifyEditor';
import Heading from '../../../components/Heading/Heading';
import InlineCode from '../../../components/InlineCode/InlineCode';
import PluginPageFrame from '../../../components/PluginPageFrame/PluginPageFrame';
import styles from './styles.module.css';

export default class App extends Component {
  render() {
    return (
      <PluginPageFrame filePath={'packages/docs/pages/plugin/linkify/index.js'}>
        <Container>
          <Heading level={2}>Linkify</Heading>
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
          <Code code="npm install @draft-js-plugins/linkify" />
          <Code code={gettingStarted} name="gettingStarted.js" />
          <Heading level={3}>Importing the default styles</Heading>
          <p>
            The plugin ships with a default styling available at this location
            in the installed package: &nbsp;
            <InlineCode
              code={'node_modules/@draft-js-plugins/linkify/lib/plugin.css'}
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
                code={"import '@draft-js-plugins/linkify/lib/plugin.css';"}
                className={styles.guideCodeBlock}
              />
            </li>
            <li className={styles.listEntry}>4. Restart Webpack.</li>
          </ul>
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
            <span className={styles.paramName}>rel</span>
            <span>
              String value for the rel attribute. (Default value is{' '}
              {"'noreferrer noopener'"})
            </span>
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
          <div className={styles.param}>
            <span className={styles.paramName}>customExtractLinks</span>
            <span>
              If specified, the customExtractLinks function will be function
              will be used to extract links. It receives the text and must
              return a list of index, lastIndex and url or null.
            </span>
          </div>
          <Heading level={3}>Additional Exports</Heading>
          <div>
            In addition to the plugin the module exports{' '}
            <InlineCode code={'extractLinks'} />
            . As first argument it takes the text string. The function returns a
            list of linkifyit.Matches or null.
            <Code
              code={
                'function extractLinks(text: string): linkifyIt.Match[] | null;'
              }
            />
            It can be imported by:
            <Code
              code={"import { extractLinks } from '@draft-js-plugins/linkify';"}
            />
          </div>
        </Container>
        <Container>
          <Heading level={2}>Simple Example</Heading>
          <SimpleLinkifyEditor />
          <Code code={simpleExampleCode} name="SimpleLinkifyEditor.js" />
          <Code code={simpleExampleEditorStylesCode} name="editorStyles.css" />
        </Container>
        <Container>
          <Heading level={2}>Themed Linkify Example</Heading>
          <CustomLinkifyEditor />
          <Code code={customExampleCode} name="CustomLinkifyEditor.js" />
          <Code code={customExampleEditorStylesCode} name="editorStyles.css" />
        </Container>
        <Container>
          <Heading level={2}>Themed Linkify Example</Heading>
          <CustomComponentLinkifyEditor />
          <Code
            code={customComponentExampleCode}
            name="CustomComponentLinkifyEditor.js"
          />
          <Code
            code={customComponentExampleEditorStylesCode}
            name="editorStyles.css"
          />
        </Container>
      </PluginPageFrame>
    );
  }
}
