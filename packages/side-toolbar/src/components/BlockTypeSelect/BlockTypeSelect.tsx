import { EditorState } from 'draft-js';
import { DraftJsButtonTheme } from '@draft-js-plugins/buttons';
import { usePopper } from 'react-popper';
import React, {
  FC,
  MouseEvent,
  ReactElement,
  useCallback,
  useState,
} from 'react';
import { SideToolbarPluginTheme } from '../../theme';

export interface BlockTypeSelectChildProps {
  theme: DraftJsButtonTheme;
  getEditorState(): EditorState;
  setEditorState(state: EditorState): void;
}

interface BlockTypeSelectProps {
  theme: SideToolbarPluginTheme;
  getEditorState(): EditorState;
  setEditorState(state: EditorState): void;
  childNodes: FC<BlockTypeSelectChildProps>;
  referenceElement: HTMLElement | null;
  show: boolean;
}

export default function BlockTypeSelect({
  theme,
  getEditorState,
  setEditorState,
  childNodes,
  referenceElement,
  show,
}: BlockTypeSelectProps): ReactElement {
  const onMouseDown = useCallback((clickEvent: MouseEvent) => {
    clickEvent.preventDefault();
    clickEvent.stopPropagation();
  }, []);

  const [popperElement, setPopperElement] = useState<HTMLElement | null>(null);
  const [arrowElement, setArrowElement] = useState<HTMLElement | null>(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    //placement: 'right',
    modifiers: [
      { name: 'arrow', options: { element: arrowElement } },
      {
        name: 'offset',
        options: {
          offset: [-8, -8],
        },
      },
    ],
  });

  return (
    <div
      className={theme.blockTypeSelectStyles?.popup}
      ref={setPopperElement}
      style={styles.popper}
      {...attributes.popper}
      data-show={show}
      onMouseDown={onMouseDown}
    >
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
  );
}
