// eslint-disable-next-line import/no-unresolved
// eslint-disable-next-line import/no-duplicates
import customExampleCode from '!!raw-loader!../../../components/Examples/hashtag/CustomHashtagEditor';
// eslint-disable-next-line import/no-unresolved
import customExampleEditorStylesCode from '!!raw-loader!../../../components/Examples/hashtag/CustomHashtagEditor/editorStyles.module.css';
// eslint-disable-next-line import/no-unresolved
import customExampleHashtagStylesCode from '!!raw-loader!../../../components/Examples/hashtag/CustomHashtagEditor/hashtagStyles.module.css';
// eslint-disable-next-line import/no-unresolved
import gettingStarted from '!!raw-loader!../../../components/Examples/hashtag/gettingStarted';
// eslint-disable-next-line import/no-unresolved
// eslint-disable-next-line import/no-duplicates
import simpleExampleCode from '!!raw-loader!../../../components/Examples/hashtag/SimpleHashtagEditor';
// eslint-disable-next-line import/no-unresolved
import simpleExampleEditorStylesCode from '!!raw-loader!../../../components/Examples/hashtag/SimpleHashtagEditor/editorStyles.module.css';
// eslint-disable-next-line import/no-unresolved
import webpackConfig from '!!raw-loader!../../../components/Examples/hashtag/webpackConfig';
import React, { Component } from 'react';
import AlternateContainer from '../../../components/AlternateContainer/AlternateContainer';
import Code from '../../../components/Code/Code';
import Container from '../../../components/Container/Container';
// eslint-disable-next-line import/no-duplicates
import CustomHashtagEditor from '../../../components/Examples/hashtag/CustomHashtagEditor';
// eslint-disable-next-line import/no-duplicates
import SimpleHashtagEditor from '../../../components/Examples/hashtag/SimpleHashtagEditor';
import Heading from '../../../components/Heading/Heading';
import InlineCode from '../../../components/InlineCode/InlineCode';
import PluginPageFrame from '../../../components/PluginPageFrame/PluginPageFrame';
import styles from './styles.module.css';

export default class App extends Component {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <PluginPageFrame filePath={'packages/docs/pages/plugin/hashtag/index.js'}>
        <Container>
          <Heading level={2}>Hashtag</Heading>
          <p>Highlighting words starting with a number sign (#).</p>
          <Heading level={3}>Usage in combination with Linkify Plugin</Heading>
          <p>
            When used in combination with the linkify plugin make sure the
            hashtag plugin is listed afterwards in the plugins list to avoid URL
            hashes being styled as hashtags e.g.{' '}
            <InlineCode code={'[linkifyPlugin, hashtagPlugin]'} />
          </p>
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
          <Code code="npm install @draft-js-plugins/hashtag" />
          <Code code={gettingStarted} name="gettingStarted.js" />
          <Heading level={3}>Importing the default styles</Heading>
          <p>
            The plugin ships with a default styling available at this location
            in the installed package: &nbsp;
            <InlineCode
              code={'node_modules/@draft-js-plugins/hashtag/lib/plugin.css'}
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
                code={"import '@draft-js-plugins/hashtag/lib/plugin.css';"}
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
                <span className={styles.subParamName}>hashtag:</span> CSS class
                to be applied to hashtag text
              </div>
            </div>
          </div>
          <div className={styles.param}>
            <span className={styles.paramName}>hashtagComponent</span>
            <span>
              If provided the passed component is used to render a Mention. It
              receives the following props: children, theme & decoratedText
            </span>
          </div>
          <Heading level={3}>Additional Exports</Heading>
          <div>
            In addition to the plugin the module exports{' '}
            <InlineCode code={'extractHashtagsWithIndices'} />
            . As first argument it takes the text string. The function returns a
            list of hashtags with start and end positons.
            <Code
              code={
                'function extractHashtagsWithIndices(text: string): Array<{hashtag: string; indices: [number, number];}>;'
              }
            />
            It can be imported by:
            <Code
              code={
                "import { extractHashtagsWithIndices } from '@draft-js-plugins/hashtag';"
              }
            />
          </div>
        </Container>
        <Container>
          <Heading level={2}>Simple Example</Heading>
          <SimpleHashtagEditor />
          <Code code={simpleExampleCode} name="SimpleHashtagEditor.js" />
          <Code code={simpleExampleEditorStylesCode} name="editorStyles.css" />
        </Container>
        <Container>
          <Heading level={2}>Themed Hashtag Example</Heading>
          <CustomHashtagEditor />
          <Code code={customExampleCode} name="CustomHashtagEditor.js" />
          <Code
            code={customExampleHashtagStylesCode}
            name="hashtagStyles.css"
          />
          <Code code={customExampleEditorStylesCode} name="editorStyles.css" />
        </Container>
      </PluginPageFrame>
    );
  }
}
