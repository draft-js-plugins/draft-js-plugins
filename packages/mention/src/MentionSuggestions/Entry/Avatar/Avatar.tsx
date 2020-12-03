import React, { ReactElement } from 'react';
import { MentionData } from '../../../';
import { MentionPluginTheme } from '../../../theme';

interface AvatarProps {
  theme?: MentionPluginTheme;
  mention: MentionData;
}

export default function Avatar({
  mention,
  theme = {},
}: AvatarProps): ReactElement | null {
  if (mention.avatar) {
    return (
      <img
        src={mention.avatar}
        className={theme.mentionSuggestionsEntryAvatar}
        role="presentation"
      />
    );
  }

  return null;
}
