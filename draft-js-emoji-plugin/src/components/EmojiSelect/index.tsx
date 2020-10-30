import React, { Component, MouseEvent, ReactElement, ReactNode } from 'react';
import PropTypes from 'prop-types';
import strategy from 'emojione/emoji.json';
import createEmojisFromStrategy from '../../utils/createEmojisFromStrategy';
import defaultEmojiGroups from '../../constants/defaultEmojiGroups';
import Popover from './Popover';
import {
  EmojiPluginStore,
  EmojiPluginTheme,
  EmojiSelectGroup,
} from '../../index';

const emojis = createEmojisFromStrategy(strategy);

export type EmojiSelectPubParams = Record<string, unknown>;

interface EmojiSelectParams extends EmojiSelectPubParams {
  cacheBustParam: string;
  imagePath: string;
  imageType: string;
  theme: EmojiPluginTheme;
  store: EmojiPluginStore;
  selectGroups?: EmojiSelectGroup[];
  selectButtonContent?: ReactNode;
  toneSelectOpenDelay?: number;
  useNativeArt?: boolean;
}

export default class EmojiSelect extends Component<EmojiSelectParams> {
  static propTypes = {
    cacheBustParam: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    imageType: PropTypes.string.isRequired,
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
  };

  // Close the popover
  closePopover = (): void => {
    if (this.state.isOpen) {
      this.setState({
        isOpen: false,
      });
    }
  };

  render(): ReactElement {
    const {
      cacheBustParam,
      imagePath,
      imageType,
      theme = {},
      store,
      selectGroups,
      selectButtonContent,
      toneSelectOpenDelay,
      useNativeArt,
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
          cacheBustParam={cacheBustParam}
          imagePath={imagePath}
          imageType={imageType}
          theme={theme}
          store={store}
          groups={selectGroups!}
          emojis={emojis}
          toneSelectOpenDelay={toneSelectOpenDelay!}
          isOpen={this.state.isOpen}
          useNativeArt={useNativeArt}
        />
      </div>
    );
  }
}
