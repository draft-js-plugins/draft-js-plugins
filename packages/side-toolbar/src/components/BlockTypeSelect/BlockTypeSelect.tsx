import { EditorState } from 'draft-js';
import { DraftJsButtonTheme } from '@draft-js-plugins/buttons';
import { usePopper } from 'react-popper';
import React, {
  FC,
  MouseEvent,
  ReactElement,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { SideToolbarPluginTheme } from '../../theme';
import { PopperOptions } from '../..';

export interface BlockTypeSelectChildProps {
  theme: DraftJsButtonTheme;
  getEditorState(): EditorState;
  setEditorState(state: EditorState): void;
}

export interface CreateBlockTypeSelectPopperOptionsFn {
  (arrowElement: HTMLElement | null): PopperOptions;
}

interface BlockTypeSelectProps {
  theme: SideToolbarPluginTheme;
  getEditorState(): EditorState;
  setEditorState(state: EditorState): void;
  childNodes: FC<BlockTypeSelectChildProps>;
  referenceElement: HTMLElement | null;
  rootReferenceElement: HTMLElement | null;
  show: boolean;
  createBlockTypeSelectPopperOptions?: CreateBlockTypeSelectPopperOptionsFn;
}

function createDefaultPopperOptions(
  arrowElement: HTMLElement | null
): PopperOptions {
  return {
    modifiers: [
      { name: 'arrow', options: { element: arrowElement } },
      {
        name: 'offset',
        options: {
          offset: [-4, -4],
        },
      },
    ],
  };
}

export default function BlockTypeSelect({
  theme,
  getEditorState,
  setEditorState,
  childNodes,
  referenceElement,
  show,
  rootReferenceElement,
  createBlockTypeSelectPopperOptions = createDefaultPopperOptions,
}: BlockTypeSelectProps): ReactElement {
  const onMouseDown = useCallback((clickEvent: MouseEvent) => {
    clickEvent.preventDefault();
    clickEvent.stopPropagation();
  }, []);

  const [popperElement, setPopperElement] = useState<HTMLElement | null>(null);
  const [arrowElement, setArrowElement] = useState<HTMLElement | null>(null);
  const popperOptions = useMemo(
    () => createBlockTypeSelectPopperOptions(arrowElement),
    [arrowElement, createBlockTypeSelectPopperOptions]
  );
  const { styles, attributes, update } = usePopper(
    referenceElement,
    popperElement,
    popperOptions
  );

  useEffect(() => {
    update?.();
  }, [rootReferenceElement, update]);

  return (
    <div
      className={theme.blockTypeSelectStyles?.popup}
      ref={setPopperElement}
      style={styles.popper}
      {...attributes.popper}
      data-show={show}
      onMouseDown={onMouseDown}
    >
      <div className={theme.blockTypeSelectStyles?.popupFrame}>
        {childNodes({
          getEditorState,
          setEditorState,
          theme: theme.buttonStyles!,
        })}
        <div
          ref={setArrowElement}
          style={styles.arrow}
          className={theme.blockTypeSelectStyles?.arrow}
          {...attributes.popper}
        />
      </div>
    </div>
  );
}
