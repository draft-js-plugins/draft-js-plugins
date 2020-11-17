import React, { MouseEvent, ReactElement } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { EditorState } from 'draft-js';

export interface DividerButtonTheme {
  buttonWrapper: string;
  button: string;
  active: string;
}

export interface DividerButtonPubProps {
  theme?: DividerButtonTheme;
  getEditorState(): EditorState;
  setEditorState(state: EditorState): void;
  blockType: string;
}

export interface DividerButtonProps extends DividerButtonPubProps {
  addDivider(
    editorState: EditorState,
    data?: Record<string, unknown>
  ): EditorState;
}

const DividerButton = (props: DividerButtonProps): ReactElement => {
  const onClick = (event: MouseEvent): void => {
    event.preventDefault();

    const editorState = props.getEditorState();
    const newEditorState = props.addDivider(editorState);

    props.setEditorState(newEditorState);
  };

  const preventBubblingUp = (event: MouseEvent): void => {
    event.preventDefault();
  };

  const blockTypeIsActive = (): boolean => {
    const editorState = props.getEditorState();
    const type = editorState
      .getCurrentContent()
      .getBlockForKey(editorState.getSelection().getStartKey())
      .getType();
    return type === props.blockType;
  };

  const { theme = {} as DividerButtonTheme } = props;
  const className = blockTypeIsActive()
    ? clsx(theme.button, theme.active)
    : theme.button;

  return (
    <div className={theme.buttonWrapper} onMouseDown={preventBubblingUp}>
      <button className={className} onClick={onClick} type="button">
        <svg
          height="24"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
        </svg>
      </button>
    </div>
  );
};

DividerButton.propTypes = {
  theme: PropTypes.object,
  getEditorState: PropTypes.func.isRequired,
  // eslint-disable-next-line react/no-unused-prop-types
  setEditorState: PropTypes.func.isRequired,
  // eslint-disable-next-line react/no-unused-prop-types
  addDivider: PropTypes.func.isRequired,
};

export default DividerButton;
