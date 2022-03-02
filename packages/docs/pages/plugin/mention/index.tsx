// eslint-disable-next-line import/no-unresolved
// eslint-disable-next-line import/no-duplicates
import customComponentExampleCode from '!!raw-loader!../../../components/Examples/mention/CustomComponentMentionEditor/CustomComponentMentionEditor';
// eslint-disable-next-line import/no-unresolved
import customComponentExampleStylesCode from '!!raw-loader!../../../components/Examples/mention/CustomComponentMentionEditor/CustomComponentMentionEditor.module.css';
// eslint-disable-next-line import/no-unresolved
// eslint-disable-next-line import/no-duplicates
import customExampleCode from '!!raw-loader!../../../components/Examples/mention/CustomMentionEditor/CustomMentionEditor';
// eslint-disable-next-line import/no-unresolved
import customExampleEditorStylesCode from '!!raw-loader!../../../components/Examples/mention/CustomMentionEditor/CustomMentionEditor.module.css';
// eslint-disable-next-line import/no-unresolved
import customExampleMentionsCode from '!!raw-loader!../../../components/Examples/mention/CustomMentionEditor/Mentions';
// eslint-disable-next-line import/no-unresolved
import customExampleMentionsStylesCode from '!!raw-loader!../../../components/Examples/mention/CustomMentionEditor/MentionsStyles.module.css';
// eslint-disable-next-line import/no-unresolved
// eslint-disable-next-line import/no-duplicates
import multiComponentExampleCode from '!!raw-loader!../../../components/Examples/mention/MultiMentionTriggers/MultiMentionTriggers';
// eslint-disable-next-line import/no-unresolved
import multiComponentExampleStylesCode from '!!raw-loader!../../../components/Examples/mention/MultiMentionTriggers/MultiMentionTriggers.module.css';
// eslint-disable-next-line import/no-unresolved
// eslint-disable-next-line import/no-duplicates
import remoteExampleCode from '!!raw-loader!../../../components/Examples/mention/RemoteMentionEditor/RemoteMentionEditor';
// eslint-disable-next-line import/no-unresolved
import remoteExampleEditorStylesCode from '!!raw-loader!../../../components/Examples/mention/RemoteMentionEditor/RemoteMentionEditor.module.css';
// eslint-disable-next-line import/no-unresolved
import simpleExampleMentionsCode from '!!raw-loader!../../../components/Examples/mention/SimpleMentionEditor/Mentions';
// eslint-disable-next-line import/no-unresolved
// eslint-disable-next-line import/no-duplicates
import simpleExampleCode from '!!raw-loader!../../../components/Examples/mention/SimpleMentionEditor/SimpleMentionEditor';
// eslint-disable-next-line import/no-unresolved
import simpleExampleEditorStylesCode from '!!raw-loader!../../../components/Examples/mention/SimpleMentionEditor/SimpleMentionEditor.module.css';
// eslint-disable-next-line import/no-unresolved
import webpackConfig from '!!raw-loader!../../../components/Examples/mention/webpackConfig';
import React, { ReactElement } from 'react';
import AlternateContainer from '../../../components/AlternateContainer/AlternateContainer';
import Code from '../../../components/Code/Code';
import Container from '../../../components/Container/Container';
// eslint-disable-next-line import/no-duplicates
import CustomComponentMentionEditor from '../../../components/Examples/mention/CustomComponentMentionEditor/CustomComponentMentionEditor';
// eslint-disable-next-line import/no-duplicates
import CustomMentionEditor from '../../../components/Examples/mention/CustomMentionEditor/CustomMentionEditor';
// eslint-disable-next-line import/no-duplicates
import MultiMentionTriggers from '../../../components/Examples/mention/MultiMentionTriggers/MultiMentionTriggers';
// eslint-disable-next-line import/no-duplicates
import RemoteMentionEditor from '../../../components/Examples/mention/RemoteMentionEditor/RemoteMentionEditor';
// eslint-disable-next-line import/no-duplicates
import SimpleMentionEditor from '../../../components/Examples/mention/SimpleMentionEditor/SimpleMentionEditor';
import Heading from '../../../components/Heading/Heading';
import InlineCode from '../../../components/InlineCode/InlineCode';
import ExternalLink from '../../../components/Link/Link';
import PluginPageFrame from '../../../components/PluginPageFrame/PluginPageFrame';
import styles from './Mention.module.css';

