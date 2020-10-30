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
}

export default function Divider({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  block,
  className,
  theme = {},
  ...otherProps
}: DefaultDividerProps): ReactElement {
  const {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    blockProps, // eslint-disable-next-line @typescript-eslint/no-unused-vars
    customStyleMap, // eslint-disable-next-line @typescript-eslint/no-unused-vars
    customStyleFn, // eslint-disable-next-line @typescript-eslint/no-unused-vars
    decorator, // eslint-disable-next-line @typescript-eslint/no-unused-vars
    forceSelection, // eslint-disable-next-line @typescript-eslint/no-unused-vars
    offsetKey, // eslint-disable-next-line @typescript-eslint/no-unused-vars
    selection, // eslint-disable-next-line @typescript-eslint/no-unused-vars
    tree, // eslint-disable-next-line @typescript-eslint/no-unused-vars
    contentState, // eslint-disable-next-line @typescript-eslint/no-unused-vars
    blockStyleFn,
    ...elementProps
  } = otherProps;
  const combinedClassName = clsx(theme.divider, className);
  return <hr {...elementProps} className={combinedClassName} />;
}
