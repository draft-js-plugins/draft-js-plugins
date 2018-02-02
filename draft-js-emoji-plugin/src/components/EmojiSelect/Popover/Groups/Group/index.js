import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Entry from '../../Entry';

export default class Group extends Component {
  static propTypes = {
    cacheBustParam: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    imageType: PropTypes.string.isRequired,
    theme: PropTypes.object.isRequired,
    group: PropTypes.object.isRequired,
    emojis: PropTypes.object.isRequired,
    checkMouseDown: PropTypes.func.isRequired,
    onEmojiSelect: PropTypes.func.isRequired,
    onEmojiMouseDown: PropTypes.func.isRequired,
    useNativeArt: PropTypes.bool,
    isActiveGroup: PropTypes.bool.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      hasRenderedEmoji: props.isActiveGroup,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isActiveGroup) {
      this.setState({
        hasRenderedEmoji: true,
      });
    }
  }

  shouldComponentUpdate = (nextProps) => {
    // If the emoji have been rendered once, never update again
    if (this.state.hasRenderedEmoji) {
      return false;
    }
    return nextProps.isActiveGroup;
  };

  renderCategory = (category) => {
    const {
      cacheBustParam,
      imagePath,
      imageType,
      theme = {},
      emojis,
      checkMouseDown,
      onEmojiSelect,
      onEmojiMouseDown,
      useNativeArt,
      isActiveGroup,
    } = this.props;

    const categoryEmojis = emojis[category];

    return Object.keys(categoryEmojis).map((key) => (
      <li
        key={categoryEmojis[key][0]}
        className={theme.emojiSelectPopoverGroupItem}
      >
        {isActiveGroup && (
          <Entry
            emoji={categoryEmojis[key][0]}
            theme={theme}
            imagePath={imagePath}
            imageType={imageType}
            cacheBustParam={cacheBustParam}
            toneSet={categoryEmojis[key].length > 1 ? categoryEmojis[key] : null}
            checkMouseDown={checkMouseDown}
            onEmojiSelect={onEmojiSelect}
            onEmojiMouseDown={onEmojiMouseDown}
            useNativeArt={useNativeArt}
          />
        )}
      </li>
    ));
  };

  render() {
    const {
      theme = {},
      group,
    } = this.props;

    return (
      <section
        className={theme.emojiSelectPopoverGroup}
        ref={(element) => { this.container = element; }}
      >
        <h3 className={theme.emojiSelectPopoverGroupTitle}>{group.title}</h3>
        <ul
          className={theme.emojiSelectPopoverGroupList}
          ref={(element) => { this.list = element; }}
        >
          {group.categories.map((category) => this.renderCategory(category))}
        </ul>
      </section>
    );
  }
}
