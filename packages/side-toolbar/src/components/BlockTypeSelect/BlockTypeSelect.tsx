import { EditorState } from 'draft-js';
import { DraftJsButtonTheme } from '@draft-js-plugins/buttons';
import React, {
  ComponentType,
  CSSProperties,
  FC,
  MouseEvent,
  ReactElement,
  useCallback,
  useState,
} from 'react';
import { SideToolbarPluginTheme } from '../../theme';
import { SideToolbarButtonProps } from './SideToolbarButton';

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
  sideToolbarButtonComponent: ComponentType<SideToolbarButtonProps>;
}

export default function BlockTypeSelect({
  theme,
  getEditorState,
  setEditorState,
  childNodes,
  sideToolbarButtonComponent: SideToolbarButton,
}: BlockTypeSelectProps): ReactElement {
  const [style, setStyle] = useState<CSSProperties>({
    transform: 'translate(-50%) scale(0)',
  });
  const onMouseEnter = useCallback(() => {
    setStyle({
      transform: 'translate(-50%) scale(1)',
      transition: 'transform 0.15s cubic-bezier(.3,1.2,.2,1)',
    });
  }, []);

  const onMouseLeave = useCallback(() => {
    setStyle({
      transform: 'translate(-50%) scale(0)',
    });
  }, []);

  const onMouseDown = useCallback((clickEvent: MouseEvent) => {
    clickEvent.preventDefault();
    clickEvent.stopPropagation();
  }, []);

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseDown={onMouseDown}
    >
      <SideToolbarButton className={theme.blockTypeSelectStyles?.blockType} />

      {/*
    The spacer is needed so the popup doesn't go away when moving from the
    blockType div to the popup.
  */}
      <div className={theme.blockTypeSelectStyles?.spacer} />
      <div className={theme.blockTypeSelectStyles?.popup} style={style}>
        {childNodes({
          getEditorState,
          setEditorState,
          theme: theme.buttonStyles!,
        })}
      </div>
    </div>
  );
}
