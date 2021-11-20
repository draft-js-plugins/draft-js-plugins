// eslint-disable-next-line import/no-unresolved
// eslint-disable-next-line import/no-duplicates
import customExampleCode from '!!raw-loader!../../../components/Examples/sticker/CustomStickerEditor';
// eslint-disable-next-line import/no-unresolved
import customExampleEditorStylesCode from '!!raw-loader!../../../components/Examples/sticker/CustomStickerEditor/editorStyles.module.css';
// eslint-disable-next-line import/no-unresolved
import customExampleStickersCode from '!!raw-loader!../../../components/Examples/sticker/CustomStickerEditor/stickers';
// eslint-disable-next-line import/no-unresolved
import gettingStarted from '!!raw-loader!../../../components/Examples/sticker/gettingStarted';
// eslint-disable-next-line import/no-unresolved
// eslint-disable-next-line import/no-duplicates
import simpleExampleCode from '!!raw-loader!../../../components/Examples/sticker/SimpleStickerEditor';
// eslint-disable-next-line import/no-unresolved
import simpleExampleEditorStylesCode from '!!raw-loader!../../../components/Examples/sticker/SimpleStickerEditor/editorStyles.module.css';
// eslint-disable-next-line import/no-unresolved
import simpleExampleStickersCode from '!!raw-loader!../../../components/Examples/sticker/SimpleStickerEditor/stickers';
// eslint-disable-next-line import/no-unresolved
import webpackConfig from '!!raw-loader!../../../components/Examples/sticker/webpackConfig';
import React, { Component } from 'react';
import AlternateContainer from '../../../components/AlternateContainer/AlternateContainer';
import Code from '../../../components/Code/Code';
import Container from '../../../components/Container/Container';
// eslint-disable-next-line import/no-duplicates
import CustomStickerEditor from '../../../components/Examples/sticker/CustomStickerEditor';
// eslint-disable-next-line import/no-duplicates
import SimpleStickerEditor from '../../../components/Examples/sticker/SimpleStickerEditor';
import Heading from '../../../components/Heading/Heading';
import InlineCode from '../../../components/InlineCode/InlineCode';
import PluginPageFrame from '../../../components/PluginPageFrame/PluginPageFrame';
import styles from './styles.module.css';

export default class App extends Component {
  render() {
    return (
      <PluginPageFrame filePath={'packages/docs/pages/plugin/sticker/index.js'}>
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
          <Code code="npm install @draft-js-plugins/sticker" />
          <Code code={gettingStarted} name="gettingStarted.js" />
          <Heading level={3}>Importing the default styles</Heading>
          <p>
            The plugin ships with a default styling available at this location
            in the installed package: &nbsp;
            <InlineCode
              code={'node_modules/@draft-js-plugins/sticker/lib/plugin.css'}
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
                code={"import '@draft-js-plugins/sticker/lib/plugin.css';"}
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
                <span className={styles.subParamName}>sticker:</span> CSS class
                for sticker.
              </div>
              <div className={styles.subParam}>
                <span className={styles.subParamName}>stickerImage:</span> CSS
                class for sticker image tag.
              </div>
              <div className={styles.subParam}>
                <span className={styles.subParamName}>
                  stickerRemoveButton:
                </span>{' '}
                CSS class for sticker remove button.
              </div>
              <div className={styles.subParam}>
                <span className={styles.subParamName}>select:</span> CSS class
                for sticker select.
              </div>
              <div className={styles.subParam}>
                <span className={styles.subParamName}>selectPopover:</span> CSS
                class for sticker select popup.
              </div>
              <div className={styles.subParam}>
                <span className={styles.subParamName}>
                  selectClosedPopover:
                </span>{' '}
                CSS class for sticker select close button.
              </div>
              <div className={styles.subParam}>
                <span className={styles.subParamName}>
                  selectBottomGradient:
                </span>{' '}
                CSS class for sticker select bottom gradient.
              </div>
              <div className={styles.subParam}>
                <span className={styles.subParamName}>selectButton:</span> CSS
                class for button to open sticker select.
              </div>
              <div className={styles.subParam}>
                <span className={styles.subParamName}>
                  selectPressedButton:
                </span>{' '}
                CSS class for pressed state of button to open sticker select.
              </div>
              <div className={styles.subParam}>
                <span className={styles.subParamName}>selectStickerList:</span>{' '}
                CSS class for sticker select list.
              </div>
              <div className={styles.subParam}>
                <span className={styles.subParamName}>selectSticker:</span> CSS
                class for sticker select.
              </div>
              <div className={styles.subParam}>
                <span className={styles.subParamName}>selectStickerImage:</span>{' '}
                CSS class for sticker select image.
              </div>
            </div>
          </div>
          <div className={styles.param}>
            <span className={styles.paramName}>stickers</span>
            <span>Immutable.js List of stickers.</span>
          </div>
          <div className={styles.paramBig}>
            <span className={styles.paramName}>selectButtonContent</span>
            <span>
              Content of button which opens select sticker drop-down. (Default
              content is ☺)
            </span>
          </div>
          <div className={styles.paramBig}>
            <span className={styles.paramName}>attachRemoveButton</span>
            <span>
              Flag to attach or detach a remove button to stickers. (Default
              value is true)
            </span>
          </div>
        </Container>
        <Container>
          <Heading level={2}>Simple Example</Heading>
          <SimpleStickerEditor />
          <Code code={simpleExampleCode} name="SimpleStickerEditor.js" />
          <Code code={simpleExampleStickersCode} name="stickers.js" />
          <Code code={simpleExampleEditorStylesCode} name="editorStyles.css" />
        </Container>
        <Container>
          <Heading level={2}>Themed Sticker Example</Heading>
          <CustomStickerEditor />
          <Code code={customExampleCode} name="CustomStickerEditor.js" />
          <Code code={customExampleStickersCode} name="stickers.js" />
          <Code code={customExampleEditorStylesCode} name="editorStyles.css" />
        </Container>
      </PluginPageFrame>
    );
  }
}
