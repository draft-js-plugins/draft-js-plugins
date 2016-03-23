import React, {
  // PropTypes,
  Component,
} from 'react';

export default class EmojiOption extends Component {

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
      this.props.onEmojiSelect(this.props.mention);
    }
  };

  onMouseDown = (event) => {
    // Note: important to avoid a content edit change
    event.preventDefault();

    this.mouseDown = true;
  };

  onMouseEnter = () => {
    this.props.onEmojiFocus(this.props.index);
  };

  render() {
    const { theme } = this.props;
    const className = this.props.isFocused ? theme.get('autocompleteEntryFocused') : theme.get('autocompleteEntry');
    return (
      <div
        className={ className }
        onMouseDown={ this.onMouseDown }
        onMouseUp={ this.onMouseUp }
        onMouseEnter={ this.onMouseEnter }
        role="option"
      >
        <span className={ theme.get('autocompleteEntryText') }>
          { this.props.mention.get('name') } lala
        </span>
      </div>
    );
  }
}
