import React, { ReactElement, ReactNode } from 'react';
import clsx from 'clsx';
import { HashtagPluginTheme } from './theme';

export interface HashtagProps {
  theme?: HashtagPluginTheme;
  className?: string;
  children?: ReactNode;

  //removed props
  decoratedText?: unknown;
  dir?: unknown;
  entityKey?: unknown;
  getEditorState?: unknown;
  offsetKey?: unknown;
  setEditorState?: unknown;
  contentState?: unknown;
  blockKey?: unknown;
}

export default function Hashtag(props: HashtagProps): ReactElement {
  const {
    theme = {},
    className,
    decoratedText, // eslint-disable-line @typescript-eslint/no-unused-vars
    dir, // eslint-disable-line @typescript-eslint/no-unused-vars
    entityKey, // eslint-disable-line @typescript-eslint/no-unused-vars
    getEditorState, // eslint-disable-line @typescript-eslint/no-unused-vars
    offsetKey, // eslint-disable-line @typescript-eslint/no-unused-vars
    setEditorState, // eslint-disable-line @typescript-eslint/no-unused-vars
    contentState, // eslint-disable-line @typescript-eslint/no-unused-vars
    blockKey, // eslint-disable-line @typescript-eslint/no-unused-vars
    ...otherProps
  } = props;

  const combinedClassName = clsx(theme.hashtag, className);
  return <span {...otherProps} className={combinedClassName} />;
}
