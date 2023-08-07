import PropTypes from 'prop-types';
import React, {
  Component,
  ComponentType,
  ReactElement,
  ReactNode,
} from 'react';
import { createPopper, Instance, Options } from '@popperjs/core';
import defaultEmojiGroups from '../../constants/defaultEmojiGroups';
import {
  EmojiImageProps,
  EmojiPluginStore,
  EmojiPluginTheme,
  EmojiSelectGroup,
  PopperOptions,
} from '../../index';
import createEmojisFromStrategy from '../../utils/createEmojisFromStrategy';
import Popover from './Popover';

const emojis = createEmojisFromStrategy();

export interface EmojiSelectPubParams {
  onClose?(): void;
  onOpen?(): void;
  closeOnEmojiSelect?: boolean;
}

interface EmojiSelectParams extends EmojiSelectPubParams {
  theme: EmojiPluginTheme;
  store: EmojiPluginStore;
  selectGroups?: EmojiSelectGroup[];
  selectButtonContent?: ReactNode;
  toneSelectOpenDelay?: number;
  emojiImage: ComponentType<EmojiImageProps>;
  menuPosition?: 'top' | 'bottom';
  popperOptions?: PopperOptions;
}

export default class EmojiSelect extends Component<EmojiSelectParams> {
  static propTypes = {
    theme: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired,
    selectGroups: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
          .isRequired,
        categories: PropTypes.arrayOf(PropTypes.oneOf(Object.keys(emojis)))
          .isRequired,
      })
    ),
    selectButtonContent: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string,
    ]),
    toneSelectOpenDelay: PropTypes.number,
    menuPosition: PropTypes.oneOf(['top', 'bottom']),
    popperOptions: PropTypes.object,
  };

  static defaultProps = {
    selectButtonContent: '☺',
    selectGroups: defaultEmojiGroups,
    toneSelectOpenDelay: 500,
    popperOptions: {
      placement: 'bottom-start',
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, 10],
          },
        },
      ],
    },
  };

  // Start the selector closed
  state = {
    isOpen: false,
  };

  // Emoji select ref
  emojiSelectRef = React.createRef<HTMLDivElement>();
  buttonRef = React.createRef<HTMLButtonElement>();
  popoverContainer: HTMLDivElement | null = null;
  popperInstance: Instance | null = null;

  // When the selector is open and users click anywhere on the page,
  // the selector should close
  componentDidMount(): void {
    document.addEventListener('click', this.closeIfClickedOutside);
  }

  componentWillUnmount(): void {
    document.removeEventListener('click', this.closeIfClickedOutside);
  }

  onButtonClick = (): void =>
    this.state.isOpen ? this.closePopover() : this.openPopover();

  // Open the popover
  openPopover = (): void => {
    if (!this.state.isOpen) {
      this.setState({
        isOpen: true,
      });
    }
    if (this.props.onOpen) {
      this.props.onOpen();
    }
    if (this.buttonRef.current && this.popoverContainer) {
      this.popperInstance = createPopper(
        this.buttonRef.current,
        this.popoverContainer,
        this.props.popperOptions as Options
      );
    }
  };

  // Close the popover
  closePopover = (): void => {
    if (this.state.isOpen) {
      this.setState({
        isOpen: false,
      });
    }
    if (this.props.onClose) {
      this.props.onClose();
    }
    this.popperInstance?.destroy();
    this.popperInstance = null;
  };

  // To check if clicked outside of emoji popover
  closeIfClickedOutside = (e: MouseEvent): void => {
    if (
      this.emojiSelectRef.current &&
      e.target instanceof Element &&
      !this.emojiSelectRef.current.contains(e.target)
    ) {
      this.closePopover();
    }
  };

  render(): ReactElement {
    const {
      theme = {},
      store,
      selectGroups,
      selectButtonContent,
      toneSelectOpenDelay,
      emojiImage,
      closeOnEmojiSelect,
      menuPosition,
    } = this.props;
    const buttonClassName = this.state.isOpen
      ? theme.emojiSelectButtonPressed
      : theme.emojiSelectButton;
    return (
      <div className={theme.emojiSelect} ref={this.emojiSelectRef}>
        <button
          ref={this.buttonRef}
          className={buttonClassName}
          onClick={this.onButtonClick}
          type="button"
        >
          {selectButtonContent}
        </button>
        <Popover
          setPopperRef={(element) => {
            this.popoverContainer = element;
          }}
          theme={theme}
          store={store}
          groups={selectGroups!}
          emojis={emojis}
          toneSelectOpenDelay={toneSelectOpenDelay!}
          isOpen={this.state.isOpen}
          emojiImage={emojiImage}
          menuPosition={menuPosition}
          onEmojiSelect={() => {
            if (closeOnEmojiSelect) {
              this.closePopover();
            }
          }}
        />
      </div>
    );
  }
}
