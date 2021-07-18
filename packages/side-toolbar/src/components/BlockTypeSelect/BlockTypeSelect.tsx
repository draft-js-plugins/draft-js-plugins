import { EditorState } from 'draft-js';
import { DraftJsButtonTheme } from '@draft-js-plugins/buttons';
import { usePopper } from 'react-popper';
import React, {
  FC,
  MouseEvent,
  ReactElement,
  useCallback,
  useEffect,
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
  rootReferenceElement: HTMLElement | null;
  show: boolean;
}

export default function BlockTypeSelect({
  theme,
  getEditorState,
  setEditorState,
  childNodes,
  referenceElement,
  show,
  rootReferenceElement,
}: BlockTypeSelectProps): ReactElement {
  const onMouseDown = useCallback((clickEvent: MouseEvent) => {
    clickEvent.preventDefault();
    clickEvent.stopPropagation();
  }, []);

  const [popperElement, setPopperElement] = useState<HTMLElement | null>(null);
  const [arrowElement, setArrowElement] = useState<HTMLElement | null>(null);
  const { styles, attributes, update } = usePopper(
    referenceElement,
    popperElement,
    {
      modifiers: [
        { name: 'arrow', options: { element: arrowElement } },
        {
          name: 'offset',
          options: {
            offset: [-4, -4],
          },
        },
      ],
    }
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
          data-show={show}
          {...attributes.popper}
        />
      </div>
    </div>
  );
}
