import React, { Component, MouseEvent, ReactElement, ReactNode } from 'react';
import PropTypes from 'prop-types';
import { EditorState } from 'draft-js';
import clsx from 'clsx';
import { UndoPluginTheme } from '../theme';
import { UndoPuginStore, UndoRedoButtonProps } from '..';

interface RedoButtonProps extends UndoRedoButtonProps {
  theme: UndoPluginTheme;
  store: UndoPuginStore;
  children: ReactNode;
}

export default class RedoButton extends Component<RedoButtonProps> {
  static propTypes = {
    children: PropTypes.node.isRequired,
    theme: PropTypes.any,
  };

  onClick = (event: MouseEvent): void => {
    event.stopPropagation();
    this.props.store.setEditorState!(
      EditorState.redo(this.props.store.getEditorState!())
    );
  };

  render(): ReactElement {
    const { theme = {}, children, className } = this.props;
    const combinedClassName = clsx(theme.redo, className);
    return (
      <button
        disabled={
          !this.props.store ||
          !this.props.store.getEditorState ||
          this.props.store.getEditorState().getRedoStack().isEmpty()
        }
        type="button"
        onClick={this.onClick}
        className={combinedClassName}
      >
        {children}
      </button>
    );
  }
}
