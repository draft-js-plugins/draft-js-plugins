import React from 'react';
import 'style-loader!css-loader!draft-js/dist/Draft.css'; // eslint-disable-line import/no-unresolved

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

// Alignment
import SimpleAlignmentEditor from './Alignment/SimpleAlignmentEditor';
import ThemedAlignmentEditor from './Alignment/ThemedAlignmentEditor';

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
import RelativeParentInlineToolbarEditor from './InlineToolbar/RelativeParentInlineToolbarEditor';

// Linkify
import SimpleLinkifyEditor from './Linkify/SimpleLinkifyEditor';
import CustomLinkifyEditor from './Linkify/CustomLinkifyEditor';
import CustomComponentLinkifyEditor from './Linkify/CustomComponentLinkifyEditor';

// Mention
import SimpleMentionEditor from './Mention/SimpleMentionEditor';
import RemoteMentionEditor from './Mention/RemoteMentionEditor';
import CustomMentionEditor from './Mention/CustomMentionEditor';
import CustomComponentMentionEditor from './Mention/CustomComponentMentionEditor';
import MentionEditorWithCustomTrigger from './Mention/MentionEditorWithCustomTrigger';

// SideToolbar
import SimpleSideToolbarEditor from './SideToolbar/SimpleSideToolbarEditor';
import CustomSideToolbarEditor from './SideToolbar/CustomSideToolbarEditor';
import RelativeParentSideToolbarEditor from './SideToolbar/RelativeParentSideToolbarEditor';

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

// Static toolbar
import CustomToolbarEditor from './StaticToolbar/CustomToolbarEditor';
import ThemedToolbarEditor from './StaticToolbar/ThemedToolbarEditor';
import SimpleToolbarEditor from './StaticToolbar/SimpleToolbarEditor';

storiesOf('Alignment Plugin', module)
  .add('Editor with Alignment Plugin', () => <SimpleAlignmentEditor />)
  .add('Editor with custom themed Alignment Plugin', () => <ThemedAlignmentEditor />);

storiesOf('Anchor Plugin', module)
  .add('Editor with Anchor Plugin', () => <AnchorSimpleLinkPluginEditor />);

storiesOf('Counter Plugin', module)
  .add('Editor with Counter Plugin', () => <SimpleCounterEditor />)
  .add('Editor with custom themed Counter Plugin', () => <CustomCounterEditor />);

storiesOf('DragNDrop Plugin', module)
  .add('Editor with DragNDrop plugin and image plugin', () => <DragNDropImageEditor />);

storiesOf('Emoji Plugin')
  .add('Editor with Emoji Plugin using emoji-one plugins', () => <SimpleEmojiEditor />)
  .add('Editor with Emoji Plugin using native emojis', () => <CustomEmojiEditor />);

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
  .add('Editor with inline toolbar plugin containing all buttons', () => <CustomInlineToolbarEditor />)
  .add('Editor with custom themed toolbar plugin', () => <ThemedInlineToolbarEditor />)
  .add('Relatively positioned parent', () => <RelativeParentInlineToolbarEditor />);

storiesOf('Linkify Plugin')
  .add('Editor with Linkify Plugin', () => <SimpleLinkifyEditor />)
  .add('Editor with Linkify Plugin and configured to render links with - target: _blank', () => <CustomLinkifyEditor />)
  .add('Editor with Linkify Plugin using a custom component to render the link', () => <CustomComponentLinkifyEditor />);

storiesOf('Mention Plugin')
  .add('Editor with Mention Plugin', () => <SimpleMentionEditor />)
  .add('Editor with Mention Plugin and asynchronously loaded Suggestions', () => <RemoteMentionEditor />)
  .add('Editor with custom themed Mention Plugin', () => <CustomMentionEditor />)
  .add('Editor with Mention Plugin and custom themed Suggestions', () => <CustomComponentMentionEditor />)
  .add('Editor with mention trigger which needs to be escaped', () => <MentionEditorWithCustomTrigger />);

storiesOf('Side Toolbar Plugin')
  .add('Editor with SideToolbar Plugin', () => <SimpleSideToolbarEditor />)
  .add('Editor with custom themed SideToolbar Plugin', () => <CustomSideToolbarEditor />)
  .add('Relatively positioned parent', () => <RelativeParentSideToolbarEditor />);

storiesOf('Sticker Plugin')
  .add('Editor with Sticker Plugin', () => <SimpleStickerEditor />)
  .add('Editor with custom themed Sticker Plugin', () => <CustomStickerEditor />);

storiesOf('Undo Plugin')
  .add('Editor with Undo Plugin', () => <SimpleUndoEditor />)
  .add('Editor with custom themed Undo Plugin', () => <CustomUndoEditor />);

storiesOf('Video Plugin')
  .add('Editor with Video Plugin', () => <SimpleVideoEditor />)
  .add('Editor with custom themed Video Plugin', () => <CustomVideoEditor />)
  .add('Editor with Video Plugin and Add Video Button', () => <CustomAddVideoEditor />);

storiesOf('StaticToolbar Plugin')
  .add('CustomToolbarEditor', () => <CustomToolbarEditor />)
  .add('Simple toolbar editor', () => <SimpleToolbarEditor />)
  .add('ThemedToolbarEditor', () => <ThemedToolbarEditor />);
