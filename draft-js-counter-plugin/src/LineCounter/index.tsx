import React, { ReactElement } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { EditorState } from 'draft-js';
import { CounterPluginTheme } from '../theme';
import { CounterPluginStore } from '..';

export interface LineCounterPubParams {
  limit?: number;
  className?: string;
}

interface LineCounterParams extends LineCounterPubParams {
  store: CounterPluginStore;
  theme?: CounterPluginTheme;
}

const LineCounter = ({
  store,
  limit,
  theme = {},
  className,
}: LineCounterParams): ReactElement => {
  const getLineCount = (editorState: EditorState): number | null => {
    const blockArray = editorState.getCurrentContent().getBlocksAsArray();
    return blockArray ? blockArray.length : null;
  };

  const getClassNames = (count: number | null): string => {
    const defaultStyle = clsx(theme.counter, className);
    const overLimitStyle = clsx(theme.counterOverLimit, className);
    return count! > limit! ? overLimitStyle : defaultStyle;
  };

  const count = getLineCount(store.getEditorState!());
  const classNames = getClassNames(count);

  return <span className={classNames}>{count}</span>;
};

LineCounter.propTypes = {
  theme: PropTypes.any,
  store: PropTypes.any,
  className: PropTypes.any,
  limit: PropTypes.number,
};

export default LineCounter;
