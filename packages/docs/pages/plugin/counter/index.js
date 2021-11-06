// eslint-disable-next-line import/no-unresolved
// eslint-disable-next-line import/no-duplicates
import customExampleCode from '!!raw-loader!../../../components/Examples/counter/CustomCounterEditor';
// eslint-disable-next-line import/no-unresolved
import customExampleCounterStylesCode from '!!raw-loader!../../../components/Examples/counter/CustomCounterEditor/counterStyles.module.css';
// eslint-disable-next-line import/no-unresolved
import customExampleEditorStylesCode from '!!raw-loader!../../../components/Examples/counter/CustomCounterEditor/editorStyles.module.css';
// eslint-disable-next-line import/no-unresolved
import gettingStarted from '!!raw-loader!../../../components/Examples/counter/gettingStarted';
// eslint-disable-next-line import/no-unresolved
// eslint-disable-next-line import/no-duplicates
import simpleExampleCode from '!!raw-loader!../../../components/Examples/counter/SimpleCounterEditor';
// eslint-disable-next-line import/no-unresolved
import simpleEditorStylesCode from '!!raw-loader!../../../components/Examples/counter/SimpleCounterEditor/editorStyles.module.css';
// eslint-disable-next-line import/no-unresolved
import webpackConfig from '!!raw-loader!../../../components/Examples/counter/webpackConfig';
import React, { Component } from 'react';
import AlternateContainer from '../../../components/AlternateContainer/AlternateContainer';
import Code from '../../../components/Code/Code';
import Container from '../../../components/Container/Container';
// eslint-disable-next-line import/no-duplicates
import CustomCounterEditor from '../../../components/Examples/counter/CustomCounterEditor';
// eslint-disable-next-line import/no-duplicates
import SimpleCounterEditor from '../../../components/Examples/counter/SimpleCounterEditor';
import Heading from '../../../components/Heading/Heading';
import InlineCode from '../../../components/InlineCode/InlineCode';
import PluginPageFrame from '../../../components/PluginPageFrame/PluginPageFrame';
import styles from './styles.module.css';

export default class App extends Component {
  render() {
    return (
      <PluginPageFrame filePath={'packages/docs/pages/plugin/counter/index.js'}>
        <Container>
          <Heading level={2}>Counter</Heading>
          <p>
            A simple counter plugin for all your counting needs. You can even
            set a limit to change the color past a certain threshold.
          </p>
          <Heading level={3}>Usage</Heading>
          <p>
            To use, simply import and instantiate the counter plugin, and then
            use one of the available counter components in your JSX. Out of the
            box, the following counters are included:
          </p>
          <ul>
            <li>Character Counter</li>
            <li>Word Counter</li>
            <li>Line Counter</li>
            <li>Custom Counter</li>
          </ul>
          <p>
            The Custom Counter allows you to bring your own counting function.
            This will be a function that takes plain text (as a string) from the
            editor as input and returns a numerical value.
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
          <Code code="npm install @draft-js-plugins/counter" />
          <Code code={gettingStarted} name="gettingStarted.js" />
          <Heading level={3}>Importing the default styles</Heading>
          <p>
            The plugin ships with a default styling available at this location
            in the installed package: &nbsp;
            <InlineCode
              code={'node_modules/@draft-js-plugins/counter/lib/plugin.css'}
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
                code={"import '@draft-js-plugins/counter/lib/plugin.css';"}
                className={styles.guideCodeBlock}
              />
            </li>
            <li className={styles.listEntry}>4. Restart Webpack.</li>
          </ul>
        </AlternateContainer>
        <Container>
          <Heading level={2}>Configuration Parameters</Heading>
          <div className={styles.param}>
            <div className={styles.paramName}>theme</div>
            <div>
              Javascript object of CSS classes with the following keys.
              <div className={styles.subParams}>
                <div className={styles.subParam}>
                  <span className={styles.subParamName}>counter:</span> CSS
                  class to be applied to the number displayed when not over the
                  specified limit
                </div>
                <div className={styles.subParam}>
                  <span className={styles.subParamName}>counterOverLimit:</span>{' '}
                  CSS class to be applied to the number displayed when over the
                  specified limit
                </div>
              </div>
            </div>
          </div>
          <Heading level={2}>Component Properties</Heading>
          <div className={styles.param}>
            <div className={styles.paramName}>limit</div>
            <div>
              A limit to indicate to the user that a threshold has passed.
            </div>
          </div>
          <div className={styles.param}>
            <div className={styles.paramName}>countFunction</div>
            <div>
              A custom counting function for the Custom Counter. The function
              will receive plain text from the editor (as a string) as input and
              should return a numerical value.
            </div>
          </div>
        </Container>
        <Container>
          <Heading level={2}>Simple Example</Heading>
          <SimpleCounterEditor />
          <Code code={simpleExampleCode} name="SimpleCounterEditor.js" />
          <Code code={simpleEditorStylesCode} name="editorStyles.css" />
        </Container>
        <Container>
          <Heading level={2}>Themed Example</Heading>
          <CustomCounterEditor />
          <Code code={customExampleCode} name="CustomCounterEditor.js" />
          <Code
            code={customExampleCounterStylesCode}
            name="counterStyles.css"
          />
          <Code code={customExampleEditorStylesCode} name="editorStyles.css" />
        </Container>
      </PluginPageFrame>
    );
  }
}
