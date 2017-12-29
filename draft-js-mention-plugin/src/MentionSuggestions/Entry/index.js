import React, {
  Component,
} from 'react';
import PropTypes from 'prop-types';

export default class Entry extends Component {

  static propTypes = {
    entryComponent: PropTypes.any.isRequired,
    searchValue: PropTypes.string,
    onMentionSelect: PropTypes.func
  };

  constructor(props) {
    super(props);
    this.mouseDown = false;
  }

  componentDidUpdate() {
    this.mouseDown = false;
  }

  onTouchStart = (event) => {
    // this fixes an issue with onMouseDown and onMouseUp events not firing on mobile devices, making it
    // difficult if not impossible to tap on entries to select them
    event.preventDefault();
    this.props.onMentionSelect(this.props.mention);
  };

  onMouseUp = () => {
    if (this.mouseDown) {
      this.props.onMentionSelect(this.props.mention);
      this.mouseDown = false;
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

  render() {
    const { theme = {}, mention, searchValue, isFocused } = this.props;
    const className = isFocused ? theme.mentionSuggestionsEntryFocused : theme.mentionSuggestionsEntry;
    const EntryComponent = this.props.entryComponent;
    return (
      <EntryComponent
        className={className}
        onTouchStart={this.onTouchStart}
        onMouseDown={this.onMouseDown}
        onMouseUp={this.onMouseUp}
        onMouseEnter={this.onMouseEnter}
        role="option"
        theme={theme}
        mention={mention}
        isFocused={isFocused}
        searchValue={searchValue}
      />
    );
  }
}
