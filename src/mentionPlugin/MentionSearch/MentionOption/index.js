import React, {
  // PropTypes,
  Component,
} from 'react';
import styles from './styles.css';
import Avatar from './Avatar';

export default class MentionOption extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  onMentionSelect = () => {
    this.props.onMentionSelect(this.props.mention);
  };

  onMouseEnter = () => {
    this.props.onMentionFocus(this.props.index);
  };

  render() {
    const className = this.props.isFocused ? styles.focusedRoot : styles.root;
    return (
      <div
        className={ className }
        onClick={ this.onMentionSelect }
        onMouseEnter={ this.onMouseEnter }
        role="option"
      >
        <Avatar mention={ this.props.mention } />
        <span className={ styles.text }>{ this.props.mention.get('name') }</span>
      </div>
    );
  }
}
