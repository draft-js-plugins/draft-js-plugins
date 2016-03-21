import React, { Component } from 'react';
import Container from '../../shared/Container';
import AlternateContainer from '../../shared/AlternateContainer';
import Heading from '../../shared/Heading';
import styles from './styles.css';
import Code from '../../shared/Code';
import SimpleStickerEditor from './SimpleStickerEditor';
import CustomStickerEditor from './CustomStickerEditor';
import simpleExampleCode from '!!../../../loaders/prism-loader?language=javascript!./SimpleStickerEditor';
import customExampleCode from '!!../../../loaders/prism-loader?language=javascript!./CustomStickerEditor';
import customExampleStylesCode from '!!../../../loaders/prism-loader?language=css!./CustomStickerEditor/styles.css';
import gettingStarted from '!!../../../loaders/prism-loader?language=javascript!./gettingStarted';
import SocialBar from '../../shared/SocialBar';

export default class App extends Component {
  render() {
    return (
      <div>
        <Container>
          <Heading level={ 2 }>Sticker</Heading>
          <div className={ styles.root }>Sticker</div>
        </Container>
        <AlternateContainer>
          <Heading level={ 2 }>Getting Started</Heading>
          <Code code="npm install draft-js-sticker-plugin --save" />
          <Code code={ gettingStarted } name="gettingStarted.js" />
        </AlternateContainer>
        <Container>
          <Heading level={ 2 }>Simple Example</Heading>
          <SimpleStickerEditor />
          <Code code={ simpleExampleCode } name="SimpleStickerEditor.js" />
        </Container>
        <Container>
          <Heading level={ 2 }>Themed Sticker Example</Heading>
          <CustomStickerEditor />
          <Code code={ customExampleCode } name="CustomStickerEditor.js" />
          <Code code={ customExampleStylesCode } name="styles.css" />
        </Container>
        <Container>
          <Heading level={ 2 }>Configuration Parameters</Heading>
          <div>
            <span className={ styles.paramName }>theme</span>
            <span>Map of CSS classes to style the plugin.</span>
            <table className={ styles.themeTable }>
              <tbody>
                <tr>
                  <td className={ styles.themeProperty }>sticker</td>
                  <td>CSS class to be applied to </td>
                </tr>
                <tr>
                  <td className={ styles.themeProperty }>stickerImage</td>
                  <td>CSS class to be applied to </td>
                </tr>
                <tr>
                  <td className={ styles.themeProperty }>stickerRemoveButton</td>
                  <td>CSS class to be applied to </td>
                </tr>
                <tr>
                  <td className={ styles.themeProperty }>select</td>
                  <td>CSS class to be applied to </td>
                </tr>
                <tr>
                  <td className={ styles.themeProperty }>selectPopover</td>
                  <td>CSS class to be applied to </td>
                </tr>
                <tr>
                  <td className={ styles.themeProperty }>selectClosedPopover</td>
                  <td>CSS class to be applied to </td>
                </tr>
                <tr>
                  <td className={ styles.themeProperty }>selectBottomGradient</td>
                  <td>CSS class to be applied to </td>
                </tr>
                <tr>
                  <td className={ styles.themeProperty }>selectButton</td>
                  <td>CSS class to be applied to </td>
                </tr>
                <tr>
                  <td className={ styles.themeProperty }>selectPressedButton</td>
                  <td>CSS class to be applied to </td>
                </tr>
                <tr>
                  <td className={ styles.themeProperty }>selectStickerList</td>
                  <td>CSS class to be applied to </td>
                </tr>
                <tr>
                  <td className={ styles.themeProperty }>selectSticker</td>
                  <td>CSS class to be applied to </td>
                </tr>
                <tr>
                  <td className={ styles.themeProperty }>selectStickerImage</td>
                  <td>CSS class to be applied to </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <span className={ styles.paramName }>stickers</span>
            <span>Immutable list of stickers.</span>
          </div>
          <div>
            <span className={ styles.paramName }>selectButtonContent</span>
            <span>Content of button which opens select sticker drop-down. (Default content is ☺)</span>
          </div>
          <div>
            <span className={ styles.paramName }>attachRemoveButton</span>
            <span>Flag to attach or non-attach remove button to stickers. (Default value is true)</span>
          </div>
        </Container>
        <SocialBar />
      </div>

    );
  }
}
