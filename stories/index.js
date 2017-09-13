import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

// Alignment
import SimpleAlignmentEditor from './Alignment/SimpleAlignmentEditor';

// Anchor
import AnchorCustomInlineToolbar from './Anchor/CustomInlineToolbarEditor';
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
  .add('Simple Editor with Alignment Plugin', () => <SimpleAlignmentEditor />);
