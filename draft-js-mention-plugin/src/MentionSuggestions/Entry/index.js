import React, {
  Component,
  PropTypes
} from 'react';
import Avatar from './Avatar';

export default class Entry extends Component {
  static contextTypes = {
    getUserAgent: PropTypes.func
  };

  constructor(props) {
    super(props);
    this.mouseDown = false;
  }

  componentDidUpdate() {
    this.mouseDown = false;
  }

  onMouseUp = () => {
    if (this.mouseDown) {
      this.mouseDown = false;
      this.props.onMentionSelect(this.props.mention);
    }
  };

  onMouseDown = (event) => {
    // Note: important to avoid a content edit change
    event.preventDefault();

    this.mouseDown = true;
  };

  onMouseEnter = () => {
    this.props.onMentionFocus(this.props.index);
  };

  onTouchStart = (event) => {
    event.preventDefault();

    this.props.onMentionSelect(this.props.mention);
  };

  render() {
    const { theme = {} } = this.props;
    const className = this.props.isFocused ? theme.mentionSuggestionsEntryFocused : theme.mentionSuggestionsEntry;
    let selectMentionHandlers;

    if (this.context.getUserAgent().isMobile) {
      selectMentionHandlers = {
        onTouchStart: this.onTouchStart
      };
    } else {
      selectMentionHandlers = {
        onMouseDown: this.onMouseDown,
        onMouseUp: this.onMouseUp,
        onMouseEnter: this.onMouseEnter
      };
    }

    return (
      <div
        className={className}
        {...selectMentionHandlers}
        role="option"
      >
        <Avatar mention={this.props.mention} theme={theme} />
        <span className={theme.mentionSuggestionsEntryText}>{this.props.mention.get('name')}</span>
      </div>
    );
  }
}
