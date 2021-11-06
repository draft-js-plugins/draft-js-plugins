// eslint-disable-next-line import/no-unresolved
// eslint-disable-next-line import/no-duplicates
import customExampleCode from '!!raw-loader!../../../components/Examples/side-toolbar/CustomSideToolbarEditor';
// eslint-disable-next-line import/no-unresolved
import customExampleEditorBlockTypeSelectStylesCode from '!!raw-loader!../../../components/Examples/side-toolbar/CustomSideToolbarEditor/blockTypeSelectStyles.module.css';
// eslint-disable-next-line import/no-unresolved
import customExampleEditorButtonStylesCode from '!!raw-loader!../../../components/Examples/side-toolbar/CustomSideToolbarEditor/buttonStyles.module.css';
// eslint-disable-next-line import/no-unresolved
import customExampleEditorStylesCode from '!!raw-loader!../../../components/Examples/side-toolbar/CustomSideToolbarEditor/editorStyles.module.css';
// eslint-disable-next-line import/no-unresolved
import customExampleEditorToolbarStylesCode from '!!raw-loader!../../../components/Examples/side-toolbar/CustomSideToolbarEditor/toolbarStyles.module.css';
// eslint-disable-next-line import/no-unresolved
import gettingStarted from '!!raw-loader!../../../components/Examples/side-toolbar/gettingStarted';
// eslint-disable-next-line import/no-unresolved
// eslint-disable-next-line import/no-duplicates
import simpleExampleCode from '!!raw-loader!../../../components/Examples/side-toolbar/SimpleSideToolbarEditor';
// eslint-disable-next-line import/no-unresolved
import simpleExampleEditorStylesCode from '!!raw-loader!../../../components/Examples/side-toolbar/SimpleSideToolbarEditor/editorStyles.module.css';
// eslint-disable-next-line import/no-unresolved
import webpackConfig from '!!raw-loader!../../../components/Examples/side-toolbar/webpackConfig';
import React, { Component } from 'react';
import AlternateContainer from '../../../components/AlternateContainer/AlternateContainer';
import Code from '../../../components/Code/Code';
import Container from '../../../components/Container/Container';
// eslint-disable-next-line import/no-duplicates
import CustomSideToolbarEditor from '../../../components/Examples/side-toolbar/CustomSideToolbarEditor';
// eslint-disable-next-line import/no-duplicates
import SimpleSideToolbarEditor from '../../../components/Examples/side-toolbar/SimpleSideToolbarEditor';
import Heading from '../../../components/Heading/Heading';
import InlineCode from '../../../components/InlineCode/InlineCode';
import ExternalLink from '../../../components/Link/Link';
import PluginPageFrame from '../../../components/PluginPageFrame/PluginPageFrame';
import styles from './styles.module.css';

export default class App extends Component {
  render() {
    return (
      <PluginPageFrame
        filePath={'packages/docs/pages/plugin/side-toolbar/index.js'}
      >
        <Container>
          <Heading level={2}>SideToolbar</Heading>
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
          <Code code="npm install @draft-js-plugins/side-toolbar" />
          <Code code={gettingStarted} name="gettingStarted.js" />
          <Heading level={3}>Importing the default styles</Heading>
          <p>
            The plugin ships with a default styling available at this location
            in the installed package: &nbsp;
            <InlineCode
              code={
                'node_modules/@draft-js-plugins/side-toolbar/lib/plugin.css'
              }
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
                code={"import '@draft-js-plugins/side-toolbar/lib/plugin.css';"}
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
                <span className={styles.subParamName}>buttonStyles:</span> CSS
                class for the buttons.
              </div>
              <div className={styles.subParam}>
                <span className={styles.subParamName}>toolbarStyles:</span> CSS
                class for toolbar.
              </div>
              <div className={styles.subParam}>
                <span className={styles.subParamName}>
                  blockTypeSelectStyles:
                </span>{' '}
                CSS class for the dot.
              </div>
            </div>
          </div>
          <div className={styles.paramBig}>
            <span className={styles.paramName}>position</span>
            <span>
              String for the position to be rendered.(Default is left)
            </span>
          </div>

          <div className={styles.paramBig}>
            <span className={styles.paramName}>popperOptions</span>
            <span>
              This options will be used to initialize popper.js. Read in detail
              about it{' '}
              <ExternalLink href=" https://popper.js.org/docs/v2/">
                here.
              </ExternalLink>
              The <InlineCode code="position" /> option is ignored when the this
              option is used.
              <br />
              This is the popover for the 3 dots button component.
            </span>
          </div>
          <div className={styles.paramBig}>
            <span className={styles.paramName}>sideToolbarButtonComponent</span>
            <span>
              Button component to be used when a the Side Toolbar is visible.
              Default to 3 dots.
            </span>
          </div>
          <div className={styles.paramBig}>
            <span className={styles.paramName}>
              createBlockTypeSelectPopperOptions
            </span>
            <span>
              This function will be used create the options for popper.js. As a
              first parameter it will get a reference to the arrow DOM node.
              <br />
              This is the popover for the block type selection components.
            </span>
          </div>
        </Container>
        <Container>
          <Heading level={2}>Simple Side Toolbar Example</Heading>
          <SimpleSideToolbarEditor />
          <Code code={simpleExampleCode} name="SimpleSideToolbarEditor.js" />
          <Code code={simpleExampleEditorStylesCode} name="editorStyles.css" />
        </Container>
        <Container>
          <Heading level={2}>Custom Side Toolbar Example</Heading>
          <CustomSideToolbarEditor />
          <Code code={customExampleCode} name="CustomSideToolbarEditor.js" />
          <Code code={customExampleEditorStylesCode} name="editorStyles.css" />
          <Code
            code={customExampleEditorButtonStylesCode}
            name="buttonStyles.css"
          />
          <Code
            code={customExampleEditorToolbarStylesCode}
            name="toolbarStyles.css"
          />
          <Code
            code={customExampleEditorBlockTypeSelectStylesCode}
            name="blockTypeSelectStyles.css"
          />
        </Container>
      </PluginPageFrame>
    );
  }
}
