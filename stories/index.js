import React from 'react';
import 'draft-js/dist/Draft.css';

import { storiesOf } from '@storybook/react';
import SimpleAlignmentEditor from './alignment/src/SimpleAlignmentEditor';
import ResizableEditor from './resizable/src/ResizableEditor';
import AnchorSimpleLinkPluginEditor from './inline-toolbar-with-anchor-plugin/src/AnchorSimpleLinkPluginEditor';
import SimpleCounterEditor from './counter-plugin-simple/src/SimpleCounterEditor';
import DragNDropImageEditor from './drag-n-drop/src/DragNDropImageEditor';
import SimpleEmojiEditor from './emoji/src/SimpleEmojiEditor';
import CustomEmojiEditor from './emoji-styled/src/CustomEmojiEditor';
import SimpleFocusEditor from './focus/src/SimpleFocusEditor';
import KitchenSink from './kitchensink/src/KitchenSink';
import SimpleHashtagEditor from './hashtag/src/SimpleHashtagEditor';
import CustomHashtagEditor from './hashtag-styled/src/CustomHashtagEditor';
import SimpleImageEditor from './displaying-images/src/SimpleImageEditor';
import CustomImageEditor from './align-drag-focus-and-resize-images/src/CustomImageEditor';
import AddImageEditor from './adding-images/src/AddImageEditor';
import SimpleInlineToolbarEditor from './inline-toolbar/src/SimpleInlineToolbarEditor';
import CustomInlineToolbarEditor from './inline-toolbar-custom-buttons/src/CustomInlineToolbarEditor';
import ThemedInlineToolbarEditor from './inline-toolbar-custom-styled/src/ThemedInlineToolbarEditor';
import RelativeParentInlineToolbarEditor from './inline-toolbar-relative-parent/src/RelativeParentInlineToolbarEditor';
import SimpleLinkifyEditor from './linkify/src/SimpleLinkifyEditor';
import CustomLinkifyEditor from './linkify-configured/src/CustomLinkifyEditor';
import SimpleMentionEditor from './mentions/src/SimpleMentionEditor';
import RemoteMentionEditor from './mentions-remote/src/RemoteMentionEditor';
import CustomMentionEditor from './mentions-custom-styled/src/CustomMentionEditor';
import CustomComponentMentionEditor from './mentions-custom-component/src/CustomComponentMentionEditor';
import MentionEditorWithCustomTrigger from './mentions-custom-trigger/src/MentionEditorWithCustomTrigger';
import MentionEditorWithWhitespaceSupport from './mentions-with-whitespace/src/MentionEditorWithWhitespaceSupport';
import SimpleSideToolbarEditor from './side-toolbar/src/SimpleSideToolbarEditor';
import CustomSideToolbarEditor from './side-toolbar-custom/src/CustomSideToolbarEditor';
import RelativeParentSideToolbarEditor from './side-toolbar-relative-parent/src/RelativeParentSideToolbarEditor';
import SimpleStickerEditor from './sticker/src/SimpleStickerEditor';
import SimpleUndoEditor from './undo/src/SimpleUndoEditor';
import SimpleVideoEditor from './video/src/SimpleVideoEditor';
import CustomAddVideoEditor from './adding-video/src/CustomAddVideoEditor';
import CustomToolbarEditor from './static-toolbar-custom-buttons/src/CustomToolbarEditor';
import ThemedToolbarEditor from './static-toolbar-styled/src/ThemedToolbarEditor';
import SimpleToolbarEditor from './static-toolbar/src/SimpleToolbarEditor';
import DividerWithSideToolbarEditor from './divider-with-side-toolbar/src/App';

storiesOf('Draft.js Plugins', module)
  .add('Editor with Alignment Plugin', () => <SimpleAlignmentEditor />)
  .add('Editor with Anchor Plugin', () => <AnchorSimpleLinkPluginEditor />)
  .add('Editor with Counter Plugin', () => <SimpleCounterEditor />)
  .add('Editor with DragNDrop plugin and image plugin', () => (
    <DragNDropImageEditor />
  ))
  .add('Editor with Emoji Plugin using emoji-one plugins', () => (
    <SimpleEmojiEditor />
  ))
  .add('Editor with Emoji Plugin using native emojis', () => (
    <CustomEmojiEditor />
  ))
  .add('Editor with Focus Plugin', () => <SimpleFocusEditor />)
  .add('Editor with Hashtag Plugin', () => <SimpleHashtagEditor />)
  .add('Editor with custom themed Hashtag Plugin', () => (
    <CustomHashtagEditor />
  ))
  .add('Editor with Image Plugin', () => <SimpleImageEditor />)
  .add(
    'Editor with Image Plugin and a few others: drag and drop, alignment, resizable, focus',
    () => <CustomImageEditor />
  )
  .add('Editor with Image Plugin and Add mechanism', () => <AddImageEditor />)
  .add('Editor with default inline toolbar plugin', () => (
    <SimpleInlineToolbarEditor />
  ))
  .add('Editor with inline toolbar plugin containing all buttons', () => (
    <CustomInlineToolbarEditor />
  ))
  .add('Editor with custom themed toolbar plugin', () => (
    <ThemedInlineToolbarEditor />
  ))
  .add('Inline Toolbar with relatively positioned parent', () => (
    <RelativeParentInlineToolbarEditor />
  ))
  .add('Editor with Linkify Plugin', () => <SimpleLinkifyEditor />)
  .add(
    'Editor with Linkify Plugin and configured to render links with - target: _blank',
    () => <CustomLinkifyEditor />
  )
  .add('Editor with Mention Plugin', () => <SimpleMentionEditor />)
  .add(
    'Editor with Mention Plugin and asynchronously loaded Suggestions',
    () => <RemoteMentionEditor />
  )
  .add('Editor with custom themed Mention Plugin', () => (
    <CustomMentionEditor />
  ))
  .add('Mentions with styled suggestions', () => (
    <CustomComponentMentionEditor />
  ))
  .add('Mentions with a custom trigger', () => (
    <MentionEditorWithCustomTrigger />
  ))
  .add('Mentions with whitespace', () => <MentionEditorWithWhitespaceSupport />)
  .add('Sidebar', () => <SimpleSideToolbarEditor />)
  .add('Styled Sidebar', () => <CustomSideToolbarEditor />)
  .add('Sidebar with relatively positioned parent', () => (
    <RelativeParentSideToolbarEditor />
  ))
  .add('Editor with Sticker Plugin', () => <SimpleStickerEditor />)
  .add('Editor with Undo Plugin', () => <SimpleUndoEditor />)
  .add('Editor with Video Plugin', () => <SimpleVideoEditor />)
  .add('Editor with Video Plugin and Add Video Button', () => (
    <CustomAddVideoEditor />
  ))
  .add('Kitchen Sink', () => <KitchenSink />)
  .add('Resizable Editor', () => <ResizableEditor />)
  .add('CustomToolbarEditor', () => <CustomToolbarEditor />)
  .add('Simple toolbar editor', () => <SimpleToolbarEditor />)
  .add('ThemedToolbarEditor', () => <ThemedToolbarEditor />)
  .add('Divider with SideToolbar', () => <DividerWithSideToolbarEditor />);
