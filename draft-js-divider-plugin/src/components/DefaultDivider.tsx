import React, { ReactElement } from 'react';
import clsx from 'clsx';
import { DividerPluginTheme } from '../theme';

export interface DefaultDividerProps
  extends React.HTMLAttributes<HTMLHRElement> {
  className?: string;
  theme?: DividerPluginTheme;
  //removed types
  block: unknown;
  blockProps: unknown;
  customStyleMap: unknown;
  customStyleFn: unknown;
  decorator: unknown;
  forceSelection: unknown;
  offsetKey: unknown;
  selection: unknown;
  tree: unknown;
  contentState: unknown;
  blockStyleFn: unknown;
  preventScroll: unknown;
}

export default function Divider({
  block, // eslint-disable-line @typescript-eslint/no-unused-vars
  className,
  theme = {},
  ...otherProps
}: DefaultDividerProps): ReactElement {
  const {
    blockProps, // eslint-disable-line @typescript-eslint/no-unused-vars
    customStyleMap, // eslint-disable-line @typescript-eslint/no-unused-vars
    customStyleFn, // eslint-disable-line @typescript-eslint/no-unused-vars
    decorator, // eslint-disable-line @typescript-eslint/no-unused-vars
    forceSelection, // eslint-disable-line @typescript-eslint/no-unused-vars
    offsetKey, // eslint-disable-line @typescript-eslint/no-unused-vars
    selection, // eslint-disable-line @typescript-eslint/no-unused-vars
    tree, // eslint-disable-line @typescript-eslint/no-unused-vars
    contentState, // eslint-disable-line @typescript-eslint/no-unused-vars
    blockStyleFn, // eslint-disable-line @typescript-eslint/no-unused-vars
    preventScroll, // eslint-disable-line @typescript-eslint/no-unused-vars
    ...elementProps
  } = otherProps;
  const combinedClassName = clsx(theme.divider, className);
  return <hr {...elementProps} className={combinedClassName} />;
}
