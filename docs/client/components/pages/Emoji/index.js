/* eslint-disable no-template-curly-in-string */
import React, { Component } from 'react';

// eslint-disable-next-line import/no-unresolved
import gettingStarted from '!!../../../loaders/prism-loader?language=javascript!./gettingStarted';
// eslint-disable-next-line import/no-unresolved
import simpleExampleCode from '!!../../../loaders/prism-loader?language=javascript!./SimpleEmojiEditor';
// eslint-disable-next-line import/no-unresolved
import simpleEditorStylesCode from '!!../../../loaders/prism-loader?language=css!./SimpleEmojiEditor/editorStyles.css';
// eslint-disable-next-line import/no-unresolved
import webpackConfig from '!!../../../loaders/prism-loader?language=javascript!./webpackConfig';
// eslint-disable-next-line import/no-unresolved
import webpackImport from '!!../../../loaders/prism-loader?language=javascript!./webpackImport';
// eslint-disable-next-line import/no-unresolved
import customExampleCode from '!!../../../loaders/prism-loader?language=javascript!./CustomEmojiEditor';

import styles from './styles.css';
import Container from '../../shared/Container';
import Heading from '../../shared/Heading';
import SocialBar from '../../shared/SocialBar';
import NavBar from '../../shared/NavBar';
import Separator from '../../shared/Separator';
import Code from '../../shared/Code';
import SimpleEmojiEditor from './SimpleEmojiEditor';
import CustomEmojiEditor from './CustomEmojiEditor';
import AlternateContainer from '../../shared/AlternateContainer';
import ExternalLink from '../../shared/Link';
import InlineCode from '../../shared/InlineCode';

const toneSelectStyles = `.emojiSelectPopoverToneSelect {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 2;
}`;
const priorityListCode = `priorityList: {
  ':see_no_evil:': ["1f648"],
  ':raised_hands:': ["1f64c"],
  ':100:': ["1f4af"],
}`;
const selectGroupsCode = `selectGroups: [{
  title: 'Society',
  icon: '👥',
  categories: ['people', 'food', 'travel'],
}, {
  title: 'Objects & symbols',
  icon: '❤️',
  categories: ['objects', 'symbols'],
}]`;

