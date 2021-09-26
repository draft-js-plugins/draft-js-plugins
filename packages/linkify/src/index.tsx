import React, { ComponentType, ReactElement } from 'react';
import { EditorPlugin } from '@draft-js-plugins/editor';
import linkifyItObj, { LinkifyIt } from 'linkify-it';
import tlds from 'tlds';
import Link, { LinkProps, ComponentProps } from './Link/Link';
import linkStrategy from './linkStrategy';
import { defaultTheme, LinkifyPluginTheme } from './theme';

export { extractLinks } from './utils/extractLinks';
export const linkifyIt = linkifyItObj().tlds(tlds) as LinkifyIt;

export interface LinkifyPluginConfig {
  component?: ComponentType<ComponentProps>;
  theme?: LinkifyPluginTheme;
  target?: string;
  rel?: string;
  linkifyit?: LinkifyIt;
}

export default (config: LinkifyPluginConfig = {}): EditorPlugin => {
  // Styles are overwritten instead of merged as merging causes a lot of confusion.

  // Why? Because when merging a developer needs to know all of the underlying
  // styles which needs a deep dive into the code. Merging also makes it prone to
  // errors when upgrading as basically every styling change would become a major
  // breaking change. 1px of an increased padding can break a whole layout.

  const {
    component,
    theme = defaultTheme,
    target = '_self',
    rel = 'noreferrer noopener',
  } = config;

  const DecoratedLink = (props: LinkProps): ReactElement => (
    <Link
      {...props}
      theme={theme}
      target={target}
      rel={rel}
      component={component}
    />
  );

  return {
    decorators: [
      {
        strategy: (contentBlock, callback) =>
          linkStrategy(contentBlock, callback, config.linkifyit as LinkifyIt),
        component: DecoratedLink,
      },
    ],
  };
};
