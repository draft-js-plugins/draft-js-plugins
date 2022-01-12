// eslint-disable-next-line import/no-unresolved
// eslint-disable-next-line import/no-duplicates
import addImageExampleCode from '!!raw-loader!../../../components/Examples/image/AddImageEditor';
// eslint-disable-next-line import/no-unresolved
import addImageExampleEditorStylesCode from '!!raw-loader!../../../components/Examples/image/AddImageEditor/editorStyles.module.css';
// eslint-disable-next-line import/no-unresolved
// eslint-disable-next-line import/no-duplicates
import customExampleCode from '!!raw-loader!../../../components/Examples/image/CustomImageEditor';
import customExampleMockUploadCode from '!!raw-loader!../../../components/Examples/image/mockUpload';

// eslint-disable-next-line import/no-unresolved
import customExampleEditorStylesCode from '!!raw-loader!../../../components/Examples/image/CustomImageEditor/editorStyles.module.css';
// eslint-disable-next-line import/no-unresolved
import gettingStarted from '!!raw-loader!../../../components/Examples/image/gettingStarted';
// eslint-disable-next-line import/no-unresolved
// eslint-disable-next-line import/no-duplicates
import simpleExampleCode from '!!raw-loader!../../../components/Examples/image/SimpleImageEditor';
// eslint-disable-next-line import/no-unresolved
import simpleExampleEditorStylesCode from '!!raw-loader!../../../components/Examples/image/SimpleImageEditor/editorStyles.module.css';
// eslint-disable-next-line import/no-unresolved
import webpackConfig from '!!raw-loader!../../../components/Examples/image/webpackConfig';
import React, { Component } from 'react';
import AlternateContainer from '../../../components/AlternateContainer/AlternateContainer';
import Code from '../../../components/Code/Code';
import Container from '../../../components/Container/Container';
// eslint-disable-next-line import/no-duplicates
import AddImageEditor from '../../../components/Examples/image/AddImageEditor';
// eslint-disable-next-line import/no-duplicates
import CustomImageEditor from '../../../components/Examples/image/CustomImageEditor';
// eslint-disable-next-line import/no-duplicates
import SimpleImageEditor from '../../../components/Examples/image/SimpleImageEditor';
import Heading from '../../../components/Heading/Heading';
import InlineCode from '../../../components/InlineCode/InlineCode';
import PluginPageFrame from '../../../components/PluginPageFrame/PluginPageFrame';
import styles from './styles.module.css';

export default class App extends Component {
  render() {
    return (
      <PluginPageFrame filePath={'packages/docs/pages/plugin/image/index.js'}>
        <Container>
          <Heading level={2}>Image</Heading>
          <Heading level={3}>Supported Environment</Heading>
          <ul className={styles.list}>
            <li className={styles.listEntry}>Desktop: Yes</li>
            <li className={styles.listEntry}>Mobile: Yes</li>
            <li className={styles.listEntry}>Screen-reader: No</li>
          </ul>
        </Container>
        <AlternateContainer>
          <Heading level={2}>Getting Started</Heading>
          <Code code="npm install @draft-js-plugins/editor" />
          <Code code="npm install @draft-js-plugins/image" />
          <Code code={gettingStarted} name="gettingStarted.js" />
          <Heading level={3}>Importing the default styles</Heading>
          <p>
            The plugin ships with a default styling available at this location
            in the installed package: &nbsp;
            <InlineCode
              code={'node_modules/@draft-js-plugins/image/lib/plugin.css'}
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
                code={"import '@draft-js-plugins/image/lib/plugin.css';"}
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
                <span className={styles.subParamName}>image:</span> CSS class
                for the image.
              </div>
              <div className={styles.subParam}>
                <span className={styles.subParamName}>addImage:</span> CSS
                class.
              </div>
              <div className={styles.subParam}>
                <span className={styles.subParamName}>addImagePopover:</span>{' '}
                CSS class.
              </div>
              <div className={styles.subParam}>
                <span className={styles.subParamName}>
                  addImageClosedPopover:
                </span>{' '}
                CSS class.
              </div>
              <div className={styles.subParam}>
                <span className={styles.subParamName}>
                  addImageBottomGradient:
                </span>{' '}
                CSS class.
              </div>
              <div className={styles.subParam}>
                <span className={styles.subParamName}>addImageButton:</span> CSS
                class.
              </div>
              <div className={styles.subParam}>
                <span className={styles.subParamName}>
                  addImagePressedButton:
                </span>{' '}
                CSS class.
              </div>
              <div className={styles.subParam}>
                <span className={styles.subParamName}>addImageInput:</span> CSS
                class.
              </div>
              <div className={styles.subParam}>
                <span className={styles.subParamName}>
                  addImageConfirmButton:
                </span>{' '}
                CSS class.
              </div>
            </div>
          </div>
          <div className={styles.paramBig}>
            <span className={styles.paramName}>imageComponent</span>
            <span>Pass in a custom image component to be rendered.</span>
          </div>
          <div className={styles.paramBig}>
            <span className={styles.paramName}>addImageButtonContent</span>
            <span>
              Content of button which opens add image popup. (Default content is
              📷)
            </span>
          </div>
        </Container>
        <Container>
          <Heading level={2}>Simple Example</Heading>
          <SimpleImageEditor />
          <Code code={simpleExampleCode} name="SimpleImageEditor.js" />
          <Code code={simpleExampleEditorStylesCode} name="editorStyles.css" />
        </Container>
        <Container>
          <Heading level={2}>
            Alignment + Resize + Focus + Drag&apos;n&apos;Drop +
            Drag&apos;n&apos;Drop Upload Example
          </Heading>
          <CustomImageEditor />
          <Code code={customExampleMockUploadCode} name="mockUpload.js" />
          <Code code={customExampleCode} name="AddImageEditor.js" />
          <Code code={customExampleEditorStylesCode} name="editorStyles.css" />
        </Container>
        <Container>
          <Heading level={2}>Add Image Button Example</Heading>
          <AddImageEditor />
          <Code code={addImageExampleCode} name="AddImageEditor.js" />
          <Code
            code={addImageExampleEditorStylesCode}
            name="editorStyles.css"
          />
        </Container>
      </PluginPageFrame>
    );
  }
}
