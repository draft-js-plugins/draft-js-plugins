import React, { ComponentType, ReactElement } from 'react';
import { EditorPlugin } from '@draft-js-plugins/editor';
import Hashtag, { HashtagProps } from './Hashtag';
import hashtagStrategy from './hashtagStrategy';
import { defaultTheme, HashtagPluginTheme } from './theme';

export { extractHashtagsWithIndices } from './utils/extractHashtags';
export type { HashtagProps };
export interface HashtagPluginConfig {
  theme?: HashtagPluginTheme;
  hashtagComponent?: ComponentType<HashtagProps>;
}

export default (config: HashtagPluginConfig = {}): EditorPlugin => {
  // Styles are overwritten instead of merged as merging causes a lot of confusion.
  //
  // Why? Because when merging a developer needs to know all of the underlying
  // styles which needs a deep dive into the code. Merging also makes it prone to
  // errors when upgrading as basically every styling change would become a major
  // breaking change. 1px of an increased padding can break a whole layout.

  const {
    theme = defaultTheme,
    hashtagComponent: HashtagComponent = Hashtag,
  } = config;
  const DecoratedHashtag = (props: HashtagProps): ReactElement => (
    <HashtagComponent {...props} theme={theme} />
  );
  return {
    decorators: [
      {
        strategy: hashtagStrategy,
        component: DecoratedHashtag,
      },
    ],
  };
};
