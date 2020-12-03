import React, { Component } from 'react';

// eslint-disable-next-line import/no-unresolved
// eslint-disable-next-line import/no-duplicates
import simpleExampleCode from '!!raw-loader!../../../components/Examples/divider/DividerWithSideToolbarEditor';
// eslint-disable-next-line import/no-unresolved
import simpleExampleEditorStylesCode from '!!raw-loader!../../../components/Examples/divider/DividerWithSideToolbarEditor/editorStyles.module.css';
// eslint-disable-next-line import/no-unresolved
import gettingStarted from '!!raw-loader!../../../components/Examples/divider/gettingStarted';
// eslint-disable-next-line import/no-unresolved
import webpackConfig from '!!raw-loader!../../../components/Examples/divider/webpackConfig';

import Container from '../../../components/Container/Container';
import AlternateContainer from '../../../components/AlternateContainer/AlternateContainer';
import Heading from '../../../components/Heading/Heading';
import styles from './styles.module.css';
import Code from '../../../components/Code/Code';
// eslint-disable-next-line import/no-duplicates
import DividerWithSideToolbarEditor from '../../../components/Examples/divider/DividerWithSideToolbarEditor';
import ExternalLink from '../../../components/Link/Link';
import InlineCode from '../../../components/InlineCode/InlineCode';
import PluginPageFrame from '../../../components/PluginPageFrame/PluginPageFrame';

export default class App extends Component {
  render() {
    return (
      <PluginPageFrame>
        <Container>
          <Heading level={2}>Divider</Heading>
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
          <Code code="npm install @draft-js-plugins/divider" />
          <Code code={gettingStarted} name="gettingStarted.js" />
          <Heading level={3}>Importing the default styles</Heading>
          <p>
            The plugin ships with a default styling available at this location
            in the installed package: &nbsp;
            <InlineCode
              code={'node_modules/@draft-js-plugins/divider/lib/plugin.css'}
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
                code={"import '@draft-js-plugins/divider/lib/plugin.css';"}
                className={styles.guideCodeBlock}
              />
            </li>
            <li className={styles.listEntry}>4. Restart Webpack.</li>
          </ul>
          <Heading level={4}>Browserify Usage</Heading>
          <p>
            Please help, by submiting a Pull Request to the{' '}
            <ExternalLink href="https://github.com/draft-js-plugins/draft-js-plugins/blob/master/docs/client/components/pages/Image/index.js">
              documentation
            </ExternalLink>
            .
          </p>
        </AlternateContainer>
        <Container>
          <Heading level={2}>Configuration Parameters</Heading>
          <div className={styles.param}>
            <span className={styles.paramName}>theme</span>
            <span>Object of CSS classes with the following keys.</span>
            <div className={styles.subParams}>
              <div className={styles.subParam}>
                <span className={styles.subParamName}>divider:</span> CSS class
                for the divider.
              </div>
            </div>
          </div>
          <div className={styles.param}>
            <span className={styles.paramName}>entityType</span>
            <span>Entity type for divider. default type is `divider`</span>
          </div>
          <div className={styles.param}>
            <span className={styles.paramName}>dividerComponent</span>
            <span>Pass in a custom divider component to be rendered.</span>
          </div>
        </Container>
        <Container>
          <Heading level={2}>Divider + SideToolbar + Focus Example</Heading>
          <DividerWithSideToolbarEditor />
          <Code
            code={simpleExampleCode}
            name="DividerWithSideToolbarEditor.js"
          />
          <Code code={simpleExampleEditorStylesCode} name="editorStyles.css" />
        </Container>
      </PluginPageFrame>
    );
  }
}
