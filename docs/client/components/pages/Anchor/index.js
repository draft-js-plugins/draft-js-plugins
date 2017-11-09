import React, { Component } from 'react';
import { Link } from 'react-router';
import simpleExampleCode from '!!../../../loaders/prism-loader?language=javascript!./SimpleLinkPluginEditor';
import customExampleCode from '!!../../../loaders/prism-loader?language=javascript!./CustomInlineToolbarEditor';
import customExampleLinkStylesCode from '!!../../../loaders/prism-loader?language=css!./CustomInlineToolbarEditor/linkStyles.css';
import gettingStarted from '!!../../../loaders/prism-loader?language=javascript!./gettingStarted';
import Container from '../../shared/Container';
import AlternateContainer from '../../shared/AlternateContainer';
import Heading from '../../shared/Heading';
import styles from './styles.css';
import Code from '../../shared/Code';
import InlineCode from '../../shared/InlineCode';
import SimpleLinkPluginEditor from './SimpleLinkPluginEditor';
import CustomInlineToolbarEditor from './CustomInlineToolbarEditor';
import SocialBar from '../../shared/SocialBar';
import ExternalLink from '../../shared/Link';
import NavBar from '../../shared/NavBar';
import Separator from '../../shared/Separator';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Separator />
        <Container>
          <Heading level={2}>Link</Heading>
          <Heading level={3}>Supported Environment</Heading>
          <ul className={styles.list}>
            <li className={styles.listEntry}>
              Desktop: Yes
            </li>
            <li className={styles.listEntry}>
              Mobile: No
            </li>
            <li className={styles.listEntry}>
              Screen-reader: No
            </li>
          </ul>
        </Container>
        <AlternateContainer>
          <Heading level={2}>Getting Started</Heading>
          <p>This plugin allows you to add link entities via the <Link to="/plugin/inline-toolbar">inline toolbar</Link>. It also provides a decorator that formats the created entities.</p>
          <Code code="npm install draft-js-plugins-editor" />
          <Code code="npm install draft-js-anchor-plugin" />
          <Code code="npm install draft-js-inline-toolbar-plugin" />
          <Code code={gettingStarted} name="gettingStarted.js" />
          <p>
            The plugin ships with a default styling available at this location:
            &nbsp;
            <InlineCode code={'node_modules/draft-js-anchor-plugin/lib/plugin.css'} />. If you want to use the default styles, you can include this stylesheet (<ExternalLink target="_blank" href="https://webpack.js.org/loaders/style-loader/">Webpack usage</ExternalLink>). Otherwise you can supply your own styles via the `theme` config option.
          </p>
        </AlternateContainer>
        <Container>
          <Heading level={2}>Configuration Parameters</Heading>
          <div className={styles.param}>
            <span className={styles.paramName}>theme</span>
            <span>Object of CSS classes with the following keys:</span>
            <div className={styles.subParams}>
              <div className={styles.subParam}>
                <span className={styles.subParamName}>input:</span>
                CSS class for the input field in the add link form.
              </div>
              <div className={styles.subParam}>
                <span className={styles.subParamName}>inputInvalid:</span>
                CSS class for the input field when the URL is invalid.
              </div>
              <div className={styles.subParam}>
                <span className={styles.subParamName}>link:</span>
                CSS class for the link in the editor content.
              </div>
            </div>
          </div>
          <div>
            <span className={styles.paramName}>placeholder</span>
            <span>The placeholder that is shown when the input field is empty.</span>
          </div>
          <div>
            <span className={styles.paramName}>linkTarget</span>
            <span>The target attribute of the link.</span>
          </div>
          <div>
            <span className={styles.paramName}>Link</span>
            <span>Specify the link component that will be rendered.</span>
          </div>
        </Container>
        <Container>
          <Heading level={2}>Simple Link Plugin Example</Heading>
          <SimpleLinkPluginEditor />
          <Code code={simpleExampleCode} name="SimpleLinkPluginEditor.js" />
        </Container>
        <Container>
          <Heading level={2}>Custom Link Plugin Example</Heading>
          <CustomInlineToolbarEditor />
          <Code code={customExampleCode} name="CustomLinkPluginEditor.js" />
          <Code code={customExampleLinkStylesCode} name="linkStyles.css" />
        </Container>
        <SocialBar />
      </div>
    );
  }
}