export default function Mention(): ReactElement {
  return (
    <PluginPageFrame filePath={'packages/docs/pages/plugin/mention/index.tsx'}>
      <Container>
        <Heading level={2}>Mention</Heading>
        <p>
          Mentions for everyone! This plugin allows the user to choose an entry
          from a list. After selection an entry the search text will be replace
          with the selected entity. The list of suggestions mentions needs to
          contain at least a name to display. If desired a link and/or an avatar
          image can be provided.
        </p>
        <Heading level={3}>Escape Behaviour</Heading>
        <p>
          While the suggestion popover is open, the user can close it by
          pressing ESC. This will be stored for as long as the the selection
          stays inside the word that triggered the search. After the selection
          left this word once the escape behaviour will be reset. The
          suggestions will appear again once the user selects the word that that
          triggered the selection.
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
        <Code code="npm install @draft-js-plugins/mention" />
        <Code code="Please checkout the 'Simple Example' further down the page." />
        <Heading level={3}>Importing the default styles</Heading>
        <p>
          The plugin ships with a default styling available at this location in
          the installed package: &nbsp;
          <InlineCode
            code={'node_modules/@draft-js-plugins/mention/lib/plugin.css'}
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
              code={"import '@draft-js-plugins/mention/lib/plugin.css';"}
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
              <span className={styles.subParamName}>mention:</span>
              CSS class for mention text.
            </div>
            <div className={styles.subParam}>
              <span className={styles.subParamName}>mentionSuggestions:</span>
              CSS class for suggestions component.
            </div>
            <div className={styles.subParam}>
              <span className={styles.subParamName}>
                mentionSuggestionsPopup:
              </span>
              CSS class for popup.js suggestions component.
            </div>
            <div className={styles.subParam}>
              <span className={styles.subParamName}>
                mentionSuggestionsPopupVisible:
              </span>
              CSS class for popup.js suggestions component when it is visible.
              Can be used for animations.
            </div>
            <div className={styles.subParam}>
              <span className={styles.subParamName}>
                mentionSuggestionsEntry:
              </span>
              CSS class for an entry in the suggestions component.
            </div>
            <div className={styles.subParam}>
              <span className={styles.subParamName}>
                mentionSuggestionsEntryFocused:
              </span>
              CSS class for the focused entry in the suggestions component.
            </div>
            <div className={styles.subParam}>
              <span className={styles.subParamName}>
                mentionSuggestionsEntryText:
              </span>
              CSS class for an entry’s text in the suggestions component.
            </div>
            <div className={styles.subParam}>
              <span className={styles.subParamName}>
                mentionSuggestionsEntryAvatar:
              </span>
              CSS class for an entry’s avatar image in the suggestions
              component.
            </div>
          </div>
        </div>
        <div className={styles.param}>
          <span className={styles.paramName}>positionSuggestions</span>
          <span>
            <b>Deprecated, use popperOptions instead</b> The function can be
            used to manipulate the position of the popover containing the
            suggestions. It receives one object as arguments containing the
            visible rectangle surrounding the decorated search string including
            the @. In addition the object contains prevProps and props. An
            object should be returned which can contain all sorts of styles. The
            defined properties will be applied as inline-styles.
          </span>
        </div>
        <div className={styles.param}>
          <span className={styles.paramName}>popperOptions</span>
          <span>
            This options will be used to initialize popper.js. Read in detail
            about it{' '}
            <ExternalLink href=" https://popper.js.org/docs/v2/">
              here.
            </ExternalLink>
          </span>
        </div>
        <div className={styles.param}>
          <span className={styles.paramName}>entityMutability</span>
          <span>
            Can be one of: &quot;IMMUTABLE&quot;, &quot;SEGMENTED&quot; or
            &quot;MUTABLE&quot;. Read in detail about it
            <ExternalLink href="https://draftjs.org/docs/advanced-topics-entities/#mutability">
              &nbsp;here
            </ExternalLink>
          </span>
        </div>
        <div className={styles.param}>
          <span className={styles.paramName}>mentionPrefix</span>
          <span>
            By default it is an empty String. For Twitter or Slack like mention
            behaviour you can provide an `@`
          </span>
        </div>
        <div className={styles.param}>
          <span className={styles.paramName}>mentionTrigger</span>
          <span>
            Allows you to provide a array custom character to change when the
            search is triggered. By default it is set to `@`. By default typing
            `@` will trigger the search for mentions. It also does support a
            multi-charater mentionTrigger. You can use it like `mentionTrigger:
            [&apos;@&apos;, &apos;(&apos;]`.
          </span>
        </div>
        <div className={styles.param}>
          <span className={styles.paramName}>mentionRegExp</span>
          <span>
            Allows you to overwrite the regular expression for initiating the
            dropdown. By default this supports any alphanumeric character as
            well as Chinese, Japanese & Korean characters. We are happy to
            accept pull requests to extend the default mentionRegExp as well.
          </span>
        </div>
        <div className={styles.param}>
          <span className={styles.paramName}>supportWhitespace</span>
          <span>
            Allows you to support a whitespace while typing a search option,
            useful for searching first and last names. By default this is set to
            `false`
          </span>
        </div>
        <div className={styles.param}>
          <span className={styles.paramName}>mentionComponent</span>
          <span>
            If provided the passed component is used to render a Mention. It
            receives the following props: entityKey, mention, className &
            decoratedText
          </span>
        </div>
        <Heading level={3}>MentionSuggestions</Heading>
        <div>
          The MentionSuggestions component is part of the plugin and should
          placed somewhere in the JSX after the Editor. It takes the following
          props:
          <div className={styles.param}>
            <span className={styles.paramName}>open</span>
            <span>Controlled state of mention popup.</span>
          </div>
          <div className={styles.param}>
            <span className={styles.paramName}>onOpenChange</span>
            <span>
              A callback which is triggered whenever the suggestions popover
              should be opened or closed.
            </span>
          </div>
          <div className={styles.param}>
            <span className={styles.paramName}>suggestions</span>
            <span>The list of suggestions to be shown.</span>
          </div>
          <div className={styles.param}>
            <span className={styles.paramName}>onSearchChange</span>
            <span>
              A callback which is triggered whenever the search term changes.
              The first argument is an object which contains the search term in
              the property value.
            </span>
          </div>
          <div className={styles.param}>
            <span className={styles.paramName}>entryComponent</span>
            <span>
              Component to be used as the template for each of the suggestions
              entry.
            </span>
          </div>
          <div className={styles.param}>
            <span className={styles.paramName}>onAddMention</span>
            <span>
              A callback which is triggered whenever the mention is about to be
              added. The first argument of this callback will contain the
              mention entry.
            </span>
          </div>
          <div className={styles.param}>
            <span className={styles.paramName}>popoverComponent</span>
            <span>
              <b>Deprecated, use popperOptions/popoverContainer instead</b>{' '}
              Component to be used as the template for the popover (the parent
              of entryComponent). Defaults to a div.
            </span>
          </div>
          <div className={styles.param}>
            <span className={styles.paramName}>popoverContainer</span>
            <span>
              Defaults to a div which is bound to popper.js. If don&apos;t want
              to have a popover you can overwrite the component with you own.
            </span>
          </div>
          <div className={styles.param}>
            <span className={styles.paramName}>renderEmptyPopup</span>
            <span>
              If set to true if will render the popup even if there are no
              mentions to show. This can for example be used to show a message
              that there are no matching mentions.
            </span>
          </div>
          <div className={styles.param}>
            <span className={styles.paramName}>
              mentionSuggestionsComponent
            </span>
            <span>
              Component to be used to render the suggestions dropdown. It must
              implement the same interface like{' '}
              <InlineCode code="MentionSuggestions" />. Defaults to{' '}
              <InlineCode code="MentionSuggestions" />.
            </span>
          </div>
          <div className={styles.param}>
            <span>
              Additional properties are passed to the{' '}
              <InlineCode code="popoverComponent" />
            </span>
          </div>
        </div>
        <Heading level={3}>Additional Exports</Heading>
        <div>
          In addition to the plugin the module exports{' '}
          <InlineCode code={'defaultSuggestionsFilter'} />. As first argument it
          takes the search term as a String. The second argument is an array of
          mentions. The third argument is a trigger that is used to filter multi
          mentions. The function returns the filter list based on substring
          matches.
          <Code code="import { defaultSuggestionsFilter } from '@draft-js-plugins/mention';" />
        </div>
      </Container>
      <Container>
        <Heading level={2}>Simple Example</Heading>
        <SimpleMentionEditor />
        <Code
          code={simpleExampleCode as unknown as string}
          name="SimpleMentionEditor.tsx"
        />
        <Code
          code={simpleExampleMentionsCode as unknown as string}
          name="Mentions.ts"
        />
        <Code
          code={simpleExampleEditorStylesCode}
          name="SimpleMentionEditor.module.css"
        />
      </Container>
      <Container>
        <Heading level={2}>Custom Themed Mention Example</Heading>
        <CustomMentionEditor />
        <Code
          code={customExampleCode as unknown as string}
          name="CustomMentionEditor.ts"
        />
        <Code
          code={customExampleMentionsStylesCode}
          name="MentionsStyles.module.css"
        />
        <Code
          code={customExampleMentionsCode as unknown as string}
          name="Mentions.ts"
        />
        <Code
          code={customExampleEditorStylesCode}
          name="CustomMentionEditor.module.css"
        />
      </Container>
      <Container>
        <Heading level={2}>Remote Data Mention Example</Heading>
        <RemoteMentionEditor />
        <Code
          code={remoteExampleCode as unknown as string}
          name="RemoteMentionEditor.tsx"
        />
        <Code
          code={remoteExampleEditorStylesCode}
          name="RemoteMentionEditor.module.css"
        />
      </Container>
      <Container>
        <Heading level={2}>Custom Mention Component Example</Heading>
        <CustomComponentMentionEditor />
        <Code
          code={customComponentExampleCode as unknown as string}
          name="CustomComponentMentionEditor.tsx"
        />
        <Code
          code={customComponentExampleStylesCode}
          name="CustomComponentMentionEditor.module.css"
        />
      </Container>
      <Container>
        <Heading level={2}>Multi Mention Triggers</Heading>
        <MultiMentionTriggers />
        <Code
          code={multiComponentExampleCode as unknown as string}
          name="MultiMentionTriggers.tsx"
        />
        <Code
          code={multiComponentExampleStylesCode}
          name="MultiMentionTriggers.module.css"
        />
      </Container>
    </PluginPageFrame>
  );
}
