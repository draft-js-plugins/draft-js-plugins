import React, { ReactElement } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import punycode from 'punycode';
import { EditorState } from 'draft-js';
import { CounterPluginTheme } from '../theme';
import { CounterPluginStore } from '..';

export interface CharCounterPubProps {
  className?: string;
  limit?: number;
}

interface CharCounterProps extends CharCounterPubProps {
  theme?: CounterPluginTheme;
  store: CounterPluginStore;
}

const CharCounter = ({
  theme = {},
  className,
  store,
  limit,
}: CharCounterProps): ReactElement => {
  const getCharCount = (editorState: EditorState): number => {
    const decodeUnicode = (str: string): number[] => punycode.ucs2.decode(str); // func to handle unicode characters
    const plainText = editorState.getCurrentContent().getPlainText('');
    const regex = /(?:\r\n|\r|\n)/g; // new line, carriage return, line feed
    const cleanString = plainText.replace(regex, '').trim(); // replace above characters w/ nothing
    return decodeUnicode(cleanString).length;
  };

  const getClassNames = (count: number): string => {
    const defaultStyle = clsx(theme.counter, className);
    const overLimitStyle = clsx(theme.counterOverLimit, className);
    return count > limit! ? overLimitStyle : defaultStyle;
  };

  const count = getCharCount(store.getEditorState!());
  const classNames = getClassNames(count);

  return <span className={classNames}>{count}</span>;
};

CharCounter.propTypes = {
  theme: PropTypes.any,
  className: PropTypes.any,
  store: PropTypes.any,
  limit: PropTypes.any,
};

export default CharCounter;
