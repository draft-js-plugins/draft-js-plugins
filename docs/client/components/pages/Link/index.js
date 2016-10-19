import React, { Component } from 'react';

// eslint-disable-next-line import/no-unresolved
import simpleExampleCode from '!!../../../loaders/prism-loader?language=javascript!./SimpleLinkEditor';
// eslint-disable-next-line import/no-unresolved
import simpleExampleEditorStylesCode from '!!../../../loaders/prism-loader?language=css!./SimpleLinkEditor/editorStyles.css';
// eslint-disable-next-line import/no-unresolved
import simpleExampleData from '!!../../../loaders/prism-loader?language=javascript!./SimpleLinkEditor/data.js';
// eslint-disable-next-line import/no-unresolved
import customComponentExampleCode from '!!../../../loaders/prism-loader?language=javascript!./CustomComponentLinkEditor';
// eslint-disable-next-line import/no-unresolved
import customComponentExampleEditorStylesCode from '!!../../../loaders/prism-loader?language=css!./CustomComponentLinkEditor/editorStyles.css';
// eslint-disable-next-line import/no-unresolved
import customComponentExampleData from '!!../../../loaders/prism-loader?language=javascript!./CustomComponentLinkEditor/data.js';
// eslint-disable-next-line import/no-unresolved
import customComponent from '!!../../../loaders/prism-loader?language=javascript!./CustomComponentLinkEditor/MyLink.js';
// eslint-disable-next-line import/no-unresolved
import customEntityExampleCode from '!!../../../loaders/prism-loader?language=javascript!./CustomEntityLinkEditor';
// eslint-disable-next-line import/no-unresolved
import customEntityExampleEditorStylesCode from '!!../../../loaders/prism-loader?language=css!./CustomEntityLinkEditor/editorStyles.css';
// eslint-disable-next-line import/no-unresolved
import customEntityExampleData from '!!../../../loaders/prism-loader?language=javascript!./CustomEntityLinkEditor/data.js';
// eslint-disable-next-line import/no-unresolved
import gettingStarted from '!!../../../loaders/prism-loader?language=javascript!./gettingStarted';
// eslint-disable-next-line import/no-unresolved
import webpackConfig from '!!../../../loaders/prism-loader?language=javascript!./webpackConfig';
// eslint-disable-next-line import/no-unresolved
import webpackImport from '!!../../../loaders/prism-loader?language=javascript!./webpackImport';

import Container from '../../shared/Container';
import AlternateContainer from '../../shared/AlternateContainer';
import Heading from '../../shared/Heading';
import styles from './styles.css';
import Code from '../../shared/Code';
import SimpleLinkEditor from './SimpleLinkEditor';
import CustomComponentLinkEditor from './CustomComponentLinkEditor';
import CustomEntityLinkEditor from './CustomEntityLinkEditor';
import SocialBar from '../../shared/SocialBar';
import NavBar from '../../shared/NavBar';
import Separator from '../../shared/Separator';
import ExternalLink from '../../shared/Link';
import InlineCode from '../../shared/InlineCode';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Separator />
        <Container>
          <Heading level={2}>Link</Heading>
        </Container>
        <AlternateContainer>
          <Heading level={2}>Getting Started</Heading>
          <p>
            This plugin is meant to give a default strategy to decorate link entities.
            It ships with a default Link component which represents link entites with "a" markup.
          </p>
          <Code code="npm install draft-js-plugins-editor@beta --save" />
          <Code code="npm install draft-js-link-plugin@beta --save" />
          <Code code={gettingStarted} name="gettingStarted.js" />
          <Heading level={3}>Importing the default styles</Heading>
          <p>
            The plugin ships with a default styling available at this location in the installed package:
            &nbsp;
            <InlineCode code={'node_modules/draft-js-link-plugin/lib/plugin.css'} />
          </p>
          <Heading level={4}>Webpack Usage</Heading>
          <ul className={styles.list}>
            <li className={styles.listEntry}>
              1. Install Webpack loaders:
              &nbsp;
              <InlineCode code={'npm i style-loader css-loader --save-dev'} />
            </li>
            <li className={styles.listEntry}>
              2. Add the below section to Webpack config (if your config already has a loaders array, simply add the below loader object to your existing list.
              <Code code={webpackConfig} className={styles.guideCodeBlock} />
            </li>
            <li className={styles.listEntry}>
              3. Add the below import line to your component to tell Webpack to inject the style to your component.
              <Code code={webpackImport} className={styles.guideCodeBlock} />
            </li>
            <li className={styles.listEntry}>
              4. Restart Webpack.
            </li>
          </ul>
          <Heading level={4}>Browserify Usage</Heading>
          <p>
            Please help, by submiting a Pull Request to the <ExternalLink href="https://github.com/draft-js-plugins/draft-js-plugins/blob/master/docs/client/components/pages/Link/index.js">documentation</ExternalLink>.
          </p>
        </AlternateContainer>
        <Container>
          <Heading level={2}>Configuration Parameters</Heading>
          <div className={styles.param}>
            <span className={styles.paramName}>theme</span>
            <span>Object of CSS classes with the following keys.</span>
            <div className={styles.subParams}>
              <div className={styles.subParam}><span className={styles.subParamName}>link:</span> CSS class to be applied to link text</div>
            </div>
          </div>
          <div className={styles.param}>
            <span className={styles.paramName}>component</span>
            <span>If provided this component will be rendered instead of the default Anchor tag. It receives the following props: target, href & className</span>
          </div>
          <div className={styles.param}>
            <span className={styles.paramName}>target</span>
            <span>String value for the target attribute. (Default  _blank)</span>
          </div>
          <div className={styles.param}>
            <span className={styles.paramName}>type</span>
            <span>entity.type that will be decorate as link (default 'LINK')</span>
          </div>
          <div className={styles.param}>
            <span className={styles.paramName}>urlKey</span>
            <span>The key in the entity data object that contains the link url (default 'href')</span>
          </div>
        </Container>
        <Container>
          <Heading level={2}>Simple Example</Heading>
          <SimpleLinkEditor />
          <Code code={simpleExampleData} name="data.js" />
          <Code code={simpleExampleCode} name="SimpleLinkEditor.js" />
          <Code code={simpleExampleEditorStylesCode} name="editorStyles.css" />
        </Container>
        <Container>
          <Heading level={2}>Custom Component Example</Heading>
          <CustomComponentLinkEditor />
          <Code code={customComponentExampleData} name="data.js" />
          <Code code={customComponent} name="MyLink.js" />
          <Code code={customComponentExampleCode} name="CustomComponentLinkEditor.js" />
          <Code code={customComponentExampleEditorStylesCode} name="editorStyles.css" />
        </Container>
        <Container>
          <Heading level={2}>Custom Entity Example</Heading>
          <CustomEntityLinkEditor />
          <Code code={customEntityExampleData} name="data.js" />
          <Code code={customEntityExampleCode} name="CustomEntityLinkEditor.js" />
          <Code code={customEntityExampleEditorStylesCode} name="editorStyles.css" />
        </Container>
        <SocialBar />
      </div>
    );
  }
}
