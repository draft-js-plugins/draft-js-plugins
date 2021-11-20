/* eslint-disable react/no-array-index-key */
import React, {
  useState,
  useEffect,
  useRef,
  ReactElement,
  useCallback,
} from 'react';
import {
  AlignBlockDefaultButton,
  AlignBlockLeftButton,
  AlignBlockCenterButton,
  AlignBlockRightButton,
  DraftJsBlockAlignmentButtonType,
} from '@draft-js-plugins/buttons';
import { AlignmentPluginTheme } from './theme';
import { AlignmentPluginStore } from '.';

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

export default function AlignmentTool({
  store,
  theme,
}: AlignmentToolProps): ReactElement {
  const [position, setPosition] = useState({});
  const [alignment, setAlignment] = useState<string | null>(null);
  const toolbar = useRef<HTMLDivElement>(null);
  const ref = useRef<ReturnType<typeof setTimeout>>();

  const onVisibilityChanged = useCallback(
    (visibleBlock?: null | string): void => {
      const clear = setTimeout(() => {
        let newPosition;
        const boundingRect = store.getItem('boundingRect');
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
            left:
              boundingRect.left - relativeRect.left + boundingRect.width / 2,
            transform: 'translate(-50%) scale(1)',
            transition: 'transform 0.15s cubic-bezier(.3,1.2,.2,1)',
          };
        } else {
          newPosition = { transform: 'translate(-50%) scale(0)' };
        }
        const newAlignment = store.getItem('alignment') || 'default';
        setAlignment(newAlignment);
        setPosition(newPosition);
        ref.current = undefined;
      }, 0);
      ref.current = clear;
    },
    []
  );

  const onAlignmentChange = useCallback((value: string | undefined): void => {
    if (value) {
      setAlignment(value);
    }
  }, []);

  useEffect(
    () => () => {
      //clear timeout on unmount
      if (ref.current) {
        clearTimeout(ref.current);
      }
    },
    []
  );

  useEffect(() => {
    store.subscribeToItem('visibleBlock', onVisibilityChanged);
    store.subscribeToItem('alignment', onAlignmentChange);

    return () => {
      store.unsubscribeFromItem('visibleBlock', onVisibilityChanged);
      store.unsubscribeFromItem('alignment', onAlignmentChange);
    };
  }, [onVisibilityChanged, onAlignmentChange]);

  const defaultButtons: DraftJsBlockAlignmentButtonType[] = [
    AlignBlockDefaultButton,
    AlignBlockLeftButton,
    AlignBlockCenterButton,
    AlignBlockRightButton,
  ];

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
          setAlignment={store.getItem('setAlignment')!}
          theme={theme.buttonStyles}
        />
      ))}
    </div>
  );
}
