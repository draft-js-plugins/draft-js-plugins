/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect, useRef, ReactElement } from 'react';
import {
  AlignBlockDefaultButton,
  AlignBlockLeftButton,
  AlignBlockCenterButton,
  AlignBlockRightButton,
  DraftJsBlockAlignmentButtonType,
} from 'draft-js-buttons';
import { AlignmentPluginTheme } from './theme';
import { AlignmentPluginStore } from './utils/createStore';

function getRelativeParent(element: HTMLElement | null): HTMLElement | null {
  if (!element) {
    return null;
  }

  const position = window
    .getComputedStyle(element)
    .getPropertyValue('position');
  if (position !== 'static') {
    return element;
  }

  return getRelativeParent(element.parentElement);
}

interface AlignmentToolProps {
  theme: AlignmentPluginTheme;
  store: AlignmentPluginStore;
}

export default function AlignmentTool(props: AlignmentToolProps): ReactElement {
  const [position, setPosition] = useState({});
  const [alignment, setAlignment] = useState<string | null>(null);
  const toolbar = useRef<HTMLDivElement>(null);

  const onVisibilityChanged = (visibleBlock?: null | string): void => {
    setTimeout(() => {
      let newPosition;
      const boundingRect = props.store.getItem('boundingRect');
      if (visibleBlock && boundingRect) {
        const relativeParent = getRelativeParent(
          toolbar.current!.parentElement
        );
        const toolbarHeight = toolbar.current!.clientHeight;
        const relativeRect = relativeParent
          ? relativeParent.getBoundingClientRect()
          : document.body.getBoundingClientRect();
        newPosition = {
          top: boundingRect.top - relativeRect.top - toolbarHeight,
          left: boundingRect.left - relativeRect.left + boundingRect.width / 2,
          transform: 'translate(-50%) scale(1)',
          transition: 'transform 0.15s cubic-bezier(.3,1.2,.2,1)',
        };
      } else {
        newPosition = { transform: 'translate(-50%) scale(0)' };
      }
      const newAlignment = props.store.getItem('alignment') || 'default';

      setAlignment(newAlignment);
      setPosition(newPosition);
    }, 0);
  };

  const onAlignmentChange = (value: string | undefined) => {
    if (value) {
      setAlignment(value);
    }
  };

  useEffect(() => {
    props.store.subscribeToItem('visibleBlock', onVisibilityChanged);
    props.store.subscribeToItem('alignment', onAlignmentChange);

    return () => {
      props.store.unsubscribeFromItem('visibleBlock', onVisibilityChanged);
      props.store.unsubscribeFromItem('alignment', onAlignmentChange);
    };
  });

  const defaultButtons: DraftJsBlockAlignmentButtonType[] = [
    AlignBlockDefaultButton,
    AlignBlockLeftButton,
    AlignBlockCenterButton,
    AlignBlockRightButton,
  ];

  const { theme } = props;

  return (
    <div
      className={theme.alignmentToolStyles.alignmentTool}
      style={position}
      ref={toolbar}
    >
      {defaultButtons.map((Button, index) => (
        <Button
          /* the index can be used here as the buttons list won't change */
          key={index}
          alignment={alignment}
          setAlignment={props.store.getItem('setAlignment')!}
          theme={theme.buttonStyles}
        />
      ))}
    </div>
  );
}
