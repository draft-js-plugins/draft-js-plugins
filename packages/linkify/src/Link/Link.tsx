import React, { ComponentType, ReactElement, ReactNode } from 'react';
import clsx from 'clsx';
import { LinkifyPluginTheme } from '../theme';
import { ExtractLinks, extractLinks } from '../utils/extractLinks';

export interface ComponentProps {
  children: ReactNode;
  href: string;
  target: string;
  rel: string;
  className: string;
}

export interface LinkProps {
  decoratedText?: string;
  theme?: LinkifyPluginTheme;
  component?: ComponentType<ComponentProps>;
  children: ReactNode;
  target?: string;
  rel?: string;
  className?: string;
  customExtractLinks?: ExtractLinks;

  // following props are not used
  entityKey?: unknown;
  getEditorState?: unknown;
  offsetKey?: unknown;
  setEditorState?: unknown;
  contentState?: unknown;
  blockKey?: unknown;
  dir?: unknown;
  start?: unknown;
  end?: unknown;
}

// The component we render when we encounter a hyperlink in the text
export default function Link(props: LinkProps): ReactElement {
  const {
    decoratedText = '',
    theme = {} as LinkifyPluginTheme,
    customExtractLinks = (text) => extractLinks(text),
    target = '_self',
    rel = 'noreferrer noopener',
    className,
    component,
    dir, // eslint-disable-line @typescript-eslint/no-unused-vars
    entityKey, // eslint-disable-line @typescript-eslint/no-unused-vars
    getEditorState, // eslint-disable-line @typescript-eslint/no-unused-vars
    offsetKey, // eslint-disable-line @typescript-eslint/no-unused-vars
    setEditorState, // eslint-disable-line @typescript-eslint/no-unused-vars
    contentState, // eslint-disable-line @typescript-eslint/no-unused-vars
    blockKey, // eslint-disable-line @typescript-eslint/no-unused-vars
    start, // eslint-disable-line @typescript-eslint/no-unused-vars
    end, // eslint-disable-line @typescript-eslint/no-unused-vars
    ...otherProps
  } = props;

  const combinedClassName = clsx(theme?.link, className);
  const links = customExtractLinks(decoratedText);
  const href = links && links[0] ? links[0].url : '';

  const linkProps = {
    ...otherProps,
    href,
    target,
    rel,
    className: combinedClassName,
  };
  return component ? (
    React.createElement(component, linkProps)
  ) : (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    <a {...linkProps} />
  );
}
