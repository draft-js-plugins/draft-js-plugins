import React, {
  Component,
  ComponentType,
  MouseEvent,
  ReactElement,
  ReactNode,
} from 'react';
import PropTypes from 'prop-types';
import createEmojisFromStrategy from '../../utils/createEmojisFromStrategy';
import defaultEmojiGroups from '../../constants/defaultEmojiGroups';
import Popover from './Popover';
import {
  EmojiImageProps,
  EmojiPluginStore,
  EmojiPluginTheme,
  EmojiSelectGroup,
} from '../../index';

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
    useNativeArt: PropTypes.bool,
    menuPosition: PropTypes.oneOf(['top', 'bottom']),
  };

  static defaultProps = {
    selectButtonContent: '☺',
    selectGroups: defaultEmojiGroups,
    toneSelectOpenDelay: 500,
  };

  // Start the selector closed
  state = {
    isOpen: false,
  };

  // When the selector is open and users click anywhere on the page,
  // the selector should close
  componentDidMount(): void {
    document.addEventListener('click', this.closePopover);
  }

  componentWillUnmount(): void {
    document.removeEventListener('click', this.closePopover);
  }

  onClick = (event: MouseEvent): void => {
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();
  };

  onButtonMouseUp = (): void =>
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
      <div className={theme.emojiSelect} onClick={this.onClick}>
        <button
          className={buttonClassName}
          onMouseUp={this.onButtonMouseUp}
          type="button"
        >
          {selectButtonContent}
        </button>
        <Popover
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
