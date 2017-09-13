import React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

// Alignment
import SimpleAlignmentEditor from './Alignment/SimpleAlignmentEditor';

// Anchor
import AnchorSimpleLinkPluginEditor from './Anchor/SimpleLinkPluginEditor';

// Counter
import SimpleCounterEditor from './Counter/SimpleCounterEditor';
import CustomCounterEditor from './Counter/CustomCounterEditor';

// DragNDrop
import DragNDropImageEditor from './DragNDrop/CustomImageEditor';

// Emoji
import SimpleEmojiEditor from './Emoji/SimpleEmojiEditor';
import CustomEmojiEditor from './Emoji/CustomEmojiEditor';

// Focus
import SimpleFocusEditor from './Focus/SimpleFocusEditor';

// HashTag
import SimpleHashtagEditor from './Hashtag/SimpleHashtagEditor';
import CustomHashtagEditor from './Hashtag/CustomHashtagEditor';

// Image
import SimpleImageEditor from './Image/SimpleImageEditor';
import CustomImageEditor from './Image/CustomImageEditor';
import AddImageEditor from './Image/AddImageEditor';

// InlineToolbar
import SimpleInlineToolbarEditor from './InlineToolbar/SimpleInlineToolbarEditor';
import CustomInlineToolbarEditor from './InlineToolbar/CustomInlineToolbarEditor';
import ThemedInlineToolbarEditor from './InlineToolbar/ThemedInlineToolbarEditor';

// Linkify
import SimpleLinkifyEditor from './Linkify/SimpleLinkifyEditor';
import CustomLinkifyEditor from './Linkify/CustomLinkifyEditor';
import CustomComponentLinkifyEditor from './Linkify/CustomComponentLinkifyEditor';

// Mention
import SimpleMentionEditor from './Mention/SimpleMentionEditor';
import RemoteMentionEditor from './Mention/RemoteMentionEditor';
import CustomMentionEditor from './Mention/CustomMentionEditor';
import CustomComponentMentionEditor from './Mention/CustomComponentMentionEditor';

// SideToolbar
import SimpleSideToolbarEditor from './SideToolbar/SimpleSideToolbarEditor';
import CustomSideToolbarEditor from './SideToolbar/CustomSideToolbarEditor';

// Sticker
import SimpleStickerEditor from './Sticker/SimpleStickerEditor';
import CustomStickerEditor from './Sticker/CustomStickerEditor';

// Undo
import SimpleUndoEditor from './Undo/SimpleUndoEditor';
import CustomUndoEditor from './Undo/CustomUndoEditor';

// Video
import SimpleVideoEditor from './Video/SimpleVideoEditor';
import CustomVideoEditor from './Video/CustomVideoEditor';
import CustomAddVideoEditor from './Video/CustomAddVideoEditor';

storiesOf('Alignment Plugin', module)
  .add('Editor with Alignment Plugin', () => <SimpleAlignmentEditor />);

storiesOf('Anchor Plugin', module)
  .add('Editor with Anchor Plugin', () => <SimpleLinkPluginEditor />);

storiesOf('Counter Plugin', module)
  .add('Editor with Counter Plugin', () => <SimpleCounterPluginEditor />)
  .add('Editor with custom themed Counter Plugin', () => <CustomCounterPluginEditor />);

storiesOf('DragNDrop Plugin', module)
  .add('Editor with DragNDrop plugin and image plugin', () => <DragNDropImageEditor />);

storiesOf('Emoji Plugin')
  .add('Editor with Emoji Plugin using emoji-one plugins', () => <SimpleEmojiEditor />)
  .add('Editor with Emoji Plugin using native emojis', () => <SimpleEmojiEditor />);

storiesOf('Focus Plugin')
  .add('Editor with Focus Plugin', () => <SimpleFocusEditor />);

storiesOf('Hashtag Plugin')
  .add('Editor with Hashtag Plugin', () => <SimpleHashtagEditor />)
  .add('Editor with custom themed Hashtag Plugin', () => <CustomHashtagEditor />);

storiesOf('Image Plugin')
  .add('Editor with Image Plugin', () => <SimpleImageEditor />)
  .add('Editor with Image Plugin and a few others: drag and drop, alignment, resizable, focus', () => <CustomImageEditor />)
  .add('Editor with Image Plugin and Add mechanism', () => <AddImageEditor />);

storiesOf('Inline Toolbar Plugin')
  .add('Editor with default inline toolbar plugin', () => <SimpleInlineToolbarEditor />)
  .add('Editor with inline toolbar plugin containing all buttons', () => <CustomInlineToolbarEditor />);

storiesOf('Linkify Plugin')
  .add('Editor with Linkify Plugin', () => <SimpleLinkifyEditor />)
  .add('Editor with Linkify Plugin and configured to render links with - target: _blank', () => <CustomLinkifyEditor />)
  .add('Editor with Linkify Plugin using a custom component to render the link', () => <CustomComponentLinkifyEditor />);

