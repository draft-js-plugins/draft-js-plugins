import { ContentState, EditorState } from 'draft-js';
import React, { ReactElement, ReactNode } from 'react';
import clsx from 'clsx';
import { HashtagPluginTheme } from './theme';

export interface HashtagProps {
  theme?: HashtagPluginTheme;
  className?: string;
  children?: ReactNode;

  decoratedText?: string;
  dir?: null;
  entityKey?: string | null;
  offsetKey?: string;
  contentState?: ContentState;
  blockKey?: string;
  start?: number;
  end?: number;
  setEditorState?(editorState: EditorState): void;
  getEditorState?(): EditorState;
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
    start, // eslint-disable-line @typescript-eslint/no-unused-vars
    end, // eslint-disable-line @typescript-eslint/no-unused-vars
    ...otherProps
  } = props;

  const combinedClassName = clsx(theme.hashtag, className);
  return <span {...otherProps} className={combinedClassName} />;
}