export default class App extends Component {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <div>
        <NavBar />
        <Separator />
        <Container>
          <Heading level={2}>Emoji</Heading>
          <p>
            Consistent Emoji display across all platforms, independent of the
            host system.
          </p>
          <Heading level={3}>Attribution to EmojiOne</Heading>
          <p>
            The beautiful Emoji art used in this plugin is provided by the{' '}
            <ExternalLink href="http://emojione.com/">Emoji One</ExternalLink>{' '}
            project. Personal or non-commercial use of the emojis do not require
            attribution. For the rights to use our emojis still for free in
            commercial projects proper attribution in form of a link is
            required. More here:{' '}
            <ExternalLink href="http://emojione.com/licensing">
              http://emojione.com/licensing
            </ExternalLink>.
          </p>
          <Heading level={3}>Implementation</Heading>
          <p>
            Emoji unicode characters are wrapped in a span, hidden, and
            displayed instead through a background image. This creates
            consistency across all platforms while maintaining natural
            copy/pasting functionality.
          </p>
          <p>
            If useNativeArt parameter is used, emoji unicode characters are
            displayed. This enables displaying platform specific art for emojis.
          </p>
          <Heading level={3}>Usage</Heading>
          <p>
            To use simply type <code>:</code> which will show an autocomplete
            with matching emojis.
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
          <Code code="npm install draft-js-plugins-editor" />
          <Code code="npm install draft-js-emoji-plugin" />
          <Code code={gettingStarted} name="gettingStarted.js" />
          <Heading level={3}>Importing the default styles</Heading>
          <p>
            The plugin ships with a default styling available at this location
            in the installed package: &nbsp;
            <InlineCode
              code={'node_modules/draft-js-emoji-plugin/lib/plugin.css'}
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
              <Code code={webpackImport} className={styles.guideCodeBlock} />
            </li>
            <li className={styles.listEntry}>4. Restart Webpack.</li>
          </ul>
          <Heading level={4}>Browserify Usage</Heading>
          <p>
            Please help, by submiting a Pull Request to the{' '}
            <ExternalLink href="https://github.com/draft-js-plugins/draft-js-plugins/blob/master/docs/client/components/pages/Emoji/index.js">
              documentation
            </ExternalLink>.
          </p>
        </AlternateContainer>
        <Container>
          <Heading level={2}>Configuration Parameters</Heading>
          <div className={styles.param}>
            <span className={styles.paramName}>theme</span>
            <span>Object of CSS classes with the following keys.</span>
            <div className={styles.subParams}>
              <div className={styles.subParam}>
                <span className={styles.subParamName}>emoji:</span>
                CSS class for the emoji wrapper.
              </div>
              <div className={styles.subParam}>
                <span className={styles.subParamName}>emojiSuggestions:</span>
                CSS class for suggestions component.
              </div>
              <div className={styles.subParam}>
                <span className={styles.subParamName}>
                  emojiSuggestionsEntry:
                </span>
                CSS class for an entry in the suggestions component.
              </div>
              <div className={styles.subParam}>
                <span className={styles.subParamName}>
                  emojiSuggestionsEntryFocused:
                </span>
                CSS class for the focused entry in the suggestions component.
              </div>
              <div className={styles.subParam}>
                <span className={styles.subParamName}>
                  emojiSuggestionsEntryText:
                </span>
                CSS class for an entry’s text in the suggestions component.
              </div>
              <div className={styles.subParam}>
                <span className={styles.subParamName}>
                  emojiSuggestionsEntryIcon:
                </span>
                CSS class for an entry’s emoji image in the suggestions
                component.
              </div>
              {/* EmojiSelect styles */}
              <div className={styles.subParam}>
                <span className={styles.subParamName}>emojiSelect:</span>
                CSS class for emoji select component.
              </div>
              <div className={styles.subParam}>
                <span className={styles.subParamName}>emojiSelectButton:</span>
                CSS class for button to open emoji select popup.
              </div>
              <div className={styles.subParam}>
                <span className={styles.subParamName}>
                  emojiSelectButtonPressed:
                </span>
                CSS class for pressed state of button to open emoji select
                popup.
              </div>
              <div className={styles.subParam}>
                <span className={styles.subParamName}>emojiSelectPopover:</span>
                CSS class for emoji select popup.
              </div>
              <div className={styles.subParam}>
                <span className={styles.subParamName}>
                  emojiSelectPopoverClosed:
                </span>
                CSS class for closed state of the emoji select popup.
              </div>
              <div className={styles.subParam}>
                <span className={styles.subParamName}>
                  emojiSelectPopoverTitle:
                </span>
                CSS class for a title of active group in the emoji select popup.
              </div>
              <div className={styles.subParam}>
                <span className={styles.subParamName}>
                  emojiSelectPopoverGroups:
                </span>
                CSS class for the emoji groups wrapper in the emoji select
                popup.
              </div>
              <div className={styles.subParam}>
                <span className={styles.subParamName}>
                  emojiSelectPopoverGroup:
                </span>
                CSS class for a group of emojis in the emoji select popup.
              </div>
              <div className={styles.subParam}>
                <span className={styles.subParamName}>
                  emojiSelectPopoverGroupTitle:
                </span>
                CSS class for a title of emoji group in the emoji select popup.
              </div>
              <div className={styles.subParam}>
                <span className={styles.subParamName}>
                  emojiSelectPopoverGroupList:
                </span>
                CSS class for a group emoji list in the emoji select popup.
              </div>
              <div className={styles.subParam}>
                <span className={styles.subParamName}>
                  emojiSelectPopoverGroupItem:
                </span>
                CSS class for a group emoji list item in the emoji select popup.
              </div>
              <div className={styles.subParam}>
                <span className={styles.subParamName}>
                  emojiSelectPopoverToneSelect:
                </span>
                CSS class for tone select in the emoji select popup.
                <div>
                  <em>
                    Important. The tone select must overlap the emoji select
                    popup so that disable controls of the popup. By default
                  </em>
                  <Code code={toneSelectStyles} />
                </div>
              </div>
              <div className={styles.subParam}>
                <span className={styles.subParamName}>
                  emojiSelectPopoverToneSelectList:
                </span>
                CSS class for a tone select emoji list in the emoji select
                popup.
              </div>
              <div className={styles.subParam}>
                <span className={styles.subParamName}>
                  emojiSelectPopoverToneSelectItem:
                </span>
                CSS class for a tone select emoji list item in the emoji select
                popup.
              </div>
              <div className={styles.subParam}>
                <span className={styles.subParamName}>
                  emojiSelectPopoverEntry:
                </span>
                CSS class for an emoji entry in the emoji select popup
                (including tone select).
              </div>
              <div className={styles.subParam}>
                <span className={styles.subParamName}>
                  emojiSelectPopoverEntryFocused:
                </span>
                CSS class for the focused emoji entry in the emoji select popup
                (including tone select).
              </div>
              <div className={styles.subParam}>
                <span className={styles.subParamName}>
                  emojiSelectPopoverEntryIcon:
                </span>
                CSS class for an emoji entry’s image in the emoji select popup
                (including tone select).
              </div>
              <div className={styles.subParam}>
                <span className={styles.subParamName}>
                  emojiSelectPopoverNav:
                </span>
                CSS class for a group navigation in the emoji select popup.
              </div>
              <div className={styles.subParam}>
                <span className={styles.subParamName}>
                  emojiSelectPopoverNavItem:
                </span>
                CSS class for a group navigation item in the emoji select popup.
              </div>
              <div className={styles.subParam}>
                <span className={styles.subParamName}>
                  emojiSelectPopoverNavEntry:
                </span>
                CSS class for an entry of the group navigation in the emoji
                select popup.
              </div>
              <div className={styles.subParam}>
                <span className={styles.subParamName}>
                  emojiSelectPopoverNavEntryActive:
                </span>
                CSS class for active state of the group navigation entry in the
                emoji select popup.
              </div>
              <div className={styles.subParam}>
                <span className={styles.subParamName}>
                  emojiSelectPopoverScrollbar:
                </span>
                CSS class for scrollbar in the emoji select popup.
              </div>
              <div className={styles.subParam}>
                <span className={styles.subParamName}>
                  emojiSelectPopoverScrollbarThumb:
                </span>
                CSS class for scrollbar thumb in the emoji select popup.
              </div>
            </div>
          </div>
          <div className={styles.paramBig}>
            <span className={styles.paramName}>imagePath</span>
            <span>
              The Emojis are displayed using SVGs. The full path is constructed
              of multiple parts like this:{' '}
              {'`${imagePath}${unicode}.${imageType}${cacheBustParam}`'}. The
              default imagePath is:
              &apos;//cdn.jsdelivr.net/emojione/assets/svg/&apos;, but can be
              overwritten with this config.
            </span>
          </div>
          <div className={styles.paramBig}>
            <span className={styles.paramName}>imageType</span>
            <span>
              The default imageType is: &apos;svg&apos;, but can be overwritten
              with this config.
            </span>
          </div>
          <div className={styles.paramBig}>
            <span className={styles.paramName}>allowImageCache</span>
            <span>
              By default {'${cacheBustParam}'} is being changed with the new
              version. If you want to skip the cache busting, you can use this
              property. The default value of allowImageCache is:&nbsp;<InlineCode
                code={'false'}
              />
            </span>
          </div>
          <div className={styles.paramBig}>
            <span className={styles.paramName}>positionSuggestions</span>
            <span>
              The function can be used to manipulate the position of the popover
              containing the suggestions. It receives one object as arguments
              containing the visible rectangle surrounding the decorated search
              string including the colon. In addition the object contains
              prevProps, prevState, state & props. An object should be returned
              which can contain all sorts of styles. The defined properties will
              be applied as inline-styles.
            </span>
          </div>
          <div className={styles.paramBig}>
            <span className={styles.paramName}>priorityList</span>
            <div>
              These entries will be show first in the EmojiSuggestions dropdown
              after typing `:`. Must be an object which must contain Emoji
              entries used by EmojiOne e.g.
              <Code code={priorityListCode} />
            </div>
          </div>
          <div className={styles.paramBig}>
            <span className={styles.paramName}>selectGroups</span>
            <div>
              Emoji select groups specification. Must be an array of objects,
              which declare each group: title, icon (can be a string or React
              element), array of emoji categories from EmojiOne e.g.
              <Code code={selectGroupsCode} />
            </div>
          </div>
          <div className={styles.paramBig}>
            <span className={styles.paramName}>selectButtonContent</span>
            <span>
              Content of button which opens emoji select popup. (Default content
              is ☺)
            </span>
          </div>
          <div className={styles.paramBig}>
            <span className={styles.paramName}>toneSelectOpenDelay</span>
            <span>
              Time delay before opening tone select. (Default value is
              500&nbsp;ms)
            </span>
          </div>
          <div className={styles.paramBig}>
            <span className={styles.paramName}>useNativeArt</span>
            <span>
              If set to <InlineCode code={'true'} />, uses host system art for
              emojis instead of EmojiOne art. Default value is{' '}
              <InlineCode code={'false'} />.
            </span>
          </div>
          <Heading level={3}>EmojiSuggestions</Heading>
          <div>
            The EmojiSuggestions component is part of the plugin and should
            placed somewhere in the JSX after the Editor. It takes the following
            props:
            <div className={styles.paramBig}>
              <span className={styles.paramName}>onSearchChange</span>
              <span>
                A callback which is triggered whenever the search term changes.
                The first argument is an object which constains the search term
                in the property value.
              </span>
            </div>
            <div className={styles.paramBig}>
              <span className={styles.paramName}>onOpen</span>
              <span>
                A callback which is triggered whenever the suggestions popover
                opens.
              </span>
            </div>
            <div className={styles.paramBig}>
              <span className={styles.paramName}>onClose</span>
              <span>
                A callback which is triggered whenever the suggestions popover
                closes.
              </span>
            </div>
          </div>
        </Container>
        <Container>
          <Heading level={2}>Simple Emoji Example</Heading>
          <SimpleEmojiEditor />
          <Code code={simpleExampleCode} name="SimpleEmojiEditor.js" />
          <Code code={simpleEditorStylesCode} name="editorStyles.js" />
        </Container>
        <Container>
          <Heading level={2}>Custom Emoji Example with native emojis</Heading>
          <CustomEmojiEditor />
          <Code code={customExampleCode} name="SimpleEmojiEditor.js" />
        </Container>
        <SocialBar />
      </div>
    );
  }
}
