/* eslint-disable react/no-array-index-key */
import React, {
  CSSProperties,
  FC,
  MouseEvent,
  ReactElement,
  Component,
} from 'react';
import PropTypes from 'prop-types';
import { EditorState } from 'draft-js';
import { DraftJsButtonTheme } from '@draft-js-plugins/buttons';
import { SideToolbarPluginTheme } from '../../theme';

export interface BlockTypeSelectChildProps {
  theme: DraftJsButtonTheme;
  getEditorState(): EditorState;
  setEditorState(state: EditorState): void;
}

interface BlockTypeSelectProps {
  style?: CSSProperties;
  theme: SideToolbarPluginTheme;
  getEditorState(): EditorState;
  setEditorState(state: EditorState): void;
  childNodes: FC<BlockTypeSelectChildProps>;
}

export default class BlockTypeSelect extends Component<BlockTypeSelectProps> {
  static propTypes = {
    childNodes: PropTypes.func,
  };

  state = {
    style: {
      transform: 'translate(-50%) scale(0)',
    },
  };

  onMouseEnter = (): void => {
    this.setState({
      style: {
        transform: 'translate(-50%) scale(1)',
        transition: 'transform 0.15s cubic-bezier(.3,1.2,.2,1)',
      },
    });
  };

  onMouseLeave = (): void => {
    this.setState({
      style: {
        transform: 'translate(-50%) scale(0)',
      },
    });
  };

  onMouseDown = (clickEvent: MouseEvent): void => {
    clickEvent.preventDefault();
    clickEvent.stopPropagation();
  };

  render(): ReactElement {
    const { theme, getEditorState, setEditorState } = this.props;
    return (
      <div
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        onMouseDown={this.onMouseDown}
      >
        <div className={theme.blockTypeSelectStyles?.blockType}>
          <svg
            height="24"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
          </svg>
        </div>
        {/*
          The spacer is needed so the popup doesn't go away when moving from the
          blockType div to the popup.
        */}
        <div className={theme.blockTypeSelectStyles?.spacer} />
        <div
          className={theme.blockTypeSelectStyles?.popup}
          style={this.state.style}
        >
          {this.props.childNodes({
            getEditorState,
            setEditorState,
            theme: theme.buttonStyles!,
          })}
        </div>
      </div>
    );
  }
}
