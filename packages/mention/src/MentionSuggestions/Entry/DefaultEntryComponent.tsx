import React, { ReactElement } from 'react';
import { MentionData } from '../../';
import { MentionPluginTheme } from '../../theme';
import Avatar from './Avatar/Avatar';

interface DefaultEntryComponentProps {
  mention: MentionData;
  theme?: MentionPluginTheme;
  isFocused: boolean;
  searchValue?: string;
}

export default function DefaultEntryComponent(
  props: DefaultEntryComponentProps
): ReactElement {
  const {
    mention,
    theme,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    isFocused, // eslint-disable-line @typescript-eslint/no-unused-vars
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    searchValue, // eslint-disable-line @typescript-eslint/no-unused-vars
    ...parentProps
  } = props;

  return (
    <div {...parentProps}>
      <Avatar mention={mention} theme={theme} />
      <span className={theme?.mentionSuggestionsEntryText}>{mention.name}</span>
    </div>
  );
}
