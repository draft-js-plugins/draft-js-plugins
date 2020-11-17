import React, { ReactElement } from 'react';
import { MentionData } from '../../../';
import { Theme } from '../../../theme';

interface AvatarProps {
  theme?: Theme;
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
