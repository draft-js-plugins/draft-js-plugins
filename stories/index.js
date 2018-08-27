import React from 'react';
import 'style-loader!css-loader!draft-js/dist/Draft.css'; // eslint-disable-line import/no-unresolved

import { storiesOf } from '@storybook/react';
import SimpleAlignmentEditor from './alignment/src/App';
import ResizableEditor from './resizable/src/App';
import AnchorSimpleLinkPluginEditor from './inline-toolbar-with-anchor-plugin/src/App';
import SimpleCounterEditor from './counter-plugin-simple/src/App';
import DragNDropImageEditor from './drag-n-drop/src/App';
import SimpleEmojiEditor from './emoji/src/App';
import CustomEmojiEditor from './emoji-styled/src/App';
import SimpleFocusEditor from './focus/src/App';
import KitchenSink from './kitchensink/src/App';
import SimpleHashtagEditor from './hashtag/src/App';
import CustomHashtagEditor from './hashtag-styled/src/App';
import SimpleImageEditor from './displaying-images/src/App';
import CustomImageEditor from './align-drag-focus-and-resize-images/src/App';
import AddImageEditor from './adding-images/src/App';
import SimpleInlineToolbarEditor from './inline-toolbar/src/App';
import CustomInlineToolbarEditor from './inline-toolbar-custom-buttons/src/App';
import ThemedInlineToolbarEditor from './inline-toolbar-custom-styled/src/App';
import RelativeParentInlineToolbarEditor from './inline-toolbar-relative-parent/src/App';
import SimpleLinkifyEditor from './linkify/src/App';
import CustomLinkifyEditor from './linkify-configured/src/App';
import SimpleMentionEditor from './mentions/src/App';
import RemoteMentionEditor from './mentions-remote/src/App';
import CustomMentionEditor from './mentions-custom-styled/src/App';
import CustomComponentMentionEditor from './mentions-custom-component/src/App';
import MentionEditorWithCustomTrigger from './mentions-custom-trigger/src/App';
import MentionEditorWithWhitespaceSupport from './mentions-with-whitespace/src/App';
import SimpleSideToolbarEditor from './side-toolbar/src/App';
import CustomSideToolbarEditor from './side-toolbar-custom/src/App';
import RelativeParentSideToolbarEditor from './side-toolbar-relative-parent/src/App';
import SimpleStickerEditor from './sticker/src/App';
import SimpleUndoEditor from './undo/src/App';
import SimpleVideoEditor from './video/src/App';
import CustomAddVideoEditor from './adding-video/src/App';
import CustomToolbarEditor from './static-toolbar-custom-buttons/src/App';
import ThemedToolbarEditor from './static-toolbar-styled/src/App';
import SimpleToolbarEditor from './static-toolbar/src/App';
import DividerWithSideToolbarEditor from './divider-with-side-toolbar/src/App';

storiesOf('Draft.js Plugins', module)
  .add('Editor with Alignment Plugin', () => <SimpleAlignmentEditor />)
  .add('Editor with Anchor Plugin', () => <AnchorSimpleLinkPluginEditor />)
  .add('Editor with Counter Plugin', () => <SimpleCounterEditor />)
  .add('Editor with DragNDrop plugin and image plugin', () => <DragNDropImageEditor />)
  .add('Editor with Emoji Plugin using emoji-one plugins', () => <SimpleEmojiEditor />)
  .add('Editor with Emoji Plugin using native emojis', () => <CustomEmojiEditor />)
  .add('Editor with Focus Plugin', () => <SimpleFocusEditor />)
  .add('Editor with Hashtag Plugin', () => <SimpleHashtagEditor />)
  .add('Editor with custom themed Hashtag Plugin', () => <CustomHashtagEditor />)
  .add('Editor with Image Plugin', () => <SimpleImageEditor />)
  .add('Editor with Image Plugin and a few others: drag and drop, alignment, resizable, focus', () => <CustomImageEditor />)
  .add('Editor with Image Plugin and Add mechanism', () => <AddImageEditor />)
  .add('Editor with default inline toolbar plugin', () => <SimpleInlineToolbarEditor />)
  .add('Editor with inline toolbar plugin containing all buttons', () => <CustomInlineToolbarEditor />)
  .add('Editor with custom themed toolbar plugin', () => <ThemedInlineToolbarEditor />)
  .add('Inline Toolbar with relatively positioned parent', () => <RelativeParentInlineToolbarEditor />)
  .add('Editor with Linkify Plugin', () => <SimpleLinkifyEditor />)
  .add('Editor with Linkify Plugin and configured to render links with - target: _blank', () => <CustomLinkifyEditor />)
  .add('Editor with Mention Plugin', () => <SimpleMentionEditor />)
  .add('Editor with Mention Plugin and asynchronously loaded Suggestions', () => <RemoteMentionEditor />)
  .add('Editor with custom themed Mention Plugin', () => <CustomMentionEditor />)
  .add('Mentions with styled suggestions', () => <CustomComponentMentionEditor />)
  .add('Mentions with a custom trigger', () => <MentionEditorWithCustomTrigger />)
  .add('Mentions with whitespace', () => <MentionEditorWithWhitespaceSupport />)
  .add('Sidebar', () => <SimpleSideToolbarEditor />)
  .add('Styled Sidebar', () => <CustomSideToolbarEditor />)
  .add('Sidebar with relatively positioned parent', () => <RelativeParentSideToolbarEditor />)
  .add('Editor with Sticker Plugin', () => <SimpleStickerEditor />)
  .add('Editor with Undo Plugin', () => <SimpleUndoEditor />)
  .add('Editor with Video Plugin', () => <SimpleVideoEditor />)
  .add('Editor with Video Plugin and Add Video Button', () => <CustomAddVideoEditor />)
  .add('Kitchen Sink', () => <KitchenSink />)
  .add('Resizable Editor', () => <ResizableEditor />)
  .add('CustomToolbarEditor', () => <CustomToolbarEditor />)
  .add('Simple toolbar editor', () => <SimpleToolbarEditor />)
  .add('ThemedToolbarEditor', () => <ThemedToolbarEditor />)
  .add('Divider with SideToolbar', () => <DividerWithSideToolbarEditor />);
