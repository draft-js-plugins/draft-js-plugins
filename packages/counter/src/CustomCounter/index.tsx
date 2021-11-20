import React, { ReactElement } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { CounterPluginTheme } from '../theme';
import { CounterPluginStore } from '..';

export interface CustomCounterPubProps {
  limit?: number;
  countFunction(text: string): number;
  className?: string;
}

interface CustomCounterProps extends CustomCounterPubProps {
  store: CounterPluginStore;
  theme?: CounterPluginTheme;
}

const CustomCounter = ({
  store,
  limit = 0,
  countFunction,
  theme = {},
  className,
}: CustomCounterProps): ReactElement => {
  const getClassNames = (count: number): string => {
    const defaultStyle = clsx(theme.counter, className);
    const overLimitStyle = clsx(theme.counterOverLimit, className);
    return count > limit ? overLimitStyle : defaultStyle;
  };

  const plainText = store.getEditorState!()
    .getCurrentContent()
    .getPlainText('');
  const count = countFunction(plainText);
  const classNames = getClassNames(count);

  return <span className={classNames}>{count}</span>;
};

CustomCounter.propTypes = {
  theme: PropTypes.any,
  store: PropTypes.any,
  className: PropTypes.any,
  limit: PropTypes.number,
  countFunction: PropTypes.func.isRequired,
};

export default CustomCounter;
